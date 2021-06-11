// Non contininuation-passing style callbacks

const res = [1,5,7].map(el => el-1);
console.log(res)

// callback is used to iterate over el, not to pass result of operation

const rs = [3,4,5].filter((o)=> {console.log(o)})
