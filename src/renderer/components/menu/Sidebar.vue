<template>
  <aside class="menu">
    <div v-for="item in items" :key="item.name">
      <button class="button is-small" @click="link(item.link)">
        <p class="is-small">{{ item.name }}</p>
      </button>
    </div>
  </aside>
</template>

<script>
import MaterialData from './data/materials.json'
export default {
  name: 'sidebar',
  data() {
    return {
      items: MaterialData
    }
  },
  methods: {
    link(link) {
      this.$router.push(link)
    }
  }
}
</script>

<style lang="scss" scoped>
aside {
  width: 80px;
  padding: 0 80px;
  float: left;
  margin-right: 20px;
}
button {
  margin: 5px 0px;
}
</style>
