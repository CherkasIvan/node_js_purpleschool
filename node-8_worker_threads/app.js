const crypto = require("crypto");
const https = require("https");
const start = performance.now();

// process.env.UV_THREADPOOL_SIZE = 8;

// for (let index = 0; index < 50; index++) {
//   crypto.pbkdf2("test", "salt", 100000, 64, "sha512", () => {
//     console.log(performance.now() - start);
//   });
// }

for (let index = 0; index < 50; index++) {
  https.get("https://yandex.ru", (res) => {
    res.on("data", () => {});
    res.on("end", () => {
      console.log(performance.now() - start);
    });
  });
}
