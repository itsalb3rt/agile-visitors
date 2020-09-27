<template>
  <q-page-container>
    <div class="q-ml-md">
      <q-btn class="q-mr-sm" color="primary" icon="file_copy" label="GET REPORT" />
      <q-btn color="primary" icon="arrow_circle_down" label="DOWNLOAD CSV" />
    </div>
    <q-page>
    <div class="q-pa-sm">
    <div class="row">
      <div class="col">
        <MyDatePicker class="inline-block" label="Start" v-model="filters.fromDate" />
        <MyDatePicker class="inline-block" label="End" v-model="filters.toDate" />
      </div>
    </div>
    <div class="q-pl-sm row">
        <div class="col flex">
          <q-input class="q-mr-md" label="Visitor code" v-model="filters.visitorCode" />
          <q-input label="Receiver code" v-model="filters.receiverCode" />
        </div>
    </div>
    <div class="row q-mt-lg">
      <div class="col">
        <div class="q-pa-md">
        <q-table
          title="Report"
          :data="data"
          :columns="columns"
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
    MyDatePicker: () => import('../components/AppDatePicker')
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
          name: 'visitorCode',
          required: true,
          label: 'Visitor code',
          align: 'left',
          field: 'visitorCode',
          format: val => `${val}`,
          sortable: true
        },
        { name: 'fullNameVisitor', align: 'left', label: 'Full name visitor', field: 'fullNameVisitor', sortable: true },
        { name: 'titleVisitor', label: 'Title / Position visitor', field: 'titleVisitor', sortable: true },
        { name: 'reason', align: 'left', label: 'Reason for visit', field: 'reason' },
        { name: 'receiverCode', align: 'left', label: 'Receiver code', field: 'receiverCode' },
        { name: 'fullNameReceiver', align: 'left', label: 'Full name receiver', field: 'fullNameReceiver' },
        { name: 'titleReceiver', align: 'left', label: 'Title / Position receiver', field: 'titleReceiver', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        { name: 'date', align: 'left', label: 'Date', field: 'date', sortable: true }
      ],
      data: [
        {
          visitorCode: 13454,
          fullNameVisitor: 'Pedro Rodriguez',
          titleVisitor: 'Programer',
          reason: 'asdasdafasdasdasd',
          receiverCode: 15465,
          fullNameReceiver: 'Mario Adans',
          titleReceiver: 'Accountiung',
          date: '2018/02/15'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .inline-block {
    display: inline-block;
  }
</style>
