// 1. js的数据类型有哪些 string number boolean undefined null Symbol bigInt
/**
 * avaScript的数据类型分为两大类：原始类型（Primitive Types）和引用类型（Reference Types）‌。
 * 原始类型包括Undefined、Null、Boolean、Number、String、Symbol（ES6新增）和BigInt（ES10新增）；
 * 引用类型统称为Object，包括Object、Array、Function、Date、RegExp等。
 * 
*/

// 2. 转换类型的方式有哪些
// 3. Number('123abc') 等于什么
// 4. Number(true) 等于什么
const a = Number('123') // 数字 123
const b = Number('123abc') // NAN

const c = parseFloat(123)
const d = parseInt(123)

const e = String(123)  // '123'

const f = Boolean(1)  // true
const g = Boolean(null) // false
const h = Boolean()   // false

console.log(a, b, c)

// 4. null 和 undefined 的区别
// undefined: 定义为赋值
// null‌ 转换为数值时为 0（如 Number(null) 结果为 0）。‌‌

// ‌undefined‌ 转换为数值时为 NaN

