import { Task } from '../interfaces/Task'

interface Props {
  task: Task // ? objeto de tipo Task
  deleteTask: (id: number) => void // ? funcion para eliminar una tarea
}

export default function TaskCard({ task, deleteTask }: Props) {
  return (
    <div className="card card-body bg-secondary rounded-0 text-dark">
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>{task.id}</p>
      {/* // & es un operador de concatenacion */}
      <button className="btn btn-danger" onClick={() => task.id && deleteTask(task.id)}>
        Delete
      </button>
    </div>
  )
}
