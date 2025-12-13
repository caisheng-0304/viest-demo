import storage from "@@/utils/storage"
import { describe, expect, it } from "vitest"

describe("storage", () => {
  it("可以缓存值", () => {
    storage.set("test", "test")
    expect(localStorage.getItem("my-app-test")).toEqual("test")
  })
  it("可以设置值",()=>{
    localStorage.setItem("my-app-test", "test")
    expect(storage.get("test")).toEqual("test")
  })
})
