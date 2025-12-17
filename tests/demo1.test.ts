import axios from "axios" // 或你使用的请求库

import { afterAll, beforeAll, beforeEach, expect, it, vi } from "vitest"

// beforeAll(() => console.log("before all - demo.test1.ts"))
// afterAll(() => console.log("after all - demo.test1.ts"))
// beforeEach(() => console.log("before each - demo.test1.ts"))

// utils/age.ts
export function getAge(age?: number) {
  if (age === undefined) {
    throw new Error("age is required")
  }
  return age
}

it("test 数字", () => {
  // expect(1).not.toBe(2)
  expect(3).toBeGreaterThan(2) // 大于
  expect(2).toBeLessThan(3) // 小于

  expect(3 < 4).toBe(true)

  expect(3).toBeGreaterThanOrEqual(3)
  expect(3).toBeGreaterThanOrEqual(2) // 大于等于
  expect(2).toBeLessThanOrEqual(3) // 小于等于
  expect(3).toBeLessThanOrEqual(3) // 小于等于

  expect(0.1 + 0.2).toBeCloseTo(0.3) // 浮点数比较

  expect(0.2 + 0.1).not.toBe(0.3)// 浮点数比较

  expect(undefined).toBeUndefined() // 未定义
  expect(null).toBeNull() // null
  expect(true).toBeTruthy() // 真值
  expect(false).toBeFalsy() // 假值

  expect(Number.NaN).toBeNaN() // 非数字

  const stockBill = {
    type: "apples",
    price: 10,
    name: undefined,
    count: 100
  }

  expect(stockBill).toEqual({
    type: "apples",
    count: 100,
    price: 10
  }) // 对象值比较

  expect(stockBill).toStrictEqual({
    type: "apples",
    count: 100,
    price: 10,
    name: undefined
  })

  expect(["apple", "orange"]).toContain("orange") // 数组包含

  expect({ name: "xxx", age: 10 }).toHaveProperty("name") // 对象包含属性

  expect([{ foo: "bar" }]).toMatchObject([{ foo: "bar" }]) // 部分匹配

  expect({ obj: { name: "xxx" }, height: 10 }).toMatchObject({ height: 10 })

  expect(() => getAge()).toThrow("age is required") // 抛出异常
})

it("快照", () => {
  const data = {
    foo: Array.from(new Set(["bar", "snapshot"]))
  }
  // expect(data).toMatchInlineSnapshot(`{
  //   "foo": Set {
  //     "bar",
  //     "snapshot",
  //   },
  // }`)
  const config = { url: "url", domain: "domain", analysis: "aalysis" }
  expect(config).toMatchSnapshot()
})

const user = {
  getName() {
    return "tom"
  }
}
it("函数断言", () => {
  const spy = vi.spyOn(user, "getName")
  const name = user.getName()
  expect(spy).toHaveBeenCalled() // 判断函数是否被调用了一次

  expect(name).toBe("tom")
})
