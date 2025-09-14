<script setup>
</script>

<template>
    <div className="card">
        <div class="font-semibold text-xl mb-4">SQL formatter</div>
      <div class="grid">
        <div class="col field">
          <FloatLabel>
            <label for="json">SQL</label>
          <Textarea id="sql" auto-resize rows="25" :invalid="jsondata == null" v-model="sql" class="w-full h-full"/>
          </FloatLabel>
        </div>
        <div class="col">
          {{ sqlformatted }}
        </div>
      </div>
    </div>
</template>

<style scoped lang="scss">

</style>
<script>
import { format } from 'sql-formatter';
export default {
  data() {
    return {sql: ''};
  },
  computed: {
    sqlformatted() {
      try {
        return format(this.sql);
      }
      catch (exception) {
        return null;
      }
    }
  }
}
</script>