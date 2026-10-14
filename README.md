# Task Board

A lightweight browser-based task board for creating tasks and moving them between **To Do**, **In Progress**, and **Done**.

## Features

- Create tasks
- Change a task's status
- See the number of tasks in each column
- Keep task state in the browser with local storage

## Run locally

No build step or database is required. Open `index.html` in a browser, or run:

```powershell
npm start
```

Then open the local URL shown in the terminal.

## Concord MCP evaluation

This repository is configured with [Concord MCP](https://github.com/get-concord-ai/concord-mcp), a local-first coordination layer for coding agents.

I installed and evaluated its workflow in this project. Concord is especially useful when multiple coding sessions work on the same repository: agents can claim files before editing, record decisions and handoffs, and agree on shared interfaces before changing code.

For this small Task Board, I intentionally used one coding session to keep the scope and compute usage low. In a larger feature, I would split frontend and backend work across separate sessions and use Concord for ownership and API-contract handoff.

See [CONCORD_NOTES.md](CONCORD_NOTES.md) for the evaluation notes.
