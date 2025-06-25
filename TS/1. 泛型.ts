
// 不能提前确定好类型, 使用的时候才能知道
// 使用场景: 如 api 返回的格式
interface responseForMate<T> {
  code: number
  msg: string
  data: T
}

interface Person {
  id: number
  name: string
}

interface Goods {
  id: number
  price: number
}
let p:responseForMate<Person> = {
  code:200,
  msg: "成功",
  data: {
    id: 1,
    name: 'lal'
  }
}


let g:responseForMate<Goods> = {
  code:200,
  msg: "成功",
  data: {
    id: 1,
    price: 200
  }
}