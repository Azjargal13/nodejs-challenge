var p = () => {
    return new Promise((res, rej)=>{
        res('fulfilled')
        rej('rejected')
    })
}

console.log('promise ', p)
p()
.then((msg)=>{
    console.log('resolved with message ' + msg)
})
.catch(err=> {
    console.log('error', err)
})
