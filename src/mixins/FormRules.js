export default {
  data () {
    return {
      // eslint-disable-next-line no-mixed-operators
      formRulesMixin_requiredInput: val => val && val.trim().length > 0 || this.$t('common.messages.requiredInput'),
      formRulesMixin_codeInput: val => /^[a-zA-Z0-9-_#]+$/.test(val) || this.$t('common.messages.codeInput'),
      formRulesMixin_nameInput: val => /^[a-zA-Z\s]+$/.test(val) || this.$t('common.messages.nameInput')
    }
  }
}
