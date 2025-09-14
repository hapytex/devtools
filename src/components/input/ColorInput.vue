<script setup>
</script>

<template>
<InputGroup>
    <InputGroupAddon>
      <div :style="color"></div>
    </InputGroupAddon>
    <InputText v-bind="$attrs" mask="#******" placeholder="color" :maxlength="7" />
</InputGroup>
</template>

<style scoped lang="scss">

</style>
<script>
export default {
  computed: {
    color() {
      return {'background-color': this.$attrs.modelValue, 'width': '100%', 'height': '100%'};
    }
  }
}
</script>