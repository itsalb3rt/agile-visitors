<template>
  <div class="q-pa-md">
    <div class="row q-gutter-md">
      <div class="col">
        <label class="text-weight-bold text-h4" for="">Visitor</label>

          <q-input label="Visitor code" v-model="form.visitor.code" />
          <q-input label="Full name" v-model="form.visitor.fullName" />
          <q-input label="Title / Position" v-model="form.visitor.title" />
          <q-input
            v-model="form.visitor.reasonForVisit"
            label="Reason for visit"
            filled
            type="textarea"
          />
      </div>
      <div class="col">
        <label class="text-weight-bold text-h4" for="">Receiver</label>

        <q-input label="Receiver code" v-model="form.receiver.code" />
          <q-input label="Full name" v-model="form.receiver.fullName" />
          <q-input label="Title / Position" v-model="form.receiver.title" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      form: {
        visitor: {
          code: '',
          fullName: '',
          title: '',
          reasonForVisit: ''
        },
        receiver: {
          code: '',
          fullName: '',
          title: ''
        }
      }
    }
  }
}
</script>
