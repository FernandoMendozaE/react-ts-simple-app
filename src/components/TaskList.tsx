import { Task } from '../interfaces/Task' // ! imortando interface Task
import TaskCard from './TaskCard'

interface Props {
  tasks: Task[] // ? array de objetos de tipo Task
  deleteTask: (id: number) => void // ? funcion para eliminar una tarea
}

export default function TaskList({ tasks, deleteTask }: Props) {
  return (
    <>
      {tasks.map(task => (
        <div className="col-md-4 pb-2" key={task.id}>
          <TaskCard task={task} deleteTask={deleteTask} />
        </div>
      ))}
    </>
  )
}
