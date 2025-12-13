import axios from "axios" // 或你使用的请求库

import { expect, it, vi } from "vitest"

// import { getUserInfo } from "@/common/utils/index"

vi.mock("@/common/utils/index", async () => {
  const actual = await vi.importActual<typeof import("@/common/utils/index")>("@/common/utils/index")
  return {
    ...actual,
    getUserInfo: vi.fn(() => "jerry")
  }
})

// it("getUserInfo", () => {
//   expect(getUserInfo()).toBe("tom")
// })

it("getUserInfo", async () => {
  // expect(getUserInfo()).toBe("jerry")
  const userInfo = await vi.importMock("@/common/utils/index")
  // expect(userInfo.getUserInfo()).toBe("jerry")
})
