<script setup>
import { JsonTreeView } from "json-tree-view-vue3";
import 'json-tree-view-vue3/dist/style.css';
</script>

<template>
    <div className="card">
        <div class="font-semibold text-xl mb-4">JSON tree viewer</div>
      <div class="grid">
        <div class="col field">
          <FloatLabel>
            <label for="json">JSON</label>
          <Textarea id="json" auto-resize rows="25" :invalid="jsondata == null" v-model="json" class="w-full h-full"/>
          </FloatLabel>
        </div>
        <div class="col">
          <JsonTreeView :json="jsondata" :maxDepth="3" />
        </div>
      </div>
    </div>
</template>

<style scoped lang="scss">

</style>
<script>
export default {
  data() {
    return {json: ''};
  },
  computed: {
    jsondata() {
      try {
        return JSON.stringify(JSON.parse(this.json));
      }
      catch (exception) {
        return null;
      }
    }
  }
}
</script>