<script setup>
import { JsonTreeView } from "json-tree-view-vue3";
import 'json-tree-view-vue3/dist/style.css';
</script>

<template>
    <div className="card">
        <div class="font-semibold text-xl mb-4">CSV to JSON</div>
          <Textarea :invalid="jsondata == null" v-model="json"/>
          <JsonTreeView :json="jsondata" :maxDepth="3" />
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