# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help me improve my coding skills by building realistic projects.

## Table of contents

- [Gif](#Gif)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

## Gif

<img src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDN0ZjFwN2FybjIyZmYzOHB0YTl1NWQ1NHNubzBwdzAzbXNudmFtaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9inm9QLqs0SaHzmqkN/giphy.gif"/>

### Screenshot

<img width="1024" alt="Screenshot 2023-11-16 at 16 03 32" src="https://github.com/mariamo101/todo.react.app/assets/117212859/53dddf64-406c-4c8d-9374-e066b0407a15">

### Links

- Solution URL: [Solution URL here](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW)
- Live Site URL: [Live site URL here](https://todo-reac-app-mm.netlify.app/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactor.bitcamp.ge/kvira-2-more-jsx-props-and-conditional-rendering.-re-rendering-and-state.-component-lifecycle/more-jsx-props-and-conditional-rendering.-re-rendering-and-state) - JS library

### What I learned

see below:

```jsx
<div className="TodoWrapper">
  <TodoForm addTodo={addTodo} />
  {todos.map((todo) => (
    <Todo
      key={todo.id}
      task={todo}
      toggleCompleted={toggleCompleted}
      deleteTodo={deleteTodo}
      todos={todos}
      setTodos={setTodos}
    />
  ))}
  <div className="itemsOutLine">
    <h3 className="items">
      {itemsLeft} {itemsLeft === 1 ? "item left" : "items left"}
    </h3>
    <button className="clearCompleted" onClick={clearCompletedTodos}>
      Clear Completed
    </button>
  </div>
</div>
```

### Useful resources

- [React.dev ](https://react.dev/learn/thinking-in-react) - This is an amazing web site which helped me finally understand jsx. I'd recommend it to anyone still learning this concept.
