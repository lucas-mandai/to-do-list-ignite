import { ChangeEvent, FormEvent, useState } from 'react'
import styles from './NewTask.module.css'
import { PlusCircle } from 'phosphor-react'

interface Props {
    onAddTask: (taskTitle: string) => void;
}

export function NewTask({ onAddTask }: Props) {

    const [title, setTitle] = useState("");

    function handleNewTask(event: FormEvent) {
        event.preventDefault();

        onAddTask(title);
        setTitle("");
    }

    function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value);
    }

    return (
        <form onSubmit={handleNewTask} className={styles.newTask}>
            <input required placeholder='Adicione uma nova tarefa'
                value={title}
                onChange={onChangeTitle}>
            </input>
            <button type='submit'>Criar <PlusCircle size={20} /></button>
        </form>
    )
}