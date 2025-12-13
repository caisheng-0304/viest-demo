import { add } from "@@/utils/index"
// import sum from "@@/utils/sum"
import { assert, beforeAll, beforeEach, bench, describe, expect, it, vi } from "vitest"

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

// describe("sqrt", () => {
//   it("sqrt", () => {
//     assert.equal(Math.sqrt(4), 2)
//   })
// })

// describe("执行", () => {
//   it("sqrt", () => {
//     assert.equal(Math.sqrt(4), 2)
//   })
// })

// 此测试套件中的所有测试套件和测试将并行运行。
// describe.concurrent("suite", () => {
//   it("concurrent test 1", async () => {
//     /* ... */
//   })
//   describe("concurrent suite 2", async () => {
//     it("concurrent test inner 1", async () => {
//       /* ... */
//     })
//     it("concurrent test inner 2", async () => {
//       /* ... */
//     })
//   })
//   it.concurrent("concurrent test 3", async () => {
//     /* ... */
//   })
// })
// describe("11", () => {
//   it("test", () => {
//     console.log("test")
//   })
// })

// describe.shuffle("suite", () => {
//   beforeEach(() => {
//     console.log("before each")
//   })
//   it("random test 1", async () => { /* ... */ })
//   it("random test 2", async () => { /* ... */ })
//   it("random test 3", async () => { /* ... */ })

//   // `shuffle` 是继承的
//   describe("still random", () => {
//     it("random 4.1", async () => { /* ... */ })
//     it("random 4.2", async () => { /* ... */ })
//   })

//   // 禁用内部的 shuffle
//   describe("not random", { shuffle: false }, () => {
//     it("in order 5.1", async () => { /* ... */ })
//     it("in order 5.2", async () => { /* ... */ })
//   })
// })

// beforeAll(async () => {
//   console.log("beforeAll start")
//   await new Promise(resolve => setTimeout(resolve, 2000))
//   console.log("beforeAll end")
// })

// it("test 1", () => {
//   console.log("test 1")
// })

vi.mock("@@/utils/index", () => {
  return {
    add: vi.fn((a: number, b: number) => a + b + 1)
  }
})
describe("utils/index", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })
  it("add function", () => {
    const result = add(2, 3)
    console.log("result", result)
  })
  it("add function with error", async () => {
    const asyncMock = vi.fn().mockRejectedValue(new Error("Async error"))

    await asyncMock().catch(() => {
      expect(asyncMock).toHaveBeenCalledTimes(1)
    }) // 抛出 Error<'Async error'>
  })
})
