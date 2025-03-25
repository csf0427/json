<script setup lang="ts">
  import { ref } from 'vue'
  import JsonViewer from 'vue-json-viewer'

  let jsonString = ref('')
  let parsedJson = ref('請在左側輸入 JSON 字串')

  const parseJson = () => {
    if (jsonString.value === '') {
      parsedJson.value = '請在左側輸入 JSON 字串'
      return
    }

    try {
      // 嘗試直接解析
      parsedJson.value = JSON.parse(jsonString.value)
    } catch (error) {
      parsedJson.value = 'Invalid JSON'
    }
  }
</script>

<template>
  <div class="json-parser">
    <textarea
      class="json-string"
      v-model="jsonString"
      @input="parseJson"
      placeholder="在此輸入 JSON 字串"
    ></textarea>
    <json-viewer
      :value="parsedJson"
      :expand-depth="5"
      copyable
      boxed
      sort
    ></json-viewer>
  </div>
</template>

<style lang="scss" scoped>
  .json-parser {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    width: 100%;
    height: calc(100dvh - 2rem);
    box-sizing: content-box;

    & > * {
      width: 100%;
      height: calc(100dvh - 2rem - 8px);
      overflow-y: auto;
      background-color: #f5f5f5;
      padding: 1rem;
      border: 4px solid #fff;
      margin: 0;
      box-sizing: border-box;
      resize: none;
      white-space: pre-wrap;

      &:focus {
        outline: none;
        border-color: #fff;
      }
    }
  }
</style>
