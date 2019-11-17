<template>
  <div>
    <material-input/>
    <div class="level pt-40">
      <div class="level-item">
        <button class="button is-medium is-info level-item" @click="addSetup">Add Item</button>
      </div>
    </div>
  </div>
</template>

<script>
import MaterialInput from './components/MaterialInput.vue'
export default {
  name: 'setup',
  components: {
    MaterialInput
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.pt-40 {
  padding-top: 40px;
}
</style>
