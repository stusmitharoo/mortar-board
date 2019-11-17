<template>
  <section>
    <div class="level">
      <div class="level-left">
        <p class="level-item is-size-5">Add and enter material layers</p>
        <button class="button is-success" @click="addLayer">Add layer</button>
      </div>
    </div>
    <div class="columns">
      <div class="column is-paddingless">
        <p class="is-size-6">Enter your layers</p>
        <div v-if="childLayers" v-for="layer in childLayers" :key="layer.index">
          <div class="field">
            <div class="control">
              <input
                v-model="layer.layer"
                class="input is-primary"
                type="text"
                placeholder="Enter layer"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'layer-tree',
  data() {
    return {
      childLayers: []
    }
  },
  props: {
    parentData: {
      type: Array,
      default: []
    }
  },
  beforeMount() {
    this.childLayers = this.parentData
  },
  methods: {
    addLayer() {
      this.childLayers.push({
        layer: null
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.field {
  padding: 10px 0px;
  width: 340px;
}
</style>
