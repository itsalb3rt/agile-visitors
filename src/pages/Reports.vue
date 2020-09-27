<template>
  <q-page-container>
    <div class="q-ml-md">
      <q-btn class="q-mr-sm" color="primary" icon="file_copy" label="GET REPORT" :loading="isReportLoading" @click="fetchReport()" />
      <q-btn color="primary" icon="arrow_circle_down" label="DOWNLOAD CSV" disable />
    </div>
    <q-page>
    <div class="q-pa-sm">
    <div class="row">
      <div class="col">
        <AppDatePicker class="inline-block" label="Start" v-model="filters.fromDate" />
        <AppDatePicker class="inline-block" label="End" v-model="filters.toDate" />
      </div>
    </div>
    <div class="q-pl-sm row">
        <div class="col flex">
          <q-input disable class="q-mr-md" label="Visitor code" v-model="filters.visitorCode" />
          <q-input disable label="Receiver code" v-model="filters.receiverCode" />
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
          :pagination="initialPagination"
          row-key="name"
        />
        </div>
      </div>
    </div>
  </div>
  </q-page>
  </q-page-container>
</template>

<script>
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
        { name: 'date', align: 'left', label: 'Date', field: 'createdAt', sortable: true }
      ],
      visits: [],
      isReportLoading: false,
      initialPagination: {
        sortBy: 'desc',
        descending: false,
        page: 2
      }
    }
  },
  methods: {
    fetchReport () {
      this.isReportLoading = true
      this.$store.dispatch('visits/getAll', this.filters)
        .then(({ data: response }) => {
          this.visits = response.data
          this.initialPagination.rowsNumber = response.data.length
          this.isReportLoading = false
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
  .inline-block {
    display: inline-block;
  }
</style>
