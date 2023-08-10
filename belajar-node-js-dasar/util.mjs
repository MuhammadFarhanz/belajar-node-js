import util from 'util'

const name = 'Farhan'

console.info(`Hello ${name}`)
console.info(util.format(`Hello %s`, name))

const person = {
    firstName: 'Muhammad',
    lastName : 'Farhan'
};

console.info(`Person : ${JSON.stringify(person)}`)
console.info(util.format('Person : %j', person))