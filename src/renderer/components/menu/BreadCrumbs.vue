<template>
  <nav class="breadcrumb is-small" aria-label="breadcrumbs">
    <ul>
      <li v-for="crumb in crumbs" :key="crumb.index">
        <a href="#" aria-current="page">{{ crumb }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'bread-crumbs',
  data() {
    return {
      crumbs: null
    }
  },
  created() {
    this.crumbs = this.$route.path.split('/').splice('1')
  }
}
</script>


<style lang="scss" scoped>
nav {
  padding-top: 0px;
}
.breadcrumb:not(:last-child) {
  margin-bottom: 0px;
}
</style>
