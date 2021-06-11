// synchronous continuation passing style 

const add = (a,b,callback) => {
    callback(a+b)
}
console.log('before')
add(1,2, result => console.log('Result is ' + result))
console.log('after')

// async CPS
const asyncAdd = (a,b,callback) => {
    // won't wait callback operation
    // directly give control to asyncAdd() back
    setTimeout(()=>{
        callback(a+b), 100 // will be added into Event loop
    })
}
console.log('before1')
asyncAdd(1,2, result => console.log('async Result is ' + result))
console.log('after1')
