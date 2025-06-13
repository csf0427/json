import { describe, test, expect } from 'vitest'
import { useJsonParser } from '@/composables/useJsonParser'

describe('useJsonParser', () => {
  test('初始值為預設提示', () => {
    const { parsedJson } = useJsonParser()
    expect(parsedJson.value).toBe('請在左側輸入 JSON 字串')
  })

  test('輸入合法 JSON 應成功解析', () => {
    const { jsonString, parsedJson } = useJsonParser()
    jsonString.value = '{"x":1}'
    expect(parsedJson.value).toEqual({ x: 1 })
  })

  test('輸入空字串應回預設提示', () => {
    const { jsonString, parsedJson } = useJsonParser()
    jsonString.value = ''
    expect(parsedJson.value).toBe('請在左側輸入 JSON 字串')
  })

  test('輸入錯誤 JSON 應提示錯誤', () => {
    const { jsonString, parsedJson } = useJsonParser()
    jsonString.value = '{ bad json }'
    expect(parsedJson.value).toBe('Invalid JSON')
  })
})
