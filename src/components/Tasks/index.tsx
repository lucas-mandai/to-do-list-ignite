import { ITask } from '../../App';
import styles from './Tasks.module.css'

import imgEmpty from '../assets/task.svg'

import {Task} from '../Task'
import { ClipboardText } from 'phosphor-react';

interface Props{
    tasks: ITask[];
    onDelete: (taskId: string) => void;
    onComplete: (taskId: string) => void;
}

export function Tasks( {tasks, onDelete, onComplete}: Props){
    const tasksQuantity = tasks.length; 
    const completedTasks = tasks.filter((task) => task.isCompleted).length;

    return(
        <div className={styles.tasks}>
            
            <div className={styles.taskHeader}>
                <div className={styles.info}>
                    Tarefas criadas
                    <div className={styles.counter}>{tasksQuantity}</div>
                </div>
                <div className={styles.done}>
                    Concluídas
                    <div className={styles.counter}>{completedTasks} de {tasksQuantity}</div>
                </div>
            </div>

            {/* <div className={styles.empty}>
                <img src={imgEmpty} ></img>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div> */}
           
           {tasks.map((task) =>(
                <Task 
                    key={task.id}  
                    task={task} 
                    onDelete={onDelete}
                    onComplete={onComplete} 
                />
           ))}
         
            {tasks.length <= 0 &&(
                <section className={styles.empty}>
                    <ClipboardText size={50} weight="bold" />
                    <p>Você ainda não tem tarefas cadastradas</p>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </section>
            )}
            
        </div>
        
    )
}

