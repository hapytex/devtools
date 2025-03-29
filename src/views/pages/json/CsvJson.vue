<script setup>
import { JsonTreeView } from "json-tree-view-vue3";
import 'json-tree-view-vue3/dist/style.css'
import csvParser from "csv-parser";
</script>

<template>
    <div className="card">
        <div class="font-semibold text-xl mb-4">CSV to JSON</div>
          <Textarea v-model="csv"/>
          <JsonTreeView :json="json" :maxDepth="3" />
    </div>
</template>

<style scoped lang="scss">

</style>
<script>
export default {
  data() {
    return {csv: '', 'csvparser': csvParser()};
  },
  computed: {
    json() {
      if(this.csv == null) {
        return 'null';
      }
      console.log(this.csvparser(this.csv));
      return JSON.stringify(this.csv.split(/\r?\n/));
    }
  }
}
</script>