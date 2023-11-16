import styles from './Task.module.css'
import {Trash, CheckCircle} from 'phosphor-react'

import { ITask } from '../../App';

interface Props{
    task: ITask;
    onDelete: (taskId: string) => void;
    onComplete: (taskId: string) => void;
} 

export function Task( {task, onDelete, onComplete}: Props){

    return(
        <div className={styles.task}>
            <button className={styles.checkContainer} onClick={() => onComplete(task.id)}>
                {task.isCompleted ? <CheckCircle  weight="fill" /> : <div /> }
            </button>
            <p className={task.isCompleted ? styles.textCompleted : ""}>{task.title}</p>
            <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
                <Trash/>
            </button>
        </div>
    )
}