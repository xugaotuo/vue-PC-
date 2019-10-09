<template>
  <div id="app">
    <!-- `checked` 为 true 或 false -->
    <el-checkbox v-model="checked">备选项</el-checkbox>
  </div>
</template>
<script>
export default {
  data () {
    return {
      checked: true
    }
  }
}
</script>
<style lang="less">
</style>
