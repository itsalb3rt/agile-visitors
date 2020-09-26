<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
         <q-btn to="/" flat no-caps no-wrap class="q-ml-xs">
          <q-icon name="nature_people" color="dark" size="28px" />
          <q-toolbar-title shrink class="text-weight-bold">
            Agile visitors
          </q-toolbar-title>
        </q-btn>
        <q-btn
          to="/"
          flat
          aria-label="register-visit"
        >Register visit</q-btn>
        <q-btn
          to="/reports"
          flat
          aria-label="reports"
        >Reports</q-btn>
        </q-toolbar-title>
        <q-btn @click="goToGithub" flat no-caps no-wrap class="q-ml-xs">
          <q-icon :name="icons.fabGithub" color="dark" size="28px" />
            <div v-show="screenConfig.md || screenConfig.lg" class="q-ml-sm">
              Github
            </div>
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page padding>
        <transition name="fade">
          <router-view />
        </transition>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { fabGithub } from '@quasar/extras/fontawesome-v5'

export default {
  name: 'MainLayout',
  mounted () {
    console.log(this.$q.screen)
  },
  computed: {
    /**
     * Built-in quasar screen information for better ui management.
    */
    screenConfig () {
      return this.$q.screen
    }
  },
  methods: {
    goToGithub () {
      window.location.href = 'https://github.com/itsalb3rt/agile-visitors'
    }
  },
  data () {
    return {
      icons: {
        fabGithub
      }
    }
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
