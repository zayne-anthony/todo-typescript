import React, { FC, ChangeEvent, useState } from "react";
import { ITodo } from "./Interfaces";
import TodoList from "./components/TodoList";

const App: FC = () => {
	const [todo, setTodo] = useState<string>("");
	const [todoList, setTodoList] = useState<ITodo[]>([]);

	const handleChange = (e: ChangeEvent<HTMLInputElement>): void =>
		setTodo(e.target.value);

	const addTask = (): void => {
		const newTodo = {
			id: Math.floor(Math.random() * 100000),
			todoName: todo,
			isComplete: false,
		};
		if (newTodo.todoName !== "") setTodoList([...todoList, newTodo]);
		setTodo("");
	};

	const completeTodo = (id: number): void => {
		const updatedTodos = todoList.map((todo) => {
			if (todo.id === id) {
				todo.isComplete = !todo.isComplete;
				return todo;
			} else {
				return todo;
			}
		});
		setTodoList(updatedTodos);
	};

	const deleteTodo = (id: number): void => {
		setTodoList(
			todoList.filter((todo) => {
				return todo.id !== id;
			})
		);
	};

	return (
		<section>
			<div className='form'>
				<label htmlFor='todo' className='sr-only'>
					Todo
				</label>
				<input
					className='todo-input'
					type='text'
					placeholder='Add Todo...'
					id='todo'
					name='todo'
					value={todo}
					onChange={handleChange}
				/>
				<button onClick={addTask} className='btn' type='submit'>
					Add
				</button>
			</div>
			{todoList && (
				<ul className='text-white'>
					{todoList.map((todo: ITodo) => (
						<TodoList
							key={todo.id}
							todo={todo}
							completeTodo={completeTodo}
							deleteTodo={deleteTodo}
						/>
					))}
				</ul>
			)}
		</section>
	);
};

export default App;
