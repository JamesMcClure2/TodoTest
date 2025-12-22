# ToDoApp

A full-stack ToDo list application built with Angular (frontend) and .NET Core (backend).
To use, run the backend either by opening ToDoApp.Api in visual studio and clicking run or open a terminal in the root folder and 'dotnet run --urls "https://localhost:7054"'
Then open the front end ToDoApp in terminal and run 'ng serve'

## Tech Stack

| Frontend        | Backend         |
|-----------------|-----------------|
| Angular 17      | .NET 8 Web API  |
| TypeScript      | C#              |

## Default URLs

- Backend API: https://localhost:7054/
- Angular Frontend: http://localhost:4200/

If your backend runs on a different port, update the API URL in:
ToDoApp/src/app/todo.service.ts
If your frontend runs on a different port, update the URL in:
ToDoApp.Api/Program.cs

## Important: Data Is Not Persisted
This is a test software so the items are in temporary storage that will only be available until the backend stops running.
