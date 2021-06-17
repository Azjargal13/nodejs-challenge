// sequential execution

const task1 = (callback) => {
    asyncOperation(() =>{
        task2(callback)
    })
}

const task2 = (callback) => {
    asyncOperation((result)=>{
        task3(callback)
    })
}

const task3 = (callback) => {
    asyncOperation(()=>{
        callback()
    })
}

task1(()=>{
    console.log('task 1, 2, 3 are executed')
})