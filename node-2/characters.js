// const { a } = require('./app.js') // Круговая зависимость

let characters = [
  { name: 'Фродо',
    hasRing: false
  },
  { name: 'Бильбо',
    hasRing: false
  },
  { name: 'Гэндальф',
    hasRing: false
  },
]

function stealRing(characters, owner) {
  return characters.map((character) => {
      if(character.name == owner) {
        character.hasRing = true
      } else {
        character.hasRing = false
      }
  })
} 

module.exports = { stealRing, characters}