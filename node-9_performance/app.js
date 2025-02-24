const perf_hooks = require("perf_hooks");

test = perf_hooks.performance.timerify(test);

const performance_observer = new perf_hooks.PerformanceObserver((items, observer) => {
  console.log(items.getEntries());
  const entry = items.getEntriesByName("slow").pop();
  console.log(`${entry.name} ${entry.duration}`);

  observer.disconnect();
});

performance_observer.observe({ entryTypes: ["measure", "function"] });

function test() {
  const arr = [];
  for (let index = 0; index < 100000000; index++) {
    arr.push(index * index);
  }
}

function slow() {
  performance.mark("start");
  const arr = [];
  for (let index = 0; index < 100000000; index++) {
    arr.push(index * index);
  }

  performance.mark("end");
  performance.measure("slow", "start", "end");

  //   console.log(performance.getEntriesByName("slow"));
}
slow();
test();
