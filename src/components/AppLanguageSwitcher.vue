<template>
  <q-select
    v-model="lang"
    label-color="white"
    :options="langOptions"
    :label="$t('language')"
    borderless
    emit-value
    map-options
    style="min-width: 120px;"
  >
    <template v-slot:selected-item="scope">
          <q-chip
            dense
            :tabindex="scope.tabindex"
            color="primary"
            class="q-ma-none"
          >
            <q-avatar :icon="scope.opt.icon" />
            <span style="color:white">{{ scope.opt.label }}</span>
          </q-chip>
        </template>
  </q-select>
</template>

<script>
export default {
  data () {
    return {
      lang: this.$i18n.locale,
      langOptions: [
        { value: 'en-us', label: 'English', icon: '🇺🇸' },
        { value: 'es', label: 'Spanish', icon: '🇪🇸' }
      ]
    }
  },
  watch: {
    lang (lang) {
      this.$i18n.locale = lang
    }
  }
}
</script>
