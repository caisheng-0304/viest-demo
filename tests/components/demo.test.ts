import { mount, shallowMount } from "@vue/test-utils"
import { describe, expect, it } from "vitest"
import Button from "@/common/components/Button.vue"
import DemoComponent from "@/common/components/demo.vue"

describe("demoComponent", () => {
  it("mount", async () => {
    // const wrapper = mount(DemoComponent, { })
    // expect(wrapper.text()).toContain("first render")
    // await nextTick()
    // console.log("html", wrapper.html())
    // expect(wrapper.text()).toContain("second render")
    // wrapper.vm.str = "third render"
    // await nextTick()
    // console.log("html", wrapper.html())
    // expect(wrapper.vm.str).toBe("third render")

    const wrapper = mount(DemoComponent)
    const button = wrapper.find("[data-testid=\"button\"]")
    await button.trigger("click")
    const emits = wrapper.emitted()
    // console.log("emits", emits)
    expect(emits).toHaveProperty("update:pageIndex")
    expect(emits).toHaveProperty("change")
  })
})

describe("测试provide/inject", () => {
  it("测试provide/inject的基本功能", () => {
    const wrapper = mount(DemoComponent)
    expect(wrapper.text()).toContain("this is parent data")
  })
  it("测试传值", () => {
    const wrapper = mount(Button, {
      global: {
        provide: {
          parentValue: "来自测试用例的值"
        }
      }
    })
    expect(wrapper.text()).toContain("来自测试用例的值")
  })
})
