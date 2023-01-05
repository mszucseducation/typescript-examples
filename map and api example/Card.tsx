const src = [
  { id: 1, name: 'Foo', age: 20 },
  { id: 2, name: 'Bar', age: 21 },
  { id: 3, name: 'MyFoo', age: 20 }
]

const keys = ['name', 'age']

const result = src.map(item => Object.assign(
 ...keys.map(key => ({[key]: item[key]}))
))

console.log(result)