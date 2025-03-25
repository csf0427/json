<script setup lang="ts">
  import { ref } from 'vue'

  let jsonString = ref('')
  let parsedJson = ref(null)

  const parseJson = () => {
    try {
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
    <pre class="json-viewer">{{ parsedJson }}</pre>
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
