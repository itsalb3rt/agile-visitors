<template>
  <q-page-container>
    <div class="q-ml-md">
      <q-btn class="q-mr-sm" color="primary" icon="file_copy" label="GET REPORT" :loading="isReportLoading" @click="fetchReport()" />
      <q-btn color="primary" icon="arrow_circle_down" label="DOWNLOAD CSV" @click="downloadReportAsCSV()" :loading="isDownloadLoading" v-show="visits.length > 0" />
    </div>
    <q-page>
    <div class="q-pa-sm">
    <div class="row">
      <div class="col">
        <AppDatePicker class="inline-block" label="Start" v-model.trim="filters.fromDate" />
        <AppDatePicker class="inline-block" label="End" v-model.trim="filters.toDate" />
      </div>
    </div>
    <div class="q-pl-sm row">
        <div class="col flex">
          <q-input disable class="q-mr-md" label="Visitor code" v-model.trim="filters.visitorCode" />
          <q-input disable label="Receiver code" v-model.trim="filters.receiverCode" />
        </div>
    </div>
    <div class="row q-mt-lg">
      <div class="col">
        <div class="q-pa-md">
        <q-table
          title="Report"
          :data="visits"
          :columns="columns"
          :loading="isReportLoading"
          row-key="date"
        />
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
      columns: [
        {
          name: 'visitor',
          required: true,
          label: 'Visitor code',
          align: 'left',
          field: row => row.visitor.code,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'fullNameVisitor', align: 'left', label: 'Full name visitor', field: row => row.visitor.fullName, sortable: true },
        { name: 'titleVisitor', label: 'Title / Position visitor', field: row => row.visitor.titlePosition, sortable: true },
        { name: 'reason', align: 'left', label: 'Reason for visit', field: 'reasonVisit' },
        { name: 'receiverCode', align: 'left', label: 'Receiver code', field: row => row.receiver.code },
        { name: 'fullNameReceiver', align: 'left', label: 'Full name receiver', field: row => row.receiver.fullName },
        { name: 'titleReceiver', align: 'left', label: 'Title / Position receiver', field: row => row.receiver.titlePosition, sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        { name: 'date', align: 'left', label: 'Date', field: row => date.formatDate(row.receiver.createdAt, 'YYYY/MM/DD hh:mm:ss A'), sortable: true }
      ],
      visits: [],
      isReportLoading: false,
      isDownloadLoading: false
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

      var csvData = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
      var csvURL = null
      if (navigator.msSaveBlob) {
        csvURL = navigator.msSaveBlob(csvData, fileName)
      } else {
        csvURL = window.URL.createObjectURL(csvData)
      }

      var tempLink = document.createElement('a')
      tempLink.href = csvURL
      tempLink.setAttribute('download', fileName)
      tempLink.click()
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
