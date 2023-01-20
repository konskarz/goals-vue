# goals-vue

Vue-Frontend for [lifetrackerbuddy.com](https://lifetrackerbuddy.com/), - an advanced task manager with main focus on the goal, goal achievement and its current progress

## Production

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

### Plan

Description: [Timeline](https://quasar.dev/vue-components/timeline) of Weeks/Tasks with 'Filter by [Goal](#goal)' Select and 'New [Task](#task)' Button\
API: `/api/v2/plan/`, `/api/v2/plan/?goal=:id` - GET

- subtitle: `day` - format: `Week 50 · 2022 / Q4 · Dez. 12`
- [List](https://quasar.dev/vue-components/list-and-list-items): `tasks`
  [List Item](https://quasar.dev/vue-components/list-and-list-items) - on click [Dialog](https://quasar.dev/quasar-plugins/dialog) with `performance` ([Task](#task)), `duration` ([Time](#time)) fields and link to [Task](#task)
  - label: `name`
  - if `target > 1` caption: `performance` of `target`
  - if `target > 1` label: [linear-progress](https://quasar.dev/vue-components/linear-progress) `performance / target`

### Goals

Description: Tree of Goals with 'New [Goal](#goal)' Button\
API: `/api/v2/goals/` - GET, POST\
[List Item](https://quasar.dev/vue-components/list-and-list-items)/[Expansion Item](https://quasar.dev/vue-components/expansion-item) - Link to [Goal](#goal)

- label: `name`
- caption: `planned`

### Tasks

Description: List of Tasks\
API: `/api/v2/tasks/` - GET, POST\
[List Item](https://quasar.dev/vue-components/list-and-list-items) - Link to [Task](#task)\
[Sections](https://quasar.dev/vue-components/list-and-list-items#qitemsection-api): `planned`, `name`, `goal`

### Times

Description: List of Times\
API: `/api/v2/times/` - GET, POST\
[List Item](https://quasar.dev/vue-components/list-and-list-items) - Link to [Time](#time)\
[Sections](https://quasar.dev/vue-components/list-and-list-items#qitemsection-api): `start`, `duration`, `task`

### Goal

Description: Form with Delete/Save/Cancel Buttons\
API: `/api/v2/goals/:id/` - GET, PUT, PATCH, DELETE\
Fields: `name`, `parent`, `planned`, `description`

### Task

Description: Form with Delete/Save/Cancel Buttons\
API: `/api/v2/tasks/:id/` - GET, PUT, PATCH, DELETE\
Fields: `name`, `goal`, `planned`, `recurring_until` (on create), `target`, `performance`, `planned_total_time`, `done` (on edit), `description`

### Time

Description: Form with Delete/Save/Cancel Buttons\
API: `/api/v2/times/:id/` - GET, PUT, PATCH, DELETE\
Fields: `task` (readonly), `duration`, `start`, `end`, `description`

### Login

Description: Form with Login Button\
API: `/api/v2/auth/` - POST: `{"username": "email@example.com", "password": "xyz123"}`\
Response: `{"token": "4991c0de3492b6e5b8cf1fcf46087cb1089c589a"}`\
Use: `headers["Authorization"] = "Token 4991c0de3492b6e5b8cf1fcf46087cb1089c589a"`
