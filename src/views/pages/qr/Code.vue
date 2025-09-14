<script setup>
import { JsonTreeView } from "json-tree-view-vue3";
import 'json-tree-view-vue3/dist/style.css';
import ColorInput from "@/components/input/ColorInput.vue";
</script>

<template>
    <div className="card">
        <div class="font-semibold text-xl mb-4">JSON tree viewer</div>
      <div class="grid">
        <div class="col field">
          <FloatLabel>
            <label for="json">Text (URL, vCard, anything)</label>
          <Textarea id="json" auto-resize rows="25" v-model="text" class="w-full h-full"/>
          </FloatLabel>
          <FloatLabel>
            <label for="light">Light color</label>
            <ColorInput id="light" v-model="light"></ColorInput>
          </FloatLabel>
        </div>
        <div class="col">
        </div>
      </div>
    </div>
</template>

<style scoped lang="scss">

</style>
<script>
export default {
  data() {
    return {text: '', 'light': '#ff0000'};
  },
  computed: {
    qrcode() {
      try {
        return new QRCode(document.getElementById("qrcode"), "http://jindo.dev.naver.com/collie");
      }
      catch (exception) {
        return null;
      }
    }
  }
}
</script>