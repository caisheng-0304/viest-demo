import { mount } from "@vue/test-utils"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import Button from "@/common/components/demo2.vue"

describe("click button", () => {
  it("mount", async () => {
    const wrapper = mount(Button)
    const button = wrapper.find("[data-testid=\"button\"]")
    expect(wrapper.text()).not.toContain("vitest")
    await button.trigger("dbclick")
    expect(wrapper.text()).toContain("vitest")
  })
})

describe("日期", () => {
  let date: Date
  beforeEach(() => {
    date = new Date(1998, 11, 19)
    vi.useFakeTimers()
    vi.setSystemTime(date)
  })
  afterEach(() => {
    vi.useRealTimers()
  })
  it("shows the date correctly", () => {
    expect(new Date()).toEqual(date)
    expect(vi.getMockedSystemTime()).toEqual(date)
    console.log("date", new Date())
  })
})
