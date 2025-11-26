// const start = performance.now()
// setTimeout(() =>{
//   console.log(performance.now() - start)
//   console.log('Прошла секунда')
// } ,1000)

// function myFunction(argument) {
//   console.log(`Аргумент => ${argument}`)
// }

// setTimeout(myFunction, 1000, 'Классный')

// const timerId = setTimeout(() =>{
//   console.log('БУУУМ!')
// },5000)
 
// setTimeout(() =>{
//   clearTimeout(timerId)
//   console.log('Очищено')
// },1000)

// const intervalId = setInterval(() => {
//   let now = performance.now()
//   console.log(`Прошло ${performance.now + now}`)
// }, 500)

// setTimeout(() => {
//   clearInterval(intervalId)
//   console.log(`Очищено через ${performance.now()}`)
// }, 5000)

// console.log('Перед')
// setImmediate(() => {
//   console.log('После всего!')
// })
// console.log('После')

const timerId = setTimeout(() =>{
  console.log('БУУУМ!')
}, 5000)


timerId.unref()

setImmediate(() => {
  timerId.ref()
  console.log('После всего!')
})