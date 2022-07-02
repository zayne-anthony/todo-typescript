import React from "react";
import { ITodo } from "../Interfaces";
import { MdDeleteForever } from "react-icons/md";
import { BsCheckAll } from "react-icons/bs";

interface Props {
	todo: ITodo;
	completeTodo(id: number): void;
	deleteTodo(id: number): void;
}

const TodoList = ({ todo, completeTodo, deleteTodo }: Props) => {
	return (
		<li className={todo.isComplete ? "done" : ""}>
			<span>{todo.todoName}</span>
			<div className='flex items-center justify-center gap-2 text-xl'>
				<span className='icon' onClick={() => completeTodo(todo.id)}>
					<BsCheckAll />
				</span>
				<span className='icon' onClick={() => deleteTodo(todo.id)}>
					<MdDeleteForever />
				</span>
			</div>
		</li>
	);
};

export default TodoList;
