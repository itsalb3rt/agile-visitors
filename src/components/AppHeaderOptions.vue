<template>
  <div class="q-pa-md" style="display: inline-block">
    <q-btn-dropdown icon="menu" color="primary">
      <q-list>
        <q-item clickable v-close-popup @click="() => $router.push('/')">
          <q-item-section>
            <q-item-label>Register visit</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="() => $router.push('/reports')">
          <q-item-section>
            <q-item-label>Reports</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
</template>

<script>
export default {

}
</script>
