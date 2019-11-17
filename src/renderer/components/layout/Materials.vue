<template>
  <div>
    <navbar/>
    <bread-crumbs/>
    <sidebar/>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/menu/Navbar.vue'
import BreadCrumbs from '@/components/menu/BreadCrumbs.vue'
import Sidebar from '@/components/menu/Sidebar.vue'
export default {
  name: 'materials-layout',
  components: {
    Navbar,
    BreadCrumbs,
    Sidebar
  }
}
</script>

<style lang="scss">
</style>

