import { createTableDataApi, deleteTableDataApi, getTableDataApi, updateTableDataApi } from "@@/apis/tables"
import { test, expect,describe } from "vitest"
describe('Table API Tests', () => {
  test('Create Table Data API', async () => {
    const data = {
      name: "Test Table",
      description: "This is a test table"
    }
    const response = await createTableDataApi(data) // Adjust based on actual response structure
    expect(response).toHaveProperty('id')
    expect(response.name).toBe(data.name)
  }
})
