import { assert, bench, describe, expect, it } from "vitest"

// const todos = []
// const archive = []
// const myTest = it.extend({
//   todos: async ({ task }, use) => {
//     todos.push(1, 2, 3)
//     await use(todos)
//     todos.length = 0
//   },
//   archive
// })
// myTest("add item", ({ todos }) => {
//   expect(todos.length).toBe(3)

//   todos.push(4)
//   expect(todos.length).toBe(4)
// })
// it("测试被跳过", (context) => {
//   context.skip()
//   console.log("执行了")

//   expect(true).toBe(true)
// })
// const isDev = process.env.NODE_ENV === "development"
// // it.only("only in dev", (context) => {

// // })
// function delay(ms: number) {
//   return new Promise(resolve => setTimeout(resolve, ms))
// }
// describe("并发执行", () => {
//   // it("测试1", () => {

//   // })

//   it.concurrent("测试3", async () => {
//     await delay(1000)
//     console.log("测试3")
//   })
//   it("测试2", async () => {
//     await delay(1000)
//     console.log("测试1")
//   })

//   it("a", async () => {
//     console.log("a")
//     await delay(500)
//     console.log("a end")
//   })
//   it.todo("待实现的测试")
//   it("b", async () => {
//     console.log("b")
//     await delay(500)
//     console.log("b end")
//   })
//   it.fails("测试失败的用例", () => {
//     expect(1 + 1).toBe(3)
//   })
// })
// it.each([1, 2, 3])("参数化测试 - %i", (num) => {
//   expect(num).toBeLessThan(4)
// })
// it.each([
//   { a: 1, b: 2, expected: 3 },
//   { a: 2, b: 3, expected: 5 },
//   { a: 3, b: 5, expected: 8 }
// ])("参数化测试 - $a + $b = $expected", ({ a, b, expected }) => {
//   expect(a + b).toBe(expected)
// })

// describe("bench=>性能基准测试", () => {
//   // bench("循环10000次数组push", () => {
//   //   const arr = []
//   //   for (let i = 0; i < 10000; i++) {
//   //     arr.push(i)
//   //   }
//   // }, { time: 1000 })
//   bench("for 循环 push", () => {
//     const arr = []
//     for (let i = 0; i < 10000; i++) arr.push(i)
//   })

//   bench("new Array + fill", () => {
//     Array.from({ length: 10000 }).fill(0)
//   })
// })

describe("", () => {
  it("sqrt", () => {
    assert.equal(Math.sqrt(4), 2)
  })
})
