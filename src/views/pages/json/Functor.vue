<script setup>
import { JsonTreeView } from "json-tree-view-vue3";
import 'json-tree-view-vue3/dist/style.css';
import FunctionInput from "@/components/input/FunctionInput.vue";
</script>

<template>
    <div className="card">
        <div class="font-semibold text-xl mb-4">JSON tree viewer</div>
      <div class="grid">
        <div class="col field">
          <FloatLabel>
            <label for="json">JSON</label>
          <Textarea id="json" auto-resize rows="25" v-model="json" class="w-full h-full"/>
          </FloatLabel>
        </div>
        <div class="col field">
          <FloatLabel>
            <label for="json">Function</label>
            <FunctionInput :args="['x']" v-model="func"/>
          </FloatLabel>
        </div>
        <div class="col">
          <Textarea id="json" auto-resize rows="25" :invalid="json_modified == null" :model-value="json_modified" class="w-full h-full"/>
        </div>
      </div>
    </div>
</template>

<style scoped lang="scss">

</style>
<script>
import {fmap} from "@/utils/functor";

export default {
  data() {
    return {json: '', func: null};
  },
  computed: {
    as_json() {
      try {
        return JSON.parse(this.json);
      } catch {
        return null;
      }
    },
    json_modified() {
      try {
        return JSON.stringify(fmap(this.func)(this.as_json));
      }
      catch {
        return null;
      }
    }
  }
}
</script>