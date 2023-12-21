// const start = performance.now()

// setTimeout(() => {
//     console.log(performance.now() - start)
//     console.log('Прошла секунда')
// }, 1000)

// function myFunction(arg) {
//     console.log(`Аргумент => ${arg}`);
// }

// setTimeout(myFunction, 1000, 'Классный')

// const timeoutId = setTimeout(() => {
//     // console.log(performance.now() - start)
//     console.log('BOOM')
// }, 5000)

// setTimeout(()=>{
//     clearTimeout(timeoutId)
//     console.log('Обезврежен')
// },1000)

// const intervalId = setInterval(() => {
//     console.log(performance.now())
//     // console.log('BOOM')
// }, 1000)

// setTimeout(()=>{
//     clearInterval(intervalId)
//     console.log('Обезврежен')
// },5000)

// console.log('Перед')

// setImmediate(()=>{
//     console.log('После всего')
// })

// console.log('После')

// setTimeout(myFunction, 1000, 'Классный')

const timeoutId = setTimeout(() => {
    // console.log(performance.now() - start)
    console.log('BOOM')
}, 5000)

timeoutId.unref()

setImmediate(()=>{
    timeoutId.ref()
})