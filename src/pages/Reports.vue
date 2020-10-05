<template>
  <q-page-container>
    <div class="q-ml-md">
      <q-btn class="q-mr-sm" color="primary" icon="file_copy" :label="$t('reports.get_report')" :loading="isReportLoading" @click="fetchReport()" />
      <q-btn color="primary" icon="arrow_circle_down" :label="$t('reports.csv_button')" @click="downloadReportAsCSV()" :loading="isDownloadLoading" v-show="visits.length > 0" />
    </div>
    <q-page>
    <div class="q-pa-sm">
    <div class="row">
      <div class="col">
        <AppDatePicker class="inline-block" :label="$t('reports.from_date')" v-model.trim="filters.fromDate" />
        <AppDatePicker class="inline-block" :label="$t('reports.to_date')" v-model.trim="filters.toDate" />
      </div>
    </div>
    <div class="q-pl-sm row">
        <div class="col flex">
          <q-input disable class="q-mr-md" :label="$t('reports_table.visitor_code')" v-model.trim="filters.visitorCode" />
          <q-input disable :label="$t('reports_table.receiver_code')" v-model.trim="filters.receiverCode" />
        </div>
    </div>
    <div class="row q-mt-lg">
      <div class="col">
        <div class="q-pa-md">
          <q-table
            :title="$t('reports.title')"
            :data="visits"
            :columns="tableColumns"
            :loading="isReportLoading"
            :rows-per-page-label="$t('reports.table_recors_per_page')"
            row-key="date"
          >
            <template #top-right>{{ $t('reports.table_results',{results: visits.length}) }}</template>
          </q-table>
        </div>
      </div>
    </div>
  </div>
  </q-page>
  </q-page-container>
</template>

<script>
import { date } from 'quasar'
import Papa from 'papaparse'

export default {
  components: {
    AppDatePicker: () => import('../components/AppDatePicker')
  },
  name: 'ReportPageComponent',
  data () {
    return {
      filters: {
        visitorCode: '',
        receiverCode: '',
        fromDate: '',
        toDate: ''
      },
      visits: [],
      isReportLoading: false,
      isDownloadLoading: false
    }
  },
  computed: {
    tableColumns () {
      return [
        {
          name: 'visitor',
          required: true,
          label: this.$t('reports_table.visitor_code'),
          align: 'left',
          field: row => row.visitor.code,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'fullNameVisitor', align: 'left', label: this.$t('reports_table.visitor_name'), field: row => row.visitor.fullName, sortable: true },
        { name: 'titleVisitor', label: this.$t('reports_table.visitor_title'), field: row => row.visitor.titlePosition, sortable: true },
        { name: 'reason', align: 'left', label: this.$t('reports_table.reason_for_visit'), field: 'reasonVisit' },
        { name: 'receiverCode', align: 'left', label: this.$t('reports_table.receiver_code'), field: row => row.receiver.code },
        { name: 'fullNameReceiver', align: 'left', label: this.$t('reports_table.receiver_name'), field: row => row.receiver.fullName },
        { name: 'titleReceiver', align: 'left', label: this.$t('reports_table.receiver_title'), field: row => row.receiver.titlePosition, sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        { name: 'date', align: 'left', label: this.$t('date'), field: row => date.formatDate(row.createdAt, 'YYYY/MM/DD hh:mm:ss A'), sortable: true }
      ]
    }
  },
  methods: {
    fetchReport () {
      this.isReportLoading = true
      this.$store.dispatch('visits/getAll', this.filters)
        .then(({ data: response }) => {
          this.visits = response.data
        })
        .catch(error => {
          console.log(error)
          this.$q.notify({
            type: 'negative',
            message: 'Error while fetching the report.'
          })
        })
        .finally(() => {
          this.isReportLoading = false
        })
    },
    downloadReportAsCSV () {
      this.isDownloadLoading = true

      const parseVisits = []

      this.visits.forEach(visit => {
        parseVisits.push({
          visitor_code: visit.visitor.code,
          visitor_full_name: visit.visitor.fullName,
          visitor_title_position: visit.visitor.titlePosition,
          reason_visit: visit.reasonVisit,
          receiver_code: visit.receiver.code,
          receiver_full_name: visit.receiver.fullName,
          date: date.formatDate(visit.createdAt, 'YYYY/MM/DD hh:mm:ss A')
        })
      })

      const csv = Papa.unparse(parseVisits)
      const fileName = `${date.formatDate(Date.now(), 'YYYY/MM/DD hh:mm:ss')}.csv`

      const a = document.createElement('a')
      a.textContent = 'download'
      a.download = fileName
      a.href = 'data:text/csv;charset=utf-8,%EF%BB%BF' + encodeURIComponent(csv)
      a.click()
      this.isDownloadLoading = false
    }
  }
}
</script>

<style scoped>
  .inline-block {
    display: inline-block;
  }
</style>
