export default {
  data () {
    return {
      // eslint-disable-next-line no-mixed-operators
      formRulesMixin_requiredInput: val => val && val.trim().length > 0 || 'Please fill in this field',
      formRulesMixin_codeInput: val => /^[a-zA-Z0-9-_#]+$/.test(val) || 'Only alphanumeric characters and - _ # are accepted',
      formRulesMixin_nameInput: val => /^[a-zA-Z\s]+$/.test(val) || 'Only alphabetic characters and white space are accepted'
    }
  }
}
