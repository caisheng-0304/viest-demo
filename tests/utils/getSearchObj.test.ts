import getSearchObj from "@@/utils/getSearchObj"
import { describe, expect, it } from "vitest"

describe("getSearchObj", () => {
  it("可以获取搜索参数", () => {
    window.location.search = "?a=1&b=2"
    expect(getSearchObj()).toEqual({ a: "1", b: "2" })
  })
})
