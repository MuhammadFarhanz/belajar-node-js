import { getAllProduct ,getProductById} from "../src/database"
import { ProductService } from "../src/product-service"

jest.mock("../src/database.js", () => {
    const originalModule = jest.requireActual("../src/database.js")

    return {
        _esModule:true,
        ...originalModule,
        getAllProduct: jest.fn()
    }
}) 

test.failing("mock modules getProductById", () => {
    ProductService.findById(1)
})

test("mock modules getAllProducts", () => {
  const products = [
    {
      id:1,
      name:"mock product"
    },
    {
      id:2,
      name:"mock product"
    }
  ]

  getAllProduct.mockImplementation(() => {
    return products;
  })

  expect(ProductService.findAll()).toEqual(products)

})