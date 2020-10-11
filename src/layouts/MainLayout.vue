<template>
  <div class="q-pa-md">
    <q-layout view="hHh Lpr lff">
      <q-header elevated>
        <MobileScreenToolbar v-if="this.$q.screen.xs" />
        <DesktopScreenToolbar v-else />
      </q-header>
      <q-page-container>
        <q-page padding>
          <transition name="fade">
            <router-view />
          </transition>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
export default {
  name: 'MainLayout',
  mounted () {
    this.fetchLanguage()
  },
  methods: {
    fetchLanguage () {
      this.$i18n.locale = window.localStorage.getItem('_currentLang')
    }
  },
  components: {
    DesktopScreenToolbar: () => import('../components/DesktopScreenToolbar'),
    MobileScreenToolbar: () => import('../components/MobileScreenToolbar')
  }
}
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
