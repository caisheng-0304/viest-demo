import { mount, shallowMount } from "@vue/test-utils"
import { describe, expect, it } from "vitest"
import DemoComponent from "@/common/components/demo1.vue"

describe("demoComponent", () => {
  it("renders properly", () => {
    const wrapper = mount(DemoComponent, { props: { msg: "Hello World" } })

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.text()).toContain("Hello World")
    // console.log("DemoComponent rendered with message:", wrapper.html())
  })
  it("sub demo", () => {
    const wrapper = shallowMount(DemoComponent, { props: { msg: "Sub Demo" } })
    expect(wrapper.props("msg")).toBe("Sub Demo")
    // console.log("html", wrapper.html())
  })

  it("查找元素，可以通过标签属性id", () => {
    const wrapper = mount(DemoComponent, { props: { msg: "Find Element" } })
    const title = wrapper.find("[data-testid=\"title\"]")
    expect(title.text()).toBe("title")
    // console.log("title", title.text())
    expect(wrapper.get("h1").text()).toBe("Find Element")

    expect(wrapper.findAll("h1").at(0)?.text()).toBe("Find Element")

    expect(wrapper.find("h2")).toBeDefined()
  })

  it("判断元素是否可见", () => {
    const wrapper = mount(DemoComponent, { props: { msg: "Visible Test" } })
    const ifDom = wrapper.find("[data-testid=\"if\"]")
    expect(ifDom.exists()).toBeFalsy()
  })
})
