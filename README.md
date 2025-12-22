# ToDoApp

A full-stack ToDo list application built with Angular (frontend) and .NET Core (backend). It supports adding, updating, and deleting tasks, with persistent storage and error handling.

## Tech Stack

| Frontend        | Backend         | Shared Concepts         |
|-----------------|-----------------|-------------------------|
| Angular 17      | .NET 8 Web API  | RESTful API design      |
| TypeScript      | C#              | Signal-based state mgmt |

## Default URLs

- Backend API: https://localhost:7054/
- Angular Frontend: http://localhost:4200/

If your backend runs on a different port, update the API URL in:
ToDoApp/src/app/todo.service.ts
If your frontend runs on a different port, update the URL in:
ToDoApp.Api/Program.cs

## Important: Data Is Not Persisted
This is a test software so the items are in temporary storage that will only be available until the backend stops running
