import OpenAI from "openai";
import dotenv from "dotenv";
import chalk from "chalk";
import readlineSync from "readline-sync";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

console.clear();

console.log(
  chalk.blue(`
 /$$      /$$ /$$                   /$$    /$$$$  /$$
| $$  /$ | $$| $$                  | $$   /$$  $$| $$
| $$ /$$$| $$| $$$$$$$   /$$$$$$  /$$$$$$|__/\ $$| $$
| $$/$$ $$ $$| $$__  $$ |____  $$|_  $$_/    /$$/| $$
| $$$$_  $$$$| $$  \ $$  /$$$$$$$  | $$     /$$/ |__/
| $$$/ \  $$$| $$  | $$ /$$__  $$  | $$ /$$|__/      
| $$/   \  $$| $$  | $$|  $$$$$$$  |  $$$$/ /$$   /$$
|__/     \__/|__/  |__/ \_______/   \___/  |__/  |__/
  `)
);

const messages = [
  { role: "system", content: "You are a witty and sarcastic AI with a dry sense of humor. Be playful but not rude." },
];

while (true) {
  const userContent = readlineSync.question(chalk.green("You: "));

  if (userContent === "exit") {
    console.log(chalk.red("Fuckoff!"));
    break;
  }

  const userMessage = { role: "user", content: userContent };
  messages.push(userMessage);

  const aiResponse = await openai.chat.completions.create({
    messages,
    model: "gpt-3.5-turbo",
  });

  const aiMessage = aiResponse.choices[0].message;
  messages.push(aiMessage);

  console.log(chalk.red("AI: ") + aiMessage.content);
}

async function listModels() {
  try {
    const models = await openai.models.list();
    console.log(models.data.map((model) => model.id));
  } catch (error) {
    console.error("Error fetching models:", error);
  }
}

// listModels();
