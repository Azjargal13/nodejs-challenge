let obj = {}
const map = new WeakMap()
map.set(obj, {key:"tst"})
console.log(map.get(obj))

obj = undefined
// this will be cleaned up in next gc cycle
console.log(map.get(obj))

let obj1 = {key:"val1"}
let obj2 = {key:"val2"}

const s = new WeakSet()
s.add(obj1, obj2)
console.log(s.has(obj1));
obj1 = undefined
// this is cleaned up from the gc
console.log(s.has(obj1));