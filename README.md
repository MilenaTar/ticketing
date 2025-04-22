

# Ticketing System 

A **containerized** ticketing application built with **FeathersJS**, **Knex**, and **PostgreSQL**
and a **React** frontend styled with **Ant Design**. Users can:
- 📝 **Create Tickets** with a title & description
- 📋 **List Tickets** and view details
- 💬 **Add Replies** to tickets
- 📊 **Monitor Analytics** via a dashboard

---

## 📖 Table of Contents

- [Features](#-features)
- [Prerequisites](#-prerequisites)
- [Getting Started](#-getting-started)
- [Usage](#-usage)
  - [Create a Ticket](#create-a-ticket)
  - [List All Tickets](#list-all-tickets)
  - [Add a Reply](#add-a-reply)
- [Contributing](#-contributing)

---

## 🚀 Features

| Feature              | Description                                         |
| -------------------- | --------------------------------------------------- |
| 📝 Create Tickets    | Submit new tickets with title & description         |
| 📋 List Tickets      | Retrieve and search all submitted tickets           |
| 💬 Add Replies       | Post threaded replies to individual tickets         |
| 📊 Analytics Dashboard | Visualize ticket & reply metrics over time         |

---

## 🛠️ Prerequisites

- **Docker** (v20.10+)
- **Docker Compose** (v1.29+)
- *(Optional)* **Node.js** & **npm** for local development

---

## ⚙️ Environment Variables

---

## 💡 Getting Started

1. **Clone the repo**

```bash
git clone https://github.com/milenaTar/ticketing.git
cd ticketing
```

2. **Launch services**

```bash
docker-compose up --build
```

3. **Apply database migrations**

```bash
docker-compose exec backend npx knex migrate:latest
```
4. **Apply seeds**

```bash
docker-compose exec backend npm run db:seed
```

5. **Open in browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 💻 Usage

### Create a Ticket

```bash
curl -X POST http://localhost:3030/tickets \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Sample Issue",
    "status": "Open",
    "description": "Details about the issue..."
  }'
```

**Response** (201 Created):

```json
{
  "id": 1,
  "title": "Sample Issue",
  "status": "Open",
  "description": "Details about the issue...",
  "createdAt": "2025-04-22T10:15:00.000Z",
  "updatedAt": "2025-04-22T10:15:00.000Z",
}
```

### List All Tickets

```bash
curl http://localhost:3030/tickets
```

**Response** (200 OK):

```json
[
  {
    "id": 1,
    "title": "Sample Issue",
    "description": "Details about the issue...",
    "createdAt": "2025-04-22T10:15:00.000Z",
    "updatedAt": "2025-04-22T10:15:00.000Z",
    "status": "Open"
  }
]
```

### Add a Reply

```bash
curl -X POST http://localhost:3030/replies \
  -H "Content-Type: application/json" \
  -d '{
    "message": "We are looking into this.",
     "ticketId": 1
  }'
```

**Response** (201 Created):

```json
{
    "id": 2,
    "message": "I’m looking into this now.",
    "ticketId": 1,
    "createdAt": "2025-04-21T20:28:00.321Z",
    "updatedAt": "2025-04-21T20:28:00.321Z"
}
```
⏱ Time Spent
This project was developed over the course of approximately 12 hours, including time spent understanding the technologies involved and implementing both backend and frontend functionality.


Task	Time Spent
🧠 Learning FeathersJS (services, hooks, architecture)	2h
🧠 Understanding Knex (migrations, seeds, query builder)	1.5h
🧠 Exploring Atomic Design methodology for frontend structure	1h
🧠 Getting familiar with Ant Design (form components & layout)	0.5h
⚙️ Backend setup (FeathersJS, PostgreSQL, Docker, Knex)	2h
📦 Implementing services: tickets, replies, and relationships	1.5h
💻 Building the frontend (React, API integration, basic UI layout)	2.5h
🧪 Testing, debugging, documentation	1h

<p align="center">Made with ❤️ by milenaTar (https://github.com/milenaTar)</p>
<!-- prettier-ignore-end -->

