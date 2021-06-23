// with promises

const show = (str) =>{
    return new Promise((res, rej)=> {
        setTimeout(()=>{
            console.log(str)
            res()
        }, 100)
    })
}

const all = () => {
    show('a').then(()=>{
        return show('b')
    }).then(()=>{
        return show('c')
    })
}
const allA = () => {
    show('a').then(()=>{
        console.log('bc its fulfilled')
    })
}
all()
allA()
// reject case

var p = new Promise((res, rej) => {
    // return Promise.reject(Error('failed!!'))
    // rej(Error('failed!'))
})

p.catch(err => console.log(err.message))
p.catch(err => console.log(err.message))

var pp = new Promise((res, rej)=>{
    res('great')
    rej(Error('faiure!'))
    
})
pp
.catch(err => console.log(err.message))
.then(msg => console.log(msg))

// another simple promises
Promise.resolve('success')
.then(msg => { return msg.toUpperCase()})
.then(msg => {
    console.log(msg)
    return msg
})
.then(msg => console.log(msg))


// another simple throw 
Promise.resolve('great!')
.then(()=>{
    throw Error('hmmm!!')
})
.catch(err => {
    console.log(err.message)
    return 'hey this was fake!!'
})
.then(msg => {
    console.log('hehe ' + msg)
    throw Error(msg)
})
.catch(err => console.log('Err ', err.message))