let characters = [
  { name: "Frodo", hasRing: false },
  { name: "Bilbo", hasRing: false },
];

function staelRing(characters, owner) {
  characters.map((c) => {
    if (c.name == owner) {
      c.hasRing = true;
    } else {
      c.hasRing = false;
    }
  });
}

// module.exports = { characters, staelRing };
module.exports = function log() {
  console.log("log");
};
