// import * as char from "./characters.mjs";
// import log, { characters, greet as hello } from "./characters.mjs";

async function main() {
  try {
    const { characters, greet } = await import("./characters.mjs");
    for (const c of characters) {
      greet(c.name);
    }
  } catch (e) {
    console.log(e);
  }
}

main();
