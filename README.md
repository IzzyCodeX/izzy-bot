# Slack Bot Project

A simple Slack bot built with JavaScript and the Slack API.

## Overview

This bot interacts with Slack workspaces by responding to events, messages, or commands. It was built by following the Stardance Hack Club guide to understand how Slack bots work.

## Features

* Connects to Slack using the Slack API
* Listens for user messages
* Responds automatically
* Handles events in real-time

## Tech Stack

* JavaScript
* Node.js
* Slack API

## Installation

Clone the repository:

```bash
git clone https://github.com/IzzyCodeX/izzy-bot.git
```

Move into the project directory:

```bash
cd izzy-bot
```

Install dependencies:

```bash
npm install
```

## Setup

Create a `.env` file:

```env
SLACK_BOT_TOKEN=your_token_here
SLACK_SIGNING_SECRET=your_secret_here
PORT=3000
```

## Running the Bot

Start the bot:

```bash
node index.js
```

Or if using npm:

```bash
npm start
```

## How It Works

1. Slack sends an event when a user interacts.
2. The bot receives the event.
3. The JavaScript code processes it.
4. The bot sends a response back.

## Learning Goals

This project helped me learn:

* How APIs work
* Event-driven programming
* Bot development
* Environment variables
* Node.js basics

## Credits

Built during the Stardance Hack Club program.

## Author

Izzy
