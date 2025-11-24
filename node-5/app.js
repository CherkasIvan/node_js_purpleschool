const EventEmitter = require('events')

const myEmitter = new EventEmitter()

const logDbConnection = () => console.log('DB Connected')

myEmitter.addListener('connected', logDbConnection)
myEmitter.emit('connected')

myEmitter.removeListener('connected', logDbConnection)
// myEmitter.off('connected', logDbConnection)
// myEmitter.removeAllListeners('connected')

myEmitter.emit('connected')

myEmitter.on('message', data => console.log(data))

myEmitter.prependListener('message', data => console.log(data))
myEmitter.emit('message', 'Привет гвоноед 2!')


myEmitter.emit('message', 'Привет медвед!')
myEmitter.removeListener('message', logDbConnection)


myEmitter.once('off', () => console.log('Я вызвался один раз!'))
myEmitter.emit('off')
myEmitter.emit('off')

console.log(myEmitter.getMaxListeners())
myEmitter.setMaxListeners(1)

console.log(myEmitter.getMaxListeners())

console.log(myEmitter.listenerCount('message'))
console.log(myEmitter.listenerCount('off'))
console.log(myEmitter.listeners('message'))


myEmitter.emit('message', 'Привет гвоноед!')
console.log(myEmitter.listenerCount('message'))

console.log(myEmitter.eventNames())


myEmitter.on('error', err => console.error(`Произошла ошибка ${err.message}`))
myEmitter.emit('error', new Error('BD error'))

const target = new EventTarget()

const logTarget = () => console.log(`connected to target`)

target.addEventListener('connected',logTarget)

target.dispatchEvent(new Event('connected'))