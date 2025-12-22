# ToDoApp

A full-stack ToDo list application built with Angular (frontend) and .NET Core (backend). It supports adding, updating, and deleting tasks, with persistent storage and error handling.

## Tech Stack

| Frontend        | Backend         | Shared Concepts         |
|-----------------|-----------------|-------------------------|
| Angular 17      | .NET 8 Web API  | RESTful API design      |
| TypeScript      | C#              | Signal-based state mgmt |
| RxJS Observables| Entity Framework| Error propagation       |

## Default URLs

- Backend API: https://localhost:7054/
- Angular Frontend: http://localhost:4200/

If your backend runs on a different port, update the API URL in:
`src/app/todo.service.ts`
