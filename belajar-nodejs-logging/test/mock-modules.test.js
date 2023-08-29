import { getAllProduct, getProductById } from "../src/database"
import { ProductService } from "../src/product-service";

jest.mock('../src/database.js')

test("mock modules getProductById", () => {
    getProductById.mockImplementation((id) => {
      return {
        id: 1,
        name: "Product Mock"
      }
    });

    const product = ProductService.findById(1)

    expect(product).toEqual({
        id:1,
        name: "Product Mock"
    })
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