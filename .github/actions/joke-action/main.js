const getJoke = require("./joke");
const core = require("@actions/core");

async function run() {
  const joke = getJoke();
  console.log(joke);
  core.setOutput("joke-output", joke);
}

run();