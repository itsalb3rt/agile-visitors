<template>
  <div>
    <q-toolbar>
      <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
      <q-toolbar-title shrink class="text-weight-bold">Agile visitors</q-toolbar-title>
    </q-toolbar>
    <q-drawer
    v-model="drawer"
    show-if-above
    :width="200"
    :breakpoint="500"
    content-class="bg-grey-3"
    >
      <q-scroll-area class="fit">
        <q-list padding class="menu-list text-black">
          <q-item
            clickable
            v-ripple
            @click="goToRoute({route: '/', routeName: 'home'})"
            :active="currentPage === 'home'  ? true : false"
          >
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>

            <q-item-section>
              {{ $t('register_visit_label') }}
            </q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            @click="goToRoute({route: '/reports', routeName: 'reports'})"
            :active="currentPage === 'reports'  ? true : false"
          >
            <q-item-section avatar>
              <q-icon name="table_chart" />
            </q-item-section>

            <q-item-section>
              {{ $t('reports_label') }}
            </q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            @click="goToGithub"
          >
            <q-item-section avatar>
              <q-icon :name="icons.fabGithub" color="dark" />
            </q-item-section>

            <q-item-section>
                GitHub
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section avatar>
              <q-icon name="language" />
            </q-item-section>

            <q-item-section>
              <q-select
                v-model="lang"
                label-color="black"
                :options="langOptions"
                borderless
                emit-value
                map-options
              >
                <template v-slot:selected-item="scope">
                  <q-chip
                    color="primary"
                    class="q-ma-none"
                  >
                    <span style="color:white">{{ scope.opt.label }}</span>
                  </q-chip>
                </template>
              </q-select>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>
  </div>
</template>

<script>
import { fabGithub } from '@quasar/extras/fontawesome-v5'

export default {
  name: 'MobileScreenToolbar',
  mounted () {
    this.currentPage = this.$route.name
  },
  computed: {
    screenConfig () {
      return this.$q.screen
    },
    langOptions () {
      return [
        { value: 'en-us', label: this.$t('languages.english'), icon: '🇺🇸' },
        { value: 'es', label: this.$t('languages.spanish'), icon: '🇪🇸' }
      ]
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
      currentPage: 'home',
      drawer: false,
      lang: this.$i18n.locale
    }
  },
  watch: {
    lang (lang) {
      this.$i18n.locale = lang
      window.localStorage.setItem('_currentLang', lang)
    }
  }
}
</script>
