# AI Chat CLI

A simple **Command-Line Interface (CLI) chatbot** powered by OpenAI's API. This project allows users to chat with an AI model directly in the terminal.

## Features

- Interactive chat with OpenAI's `gpt-3.5-turbo`
- Command-line interface with colored output using `chalk`
- Message history is maintained within the session
- Exit the chat by typing `exit`
- Function to list available OpenAI models

## Prerequisites

- Node.js (v16+ recommended)
- An OpenAI API key

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/ai-chat-cli.git
   cd ai-chat-cli
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up environment variables:**
   - Create a `.env` file in the project root and add your OpenAI API key:
     ```
     OPENAI_API_KEY=your_api_key_here
     ```

## Usage

Run the chatbot with:

```bash
node index.js
```

### Commands:

- **Chat:** Simply type your message and press `Enter`.
- **Exit:** Type `exit` to quit the chat.
- **List Available Models:** Uncomment and run the `listModels()` function in `index.js`.

## Dependencies

- [`openai`](https://www.npmjs.com/package/openai) - OpenAI API client
- [`dotenv`](https://www.npmjs.com/package/dotenv) - Load environment variables
- [`chalk`](https://www.npmjs.com/package/chalk) - Terminal styling
- [`readline-sync`](https://www.npmjs.com/package/readline-sync) - Synchronous user input

## License

This project is licensed under the MIT License.

---

**Enjoy chatting with AI in your terminal! 🚀**
