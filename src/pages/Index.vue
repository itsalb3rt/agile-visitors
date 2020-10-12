<template>
  <div class="q-pa-md">
    <q-form @submit="createvisit()" ref="formVisits" class="q-gutter-md">
      <div class="row q-gutter-xs">
        <div class="col-12 col-md-5 col-sm-12">
          <label class="text-weight-bold text-h4" for="">{{ $t('visitor') }}</label>
          <q-input
            :label="$t('register_visit_form.code')"
            v-model="form.visitor.code"
            maxlength="30"
            :rules="[formRulesMixin_requiredInput, formRulesMixin_codeInput]"
            lazy-rules
            debounce="500"
            :loading="loading.visitor"
            @input="requestVisitorByCode()"
          />
          <characters-remaining-info :text="form.visitor.code" :maxLength="30" :numberCharactersToNotify="20" />
          <q-input
            :label="$t('register_visit_form.full_name')"
            v-model="form.visitor.fullName"
            maxlength="70"
            :rules="[formRulesMixin_requiredInput, formRulesMixin_nameInput]"
          />
          <characters-remaining-info :text="form.visitor.fullName" :maxLength="70" :numberCharactersToNotify="50" />
          <q-input
            :label="$t('register_visit_form.title')"
            v-model="form.visitor.titlePosition"
            maxlength="150"
            :rules="[formRulesMixin_requiredInput]"
          />
          <characters-remaining-info :text="form.visitor.titlePosition" :maxLength="150" :numberCharactersToNotify="130" />
          <q-input
            v-model="form.reasonVisit"
            maxlength="256"
            :label="$t('register_visit_form.reason_for_visit')"
            filled
            type="textarea"
            :rules="[formRulesMixin_requiredInput]"
            class="q-pt-lg"
           />
           <characters-remaining-info :text="form.reasonVisit" :maxLength="256" :numberCharactersToNotify="240" />
        </div>
        <div class="col-12 col-md-5 col-sm-12">
          <label class="text-weight-bold text-h4" for="">{{ $t('receiver') }}</label>

          <q-input
            :label="$t('register_visit_form.code')"
            v-model="form.receiver.code"
            maxlength="30"
            :rules="[formRulesMixin_requiredInput, formRulesMixin_codeInput]"
            debounce="500"
            :loading="loading.receiver"
            @input="requestReceiverByCode()"
          />
          <characters-remaining-info :text="form.receiver.code" :maxLength="30" :numberCharactersToNotify="20" />
          <q-input
            :label="$t('register_visit_form.full_name')"
            v-model="form.receiver.fullName"
            maxlength="70"
            :rules="[formRulesMixin_requiredInput, formRulesMixin_nameInput]"
          />
          <characters-remaining-info :text="form.receiver.fullName" :maxLength="70" :numberCharactersToNotify="50" />
          <q-input
            :label="$t('register_visit_form.title')"
            v-model="form.receiver.titlePosition"
            maxlength="150"
            :rules="[formRulesMixin_requiredInput]"
          />
          <characters-remaining-info :text="form.receiver.titlePosition" :maxLength="150" :numberCharactersToNotify="130" />
        </div>
      </div>
      <div class="row q-gutter-xs">
        <q-btn :loading="loading.submitVisit" color="primary" icon="save" :label="$t('save_button')" type="submit" />
      </div>
    </q-form>
  </div>
</template>

<script>
import formMixin from 'src/mixins/FormRules'
import CharactersRemainingInfo from 'components/CharactersRemainingInfo'

export default {
  name: 'PageIndex',
  mixins: [formMixin],
  components: { CharactersRemainingInfo },
  data () {
    return {
      form: {
        visitor: {
          code: '',
          fullName: '',
          titlePosition: ''
        },
        receiver: {
          code: '',
          fullName: '',
          titlePosition: ''
        },
        reasonVisit: ''
      },
      loading: {
        visitor: false,
        receiver: false,
        submitVisit: false
      }
    }
  },
  methods: {
    createvisit () {
      this.loading.submitVisit = true
      this.$store
        .dispatch('visits/create', this.form)
        .then(response => {
          this.form.visitor.code = null
          this.form.visitor.fullName = null
          this.form.visitor.titlePosition = null
          this.form.reasonVisit = null
          this.$q.notify({
            type: 'positive',
            message: 'Visit register.'
          })
        })
        .catch(error => {
          console.log('createvisit -> error', error)
          this.$q.notify({
            type: 'negative',
            message: 'Internal server error, try again...'
          })
        })
        .finally(() => {
          this.loading.submitVisit = false
        })
    },
    requestVisitorByCode () {
      this.loading.visitor = true
      this.$store
        .dispatch('users/getUsers', `?code=${this.form.visitor.code}`)
        .then(response => {
          if (response.data.data.length > 0) {
            const visitor = response.data.data[0]
            this.form.visitor.fullName = visitor.fullName
            this.form.visitor.titlePosition = visitor.titlePosition
            this.$q.notify({
              type: 'positive',
              message: 'Visitor existis.'
            })
          } else {
            this.$q.notify({
              type: 'negative',
              message: 'Visitor not existis.'
            })
          }
        })
        .catch(error => {
          console.log(error)
        })
        .finally(() => {
          this.loading.visitor = false
        })
    },
    requestReceiverByCode () {
      this.loading.receiver = true
      this.$store
        .dispatch('users/getUsers', `?code=${this.form.receiver.code}`)
        .then(response => {
          if (response.data.data.length > 0) {
            const receiver = response.data.data[0]
            this.form.receiver.fullName = receiver.fullName
            this.form.receiver.titlePosition = receiver.titlePosition
            this.$q.notify({
              type: 'positive',
              message: 'Receiver existis.'
            })
          } else {
            this.$q.notify({
              type: 'negative',
              message: 'Receiver not existis.'
            })
          }
        })
        .catch(error => {
          console.log(error)
        })
        .finally(() => {
          this.loading.receiver = false
        })
    }
  }
}
</script>
