# 🚀 Todo App

[![React](https://img.shields.io/badge/React-blue?logo=react&logoColor=white)](https://react.dev/learn/start-a-new-react-project)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React Query](https://img.shields.io/badge/React--Query-FF4154?logo=reactquery&logoColor=white)](https://tanstack.com/query)
[![Styled Components](https://img.shields.io/badge/Styled--Components-db7093?logo=styled-components&logoColor=white)](https://styled-components.com/)
[![MUI](https://img.shields.io/badge/MUI-blue?logo=mui&logoColor=white)](https://mui.com/)

## ⭕ Contents

- [Note to Reviewer](#⭕-note-to-reviewer)
- [Tools and Technologies](#⭕-tools-and-technologies)
- [Features](#⭕-features)
- [Before You Begin](#⭕-before-you-begin)
- [How to Run Project](#⭕-how-to-run-project)
- [Folder Structure](#⭕-folder-structure)
- [Key Libraries](#⭕-key-libraries)
- [Final Step](#⭕-final-step)

## ⭕ Note to Reviewer

This is a modern React.js Todo App developed using TypeScript and styled with MUI (Material UI) and Styled Components. I have thoroughly implemented all the required features with best practices and ensured clean, efficient code.
<br>Enjoy your review! 🎉

## ⭕ Tools and Technologies

| Technology        | 🔗                                                                                    |
| ----------------- | ------------------------------------------------------------------------------------- |
| React.js 18.3.1       | [[react](https://react.dev/)]                                                     |
| TypeScript            | [[Github Link](https://github.com/microsoft/TypeScript)]                          |
| React Query           | [[Github Link](https://github.com/TanStack/query)]                                |
| MUI (Material UI)     | [[Github Link](https://github.com/mui/material-ui)]                               |
| styled-components     | [[Github Link](https://github.com/styled-components/styled-components)]     |

## ⭕ Features

This application includes the following features:

- ✅ **Add Todo**: Add a new task with a title and description.  
- ✅ **Edit Todo**: Update the title, description, or status of an existing task.  
- ✅ **Delete Todo**: Remove a task from the list.  
- ✅ **Search Tasks**: Search for tasks by their title.  
- ✅ **Filter Tasks**: Filter tasks by status (All, Completed, Not Completed).  
- ✅ **Responsive Design**: Fully responsive UI built with **MUI**.  
- ✅ **Notifications**: Success/error notifications using a custom notification system.

## ⭕ Before You Begin

Before running the project, ensure you have the following installed:

1. **Node.js**: [Download Node.js](https://nodejs.org/en/) (recommended version: `>=16.x`).
2. **Package Manager**: Use `npm` (default with Node.js).

## ⭕ How to Run Project

<br>Follow these steps to run the Todo App locally:

Clone the Repository:
```commandline
git clone <repository-url>
cd <repository-folder>
```

Install Dependencies:

```commandline
npm install
```
Start the Development Server:
```commandline
npm start
```
The app will run on `http://localhost:3000` by default.

## ⭕ Folder Structure

Here’s an overview of the project folder structure:

```plaintext
src/
│
├── components/           # Reusable UI components
│   ├── addTodo/          # Add todo component
│   │   └── AddTodo.tsx
│   │
│   ├── deleteTodo/       # Delete todo component
│   │   └── DeleteTodo.tsx
│   │
│   ├── editTodo/         # Edit todo component
│   │   └── EditTodo.tsx
│   │
│   ├── todoCard/         # Todo card component
│   │   └── TodoCard.tsx
│   │
│   ├── todoDashboard/    # Todo dashboard component
│   │   └── TodoDashboard.tsx
│   │
│   ├── todoList/         # Todo list component
│   │   └── TodoList.tsx
│   │
│   └── index.tsx         # Component index file
│
├── contexts/             # Global context providers
│   └── NotificationProvider.tsx
│
├── hooks/                # Custom hooks
│   ├── useNotification.ts
│   └── useTodo.ts
│
├── services/             # Data services (mocked or API services)
│   ├── MockTodoServices.ts
│   └── reactQuery.ts
│
├── types/                # TypeScript types and interfaces
│   └── todo.ts
│
├── App.tsx               # Main application component
├── index.tsx             # Entry point for React
└── theme.ts              # MUI theme configuration
```

## ⭕ Key Libraries
Here’s a brief explanation of the key libraries used:

**React Query**:  
Manages client-side state (fetch, add, edit, delete todos) with caching and automatic updates. Even though no API is used, React Query efficiently handles in-memory data and reactivity for the todo list.

**MUI (Material UI)**:  
Provides pre-designed, customizable UI components for a professional look.

**Styled Components**:  
Used for scoped component-based styling.

**TypeScript**:  
Adds static typing to JavaScript for better maintainability and fewer bugs.


## ⭕ Final Step

```commandline
npm run coffee
```

#### Be Happy Even if Things Aren’t Perfect Now. 🎉🎉🎉

#### Enjoy your coffee! ☕

![](https://i1.wp.com/justmaths.co.uk/wp-content/uploads/2016/10/celebration-gif.gif)
