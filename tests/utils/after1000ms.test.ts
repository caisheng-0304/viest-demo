import after1000ms from "@@/utils/after1000ms"
import { describe, expect, it, vi } from "vitest"

describe("after1000ms", () => {
  it("可以在1秒后执行回调函数", () => {
    after1000ms(() => {
      console.log("回调函数执行")
      expect(true).toBe(true)
    })
  })
})
