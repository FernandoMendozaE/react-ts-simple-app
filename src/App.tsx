import { useState } from 'react' // ! importando hook useState
import './App.css'
import TaskForm from './components/TaskForm' // ! importando componente TaskForm
import TaskList from './components/TaskList' // ! importando componente TaskList
import { Task } from './interfaces/Task' // ! importando interface Task
import logo from './logo.svg' // ! importando logo';

// ? interface: nos sirve para definir una interfaz, es una forma de definir una estructura de datos
interface Props {
  title?: string
}

export function App({ title }: Props) {
  // ? useState: nos permite crear un estado, el primer parametro es el valor inicial, el segundo es una funcion que nos permite actualizar el estado
  // * <Task[]>: es un array de objetos de tipo Task
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: 'Learn React',
      description: 'The best way to learn React',
      completed: false,
    },
  ])

  // * Función para cregar un id unico
  const getCureentTimestamp = (): number => new Date().getTime()

  // * Función para agregar una nueva tarea
  const addANewTask = (task: Task) =>
    setTasks([...tasks, { ...task, id: getCureentTimestamp(), completed: false }])

  // * Función para eliminar una tarea
  const deleteTask = (id: number) => setTasks(tasks.filter(task => task.id !== id))

  return (
    <div className="bg-dark text-white" style={{ height: '100vh' }}>
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src={logo} alt="React Logo" style={{ width: '4rem' }} />
            {title && <h1>{title}</h1>}
          </a>
        </div>
      </nav>

      <main className="container p-4">
        <div className="row">
          <div className="col-md-4">
            <TaskForm addANewTask={addANewTask} />
          </div>

          <div className="col-md-8">
            <div className="row">
              <TaskList tasks={tasks} deleteTask={deleteTask} />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
