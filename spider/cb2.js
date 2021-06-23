// callbacks

const show = (str, cb)=> {
    setTimeout(() =>{
        console.log(str)
        cb()
    }, 100)
}

const all = () => {
    show('a', ()=> {
        show('b', ()=>{
            show('c', ()=>{})
        })
    })
}

all()