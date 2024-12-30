# bot-framework

## Project Description

This project is a chatbot built using the Microsoft Bot Framework. The chatbot is designed to query an API to retrieve data about a person and can run on-premise on a Windows server.

## Setup and Run the Chatbot

1. Clone the repository:
   ```
   git clone https://github.com/fischermariano/bot-framework.git
   cd bot-framework
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Configure the bot:
   - Update the `botframework.config.json` file with the necessary settings.

4. Start the bot:
   ```
   npm start
   ```

## Query the API

The chatbot can query an API at `localhost:8080/api/customers` to retrieve data about a person. The API client is implemented in the `src/apiClient.ts` file.

## Deploy on Windows Server

To deploy the chatbot on a Windows server, follow these steps:

1. Ensure that Node.js is installed on the server.
2. Clone the repository to the server.
3. Install dependencies using `npm install`.
4. Configure the bot by updating the `botframework.config.json` file.
5. Start the bot using `npm start`.
