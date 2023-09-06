import { useState, useEffect } from 'react';
import { Footer, Header, TodoCollection, TodoInput } from 'components';

import { getTodos, createTodo } from '../api/todos';

const TodoPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = async () => {
    if (inputValue.length === 0) {
      return;
    }
    try {
      const data = await createTodo({
        title: inputValue,
        isDone: false,
      });
      setTodos([
        ...todos,
        { id: data.id, title: data.title, isDone: data.isDone, isEdit: false },
      ]);
    } catch (err) {
      console.error(err);
    }
    setInputValue('');
  };

  const handleKeyDown = async () => {
    if (inputValue.length === 0) {
      return;
    }
    try {
      const data = await createTodo({
        title: inputValue,
        isDone: false,
      });
      setTodos([
        ...todos,
        { id: data.id, title: data.title, isDone: data.isDone, isEdit: false },
      ]);
    } catch (err) {
      console.error(err);
    }
    setInputValue('');
  };

  const handleToggleDown = (id) => {
    setTodos((todos) => {
      return todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
    });
  };

  const handleChangeMode = ({ id, isEdit }) => {
    setTodos((todos) => {
      return todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isEdit };
        }
        return { ...todo, isEdit: false };
      });
    });
  };

  const handleSave = ({ id, title }) => {
    setTodos((todos) => {
      return todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, title, isEdit: false };
        }
        return todo;
      });
    });
  };

  const handleDelete = (id) => {
    setTodos((todos) => {
      return todos.filter((todo) => todo.id !== id);
    });
  };

  useEffect(() => {
    const getTodoAsync = async () => {
      try {
        const todos = await getTodos();
        setTodos(todos.map((todo) => ({ ...todo, isEdit: false })));
      } catch (err) {
        console.error(err);
      }
    };
    getTodoAsync();
  }, []);

  return (
    <div>
      TodoPage
      <Header />
      <TodoInput
        inputValue={inputValue}
        onChange={handleChange}
        onAddTodo={handleAddTodo}
        onKeyDown={handleKeyDown}
      />
      <TodoCollection
        todos={todos}
        onToggleDone={handleToggleDown}
        onChangeMode={handleChangeMode}
        onSave={handleSave}
        onDelete={handleDelete}
      />
      <Footer todos={todos} />
    </div>
  );
};

export default TodoPage;
