<script setup>
import { JsonTreeView } from "json-tree-view-vue3";
import 'node-jq';
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
          <FloatLabel>
            <label for="jq">JQ query</label>
          <Textarea id="jq" auto-resize rows="25" v-model="jq" class="w-full h-full"/>
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
    return {json: '', jq: ''};
  },
  computed: {
    jsondata() {
      try {
        return jq.run(this.jq, JSON.parse(this.json), {input: 'json'}).then(console.log);
      }
      catch (exception) {
        return null;
      }
    }
  }
}
</script>