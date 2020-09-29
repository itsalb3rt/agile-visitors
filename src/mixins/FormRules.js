export default {
  data () {
    return {
      // eslint-disable-next-line no-mixed-operators
      formRulesMixin_requiredInput: val => val && val.trim().length > 0 || 'Please fill in this field'
    }
  }
}
