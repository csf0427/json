import { ref, computed } from 'vue'

export function useJsonParser() {
  const jsonString = ref('')

  const parsedJson = computed(() => {
    if (jsonString.value.trim() === '') {
      return '請在左側輸入 JSON 字串'
    }

    try {
      return JSON.parse(jsonString.value)
    } catch {
      return 'Invalid JSON'
    }
  })

  return {
    jsonString,
    parsedJson
  }
}
