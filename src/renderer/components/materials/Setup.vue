<template>
  <div>
    <layer-tree :parentData="layers"/>
    <material-info :parentData="fields"/>
    <div class="level pt-40">
      <div class="level-item">
        <button class="button is-medium is-info level-item" @click="addSetup">Add setup</button>
      </div>
    </div>
  </div>
</template>

<script>
import MaterialInfo from './components/MaterialInfo.vue'
import LayerTree from './components/LayerTree.vue'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'setup',
  components: {
    MaterialInfo,
    LayerTree
  },
  data() {
    return {
      layers: [
        {
          layer: 'navigation'
        }
      ],
      fields: []
    }
  },
  created() {
    this.layers = this.getLayers
    this.fields = this.getFields
  },
  methods: {
    ...mapActions([
      'addLayers',
      'addFields'
    ]),
    addSetup() {
      this.$store.dispatch('addLayers', this.layers)
      this.$store.dispatch('addFields', this.fields)
    }
  },
  computed: {
    ...mapState({
      getLayers: state => state.materials.layers,
      getFields: state => state.materials.fields
    })
  }
}
</script>

<style lang="scss" scoped>
.pt-40 {
  padding-top: 40px;
}
</style>
