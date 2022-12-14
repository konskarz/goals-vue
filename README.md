# goals-vue

Vue-Frontend for [lifetrackerbuddy.com](https://lifetrackerbuddy.com/), - an advanced task manager with main focus on the goal, goal achievement and its current progress

## Download for Production

```
git clone -b gh-pages https://github.com/konskarz/goals-vue.git vue
```

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Views

### Index

Description: [Timeline](https://quasar.dev/vue-components/timeline) of Weeks/Tasks with 'New [Task](#task)' Button\
API: `/api/v2/plan/` - GET

- `day`: Date of Monday - format: `Week 50 · 2022 / Q4 · Dez. 12`
- `tasks`: List of Tasks\
  [Expansion Item](https://quasar.dev/vue-components/expansion-item): expand icon toggle form with predefined time values for 'New [Time](#time)' and set to done option in [Task](#task)
  - `name`: Name - Link to [Task](#task)
  - `planned_total_time`: Planned
  - `total_time_min`: Progress

### Goals

Description: Tree of Goals with 'New [Goal](#goal)' Button\
API: `/api/v2/goals/` - GET, POST\
[List Item](https://quasar.dev/vue-components/list-and-list-items)/[Expansion Item](https://quasar.dev/vue-components/expansion-item) - Link to [Goal](#goal)

- `name`: Name
- `planned`: Planned

### Tasks

Description: List of Tasks\
API: `/api/v2/tasks/` - GET, POST\
[List Item](https://quasar.dev/vue-components/list-and-list-items) - Link to [Task](#task)

- `planned`: Planned
- `name`: Name
- `goal`: Goal

### Times

Description: List of Times\
API: `/api/v2/times/` - GET, POST\
[List Item](https://quasar.dev/vue-components/list-and-list-items) - Link to [Time](#time)

- `start`: Start
- `duration`: Duration
- `task`: Task

### Goal

Description: Form with Delete/Save/Cancel Buttons\
API: `/api/v2/goals/:id/` - GET, PUT, PATCH, DELETE

- `name`: Name
- `parent`: Parent
- `planned`: Planned
- `description`: Description

### Task

Description: Form with Delete/Save/Cancel Buttons\
API: `/api/v2/tasks/:id/` - GET, PUT, PATCH, DELETE

- `name`: Name
- `goal`: Goal
- `planned_total_time`: Duration
- `planned`: Planned
- `done`: Done
- `description`: Description

### Time

Description: Form with Delete/Save/Cancel Buttons\
API: `/api/times/:id/` - GET, PUT, PATCH, DELETE

- `task`: Task - readonly
- `duration`: Duration
- `start`: Start
- `end`: End
- `description`: Description

### Login

Description: Form with Login Button\
API: `/api-token-auth/` - POST: `{"username": "email@example.com", "password": "xyz123"}`\
Response: `{"token": "4991c0de3492b6e5b8cf1fcf46087cb1089c589a"}`\
Use: `headers["Authorization"] = "Token 4991c0de3492b6e5b8cf1fcf46087cb1089c589a"`
