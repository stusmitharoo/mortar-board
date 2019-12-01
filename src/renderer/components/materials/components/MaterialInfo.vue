<template>
  <section>
    <div class="level pt-40">
      <div class="level-left">
        <p class="level-item is-size-5">Add and enter material fields</p>
        <button class="button is-success" @click="addField">Add fields</button>
      </div>
    </div>
    <div class="columns">
      <div class="column is-paddingless">
        <p class="is-size-6">Enter your fields</p>
        <div v-if="childMaterialFields" v-for="field in childMaterialFields" :key="field.index">
          <div class="field">
            <div class="control">
              <input
                v-model="field.field"
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
  name: 'material-Info',
  data() {
    return {
      childMaterialFields: []
    }
  },
  props: {
    parentData: {
      type: Array,
      default: []
    }
  },
  beforeMount() {
    this.childMaterialFields = this.parentData
  },
  methods: {
    addField() {
      this.childMaterialFields.push({
        field: null
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
