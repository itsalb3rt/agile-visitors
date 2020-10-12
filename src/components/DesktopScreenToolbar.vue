<template>
  <q-toolbar>
    <q-toolbar-title>
      <q-btn
        @click="goToRoute({ route: '/', routeName: 'home' })"
        flat
        no-caps
        no-wrap
        class="q-ml-xs"
      >
        <q-avatar size="28px">
          <q-img src="icons/favicon-32x32.png" />
        </q-avatar>
        <q-toolbar-title shrink class="text-weight-bold">
          Agile visitors
        </q-toolbar-title>
      </q-btn>
      <template v-if="!screenConfig.xs">
        <q-btn
          @click="goToRoute({ route: '/', routeName: 'home' })"
          flat
          :color="currentPage === 'home' ? 'yellow' : null"
          aria-label="register-visit"
          >{{ $t("register_visit_label") }}</q-btn
        >
        <q-btn
          to="/reports"
          @click="goToRoute({ route: '/reports', routeName: 'reports' })"
          flat
          :color="currentPage === 'reports' ? 'yellow' : null"
          aria-label="reports"
          >{{ $t("reports_label") }}</q-btn
        >
      </template>
      <template v-else>
        <AppHeaderOptions />
      </template>
    </q-toolbar-title>
    <AppLanguageSwitcher />
    <q-btn @click="goToGithub" flat no-caps no-wrap class="q-ml-xs">
      <q-icon :name="icons.fabGithub" color="dark" size="28px" />
      <div v-if="!screenConfig.xs" class="q-ml-sm">
        Github
      </div>
    </q-btn>
  </q-toolbar>
</template>

<script>
import { fabGithub } from '@quasar/extras/fontawesome-v5'

export default {
  name: 'DesktopScreenToolbar',
  mounted () {
    this.currentPage = this.$route.name
  },
  computed: {
    screenConfig () {
      return this.$q.screen
    }
  },
  methods: {
    goToGithub () {
      window.location.href = 'https://github.com/itsalb3rt/agile-visitors'
    },
    goToRoute ({ route, routeName }) {
      this.currentPage = routeName
      this.$router.push(route)
    }
  },
  data () {
    return {
      icons: {
        fabGithub
      },
      currentPage: 'home'
    }
  },
  components: {
    AppHeaderOptions: () => import('../components/AppHeaderOptions'),
    AppLanguageSwitcher: () => import('../components/AppLanguageSwitcher')
  }
}
</script>
