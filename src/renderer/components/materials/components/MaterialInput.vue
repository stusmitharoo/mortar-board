<template>
  <section>
    <p class="is-size-4">Link your'e layers</p>
    <div v-for="layer in layers" :key="layer.index">
      <div class="level pt-40">
        <p class="level-item level-left is-size-5 field-name">{{ layer.layer }} :</p>
        <div class="level-item level-left">
          <input
            type="text"
            class="input is-primary"
            v-model="layer.amount"
            placeholder="Enter details"
            @blur="createLayers"
          >
        </div>
      </div>
    </div>
    <p class="is-size-4 pt-40">Enter the item details</p>
    <div v-for="field in fields" :key="field.index">
      <div class="level pt-40">
        <p class="level-item level-left is-size-5 field-name">{{ field.field }} :</p>
        <div class="level-item level-left">
          <input
            type="text"
            class="input is-primary"
            v-model="field.amount"
            placeholder="Enter details"
            @blur="createMaterialItem"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'material-input',
  data() {
    return {
      materialItemInfo: [],
      fields: [],
      layers: [],
      layerInfo: []
    }
  },
  created() {
    this.getFields.forEach((item) => {
      this.fields.push({
        field: item.field,
        amount: null
      })
    })
    this.getLayers.forEach((item) => {
      this.layers.push({
        layer: item.layer,
        amount: null
      })
    })
  },
  computed: {
    ...mapState({
      getFields: state => state.materials.fields,
      getLayers: state => state.materials.layers
    })
  },
  methods: {
    createMaterialItem() {
      this.materialItemInfo = []
      this.fields.forEach((item) => {
        this.materialItemInfo.push({
          field: item.field,
          amount: item.amount
        })
        this.$emit('materialInfoToParent', this.materialItemInfo)
      })
    },
    createLayers() {
      this.layerInfo = []
      this.fields.forEach((item) => {
        this.layerInfo.push({
          layer: item.layer,
          amount: item.amount
        })
        this.$emit('layerInfoToParent', this.layerInfo)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.field-name {
  max-width: 150px;
}
section {
  padding-right: 40px;
}
</style>
