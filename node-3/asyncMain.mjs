export async function main() {
  try {
    const { characters, greet } = await import('./characters.mjs') // Динамические ES6 асинхронные модули 
    for(const c of characters) {
      greet(c + 1)
    }
  } catch (error) {
    console.log(error)
  }
}