const axios = require("axios");
require("dotenv").config();

const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

app.command("/izzy-ping", async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `Pong!\nLatency: ${latency}ms` });
});

app.command("/izzy-help", async ({ ack, respond }) => {
  await ack();
  await respond({
    text:
`General Commands:
/izzy-help - Show this menu
/izzy-qotd - Get the quote of the day
/izzy-trivia - Get a random trivia question
/izzy-dadjoke - Get a random dad joke
/izzy-urban <term> - Look up a term on Urban Dictionary
/izzy-beat [time/@XXX] - Convert between .beat time and regular time

Utility Commands:
/izzy-search <query> - Search the web
/izzy-userinfo @user - Get user info
/izzy-poll <question> - Create a poll
/izzy-remind <task> - Set a reminder
/izzy-weather <city> - Get weather info

Tech Tools:
/izzy-dns <domain> - DNS record lookup
/izzy-website <domain> - Website info
/izzy-disify <email> - Disposable email check
/izzy-ip <ip> - Get IP info`
  });
});

(async () => {
  await app.start();
  console.log("bot is running!");
})();
app.command("/izzy-catfact", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get("https://catfact.ninja/fact");
    await respond({ text: `Cat Fact:\n${response.data.fact}` });
  } catch (err) {
    await respond({ text: "Failed to fetch a cat fact." });
  }
});
app.command("/izzy-joke", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
    await respond({
      text:
`${response.data.setup}

${response.data.punchline}`
    });
  } catch (err) {
    await respond({ text: "Failed to fetch a joke." });
  }
});