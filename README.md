[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=9489629&assignment_repo_type=AssignmentRepo)
# Backend Training Challenge #1

# Intro

In this challenge, you're going to build part of an API for a shopping list app. The app will support lists for multiple stores, with items on the list being connected to one or more stores. The user could then determine which store(s) to add an item to, based on their shopping preferences.

When an item is purchased, it would be removed from all lists to keep everything up to date and avoid duplicates being purchased when they're not needed.

**For example:**

Toothpaste could be added to both a grocery store list and a big box store (Walmart/Target) list.

Broccoli could be added to a grocery store list.

<br />
<br />

# Assignment

### Part 1

Add preliminary models for both the Store and Item, as detailed below.

**Store** model fields:

- ID (UUID)
- Name (String)

**Item** model fields:

- ID (UUID)
- Name (String)
- Quantity (Float/Double/Decimal)
- Units (Optional String)

In addition, set up associations so that Stores may have many Items and Items may belong to many stores.

**Note: make sure to sync the DB with these models.**

### Part 2

Add CRUD routing and controller actions for both models. Make these routes available in the app when run.

---

## Review

The submitted project should run successfully when cloned from GitHub after following the setup instructions below.

The code you submit will be reviewed for functionality, structure, and style.

<br />
<br />

# Help

Questions are always welcome!

## Setup Instructions

---

### Step 1: Building

`docker build .`

#### OR

`docker-compose build app`

---

### Step 2: Running (in development mode)

`docker-compose run app`

Also launches a container with a Postgres DB with some default settings, i.e. **NOT MEANT FOR PRODUCTION**. See the `docker-compose.yml` file for credentials and DB name.

---

### Step 3: Stopping

`CTRL+C` in the terminal will kill the running process

`docker ps` will list currently running containers

`docker stop $ENTER_CONTAINER_ID_HERE` will stop that container

`docker-compose stop $SERVICE_NAME` will stop a container that was started with docker-compose
