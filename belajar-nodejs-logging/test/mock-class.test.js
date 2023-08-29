import { UserRepository } from "../src/user-repository"
import { UserService } from "../src/user-service"

jest.mock("../src/user-repository.js")

const repository = new UserRepository()
const service = new UserService(repository)

test("test mock class save", () => {
    const user = {
        id:1,
        name: "Farhan"
    }

    service.save(user)

    expect(repository.save).toHaveBeenCalled()
    expect(repository.save).toHaveBeenCalledWith(user)
})

test("test mock class findById", () => {
    const user = {
        id:1,
        name: "Farhan"
    }

    repository.findById.mockReturnValueOnce(user)

    expect(repository.findById(1)).toEqual(user)
    expect(repository.findById).toHaveBeenCalled()
    expect(repository.findById).toHaveBeenCalledWith(1)
})

test("test mock class findAll", () => {
    const users = [
        { 
            id:1,
            name:"Farhan"
        },
        {
            id:2,
            name:"Budi"
        }
    ]

    repository.findAll.mockReturnValueOnce(users)

    expect(repository.findAll()).toEqual(users)
    expect(repository.findAll).toHaveBeenCalled()
})