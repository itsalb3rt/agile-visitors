<template>
  <div class="q-pa-sm" style="max-width: 300px">
    <q-input :label="$attrs.label" filled v-model="internarValue" mask="date" :rules="['date']">
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
            <q-date @input="(payload) => $emit('input', payload)" v-model="internarValue">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  data () {
    return {
      internarValue: null
    }
  },
  watch: {
    value (newValue) {
      this.internarValue = newValue
    }
  }
}
</script>
