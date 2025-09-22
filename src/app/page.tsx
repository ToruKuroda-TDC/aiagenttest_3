'use client';

import { useState } from 'react';
import { Todo } from '@/types/todo';
import AddTodo from '@/components/AddTodo';
import TodoList from '@/components/TodoList';

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
      createdAt: new Date(),
    };
    setTodos(prev => [newTodo, ...prev]);
  };

  const toggleTodo = (id: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const completedCount = todos.filter(todo => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            ToDoアプリ
          </h1>
          <p className="text-gray-600">
            シンプルなタスク管理で、効率的に作業を進めましょう
          </p>
          {totalCount > 0 && (
            <div className="mt-4 text-sm text-gray-500">
              {completedCount} / {totalCount} 個のタスクが完了
            </div>
          )}
        </header>

        <main>
          <AddTodo onAdd={addTodo} />
          <TodoList
            todos={todos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        </main>

        <footer className="text-center mt-12 text-gray-400 text-sm">
          <p>Next.js と Tailwind CSS で作成</p>
        </footer>
      </div>
    </div>
  );
}
