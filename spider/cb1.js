// async control flow patterns with callbacks

const calling = () => {
    console.log('hey')
}

const calling2 = () => {
    console.log('hey2')
}

const main = (cb) => {
    console.log('from main')
    if (typeof cb === 'function') {
        cb()
    }
}

const out = (res) => {
    console.log('read it? ', res)
}

const outBody = (res) =>{
    console.log('this is body ', res)   
}

const dummy = (name, cb) => {
    let str = 'hey this name is ' + name
    if (typeof cb === 'function') {
        cb(str)
    }
}
setTimeout(calling, 100)
main(calling)
main(calling2)

dummy('hello world', out)
dummy('pretty world', outBody)