import * as char from './characters.mjs' // Оба импорта равнозначны. Тут мы ипротироем все как char
// import { characters, greet } from './characters.mjs' //Тут получаем конкретные импорты
import log from './defaultLog.mjs'
import logDefault, * as pers from './defaultLogCharacters.mjs'
// import logDefault, { greetPersons, persons } from './defaultLogCharacters.mjs'
// import logDefault, { greetPersons as greetPers, persons } from './defaultLogCharacters.mjs'
import { main } from './asyncMain.mjs'

for(const p of pers.persons) {
  pers.greetPersons(p)
}

for(const c of char.characters) {
  char.greet(c)
}

log()
logDefault()
main()
