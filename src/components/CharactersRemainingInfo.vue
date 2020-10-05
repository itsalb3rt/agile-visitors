<template>
  <div v-if="text.length >= numberCharactersToNotify">
    {{ $t("common.messages.maximum_characters").replace("{NUMBER}", maxLength) }}
    <span class="text-negative"
      >{{ maxLength - text.length }}
      {{ $t("common.messages.characteres_remaining") }}</span
    >
  </div>
</template>

<script>
export default {
  name: 'ComponentCharactersRemainingInfo',
  props: {
    text: String,
    maxLength: Number,
    numberCharactersToNotify: Number
  },
  data () {
    return {}
  }
}
</script>
