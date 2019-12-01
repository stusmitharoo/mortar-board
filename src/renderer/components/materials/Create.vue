<template>
  <main>
    <material-input
      @materialInfoToParent="materialInfoToParent"
      @layerInfoToParent="layerInfoToParent"
    />
    <div class="level pt-40">
      <div class="level-item">
        <button class="button is-medium is-info level-item" @click="addMaterial">Add Item</button>
      </div>
    </div>
  </main>
</template>

<script>
import MaterialInput from './components/MaterialInput.vue'
import { mapActions } from 'vuex'
export default {
  name: 'create',
  components: {
    MaterialInput
  },
  data() {
    return {
      materialItemInfo: [],
      layerInfo: []
    }
  },
  methods: {
    ...mapActions([
      'addMaterialItem'
    ]),
    addMaterial() {
      this.materialItemInfo.push(this.layerInfo)
      // this.addMaterialItem(this.materialItemInfo)
      // this.materialItemInfo = []
    },
    materialInfoToParent(items) {
      this.materialItemInfo = items
    },
    layerInfoToParent(items) {
      this.layerInfo = items
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
