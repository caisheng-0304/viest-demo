import sum from "@@/utils/sum"
import { describe, expect, it } from "vitest"

describe("加法测试", () => {
  it("sum", () => {
    expect(sum(1, 2)).toBe(3)
  })
})
it("tuUpperCase", () => {
  const user = {
    id: 2,
    name: "张三",
    email: "zhangsan@example.com",
    roles: ["admin", "user"],
    metadata: {
      createdAt: "2024-01-01",
      lastLogin: "2024-09-09"
    }
  }
  expect(user).toMatchSnapshot()
})
