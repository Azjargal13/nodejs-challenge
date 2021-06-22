var p = () => {
    return (new Promise((res, rej)=>{
        res('fulfilled')
        rej('rejected')
    }))
}

console.log('promise ', p)
let a = p.then(res => {
    console.log('res is', res)
})
