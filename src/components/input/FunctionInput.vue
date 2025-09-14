<script setup>
</script>

<template>
<InputGroup>
    <Textarea :model-value="text" @update:model-value="wrap_function" rows="5" cols="30" :invalid="invalid" />
</InputGroup>
</template>

<style scoped lang="scss">

</style>
<script>
export default {
  props: ['modelValue', 'args'],
  emits: ['update:modelValue'],
  data () {
    const text = this.modelValue || '';
    return {text};
  },
  computed: {
    function () {
      try {
        return new Function(...this.args, this.text);
      } catch {
        return null;
      }
    },
    invalid() {
      this.function === null;
    }
  },
  methods: {
    wrap_function(text) {
      this.text = text;
      this.$emit('update:modelValue', this.function);
    }
  }
}
</script>