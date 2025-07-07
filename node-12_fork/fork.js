process.on("message", (m) => {
  if (m == "disconnect") {
    process.disconnect();
    return;
  }
  console.log(`Клиент получил ${m}`);
  process.send("Pong!");
});
