import { ChangeEvent, FormEvent, useRef, useState } from 'react' // ! importando hook useState, ChangeEvent es una interface que nos permite obtener el valor del input
import { AiOutlinePlus } from 'react-icons/ai' // ! importando icono de react-icons
import { Task } from '../interfaces/Task' // ! importando interface Task
// import { v4 } from 'uuid' // ? importando uuid, el cual lo instalamos con npm install --save @types/uuid

// ? type: nos permite definir un tipo de datos
type handelInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

interface Props {
  addANewTask: (task: Task) => void // ? (task: Task) => void: es una funcion que recibe un parametro de tipo Task
}

// * inicializando el estado de la tarea
const initialState = {
  title: '',
  description: '',
}

export default function TaskForm({ addANewTask }: Props) {
  // * useState
  const [task, setTask] = useState<Task>(initialState)

  // * useRef: nos permite crear una referencia a un elemento del DOM
  const inputTitle = useRef<HTMLInputElement>(null)

  // * Función que se ejecuta cada vez que el usuario escribe
  // ? ChangeEvent: es un evento que se dispara cuando el usuario escribe en un input.
  // ? HTMLInputElement: es un elemento de tipo input
  // ? HTMLTextAreaElement: es un elemento de tipo textarea
  // ? | es un operador de union, nos permite combinar dos tipos de datos
  // ? target es un objeto que contiene toda la información del evento el cual fue destructurada en el parametro e
  const handelInputChange = ({ target: { name, value } }: handelInputChange) => {
    setTask({
      ...task,
      [name]: value,
    })
  }

  // * Función que se ejecuta cuando el usuario envia el formulario
  const handleNewTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addANewTask(task)
    setTask(initialState)
    inputTitle.current?.focus() // ? inputTitle.current?.focus(): es una forma de hacer referencia a un elemento del DOM, focus nos permite hacer focus en un elemento del DOM
  }

  return (
    <div className="card card-body bg-secondary text-dark">
      <h1>Add Task</h1>

      <form onSubmit={handleNewTask}>
        <input
          type="text"
          placeholder="Write a title"
          name="title"
          className="form-control mb-3 rounded-0 shadow-none border-0"
          // ? creando evento onChange cuanod se escribe en el input
          onChange={handelInputChange}
          value={task.title}
          autoFocus // ? autoFocus: se posiciona el cursor en el input al cargar la pagina
          ref={inputTitle} // ? ref: nos permite crear una referencia a un elemento del DOM
        />

        <textarea
          name="description"
          rows={2}
          placeholder="Write a Description"
          className="form-control mb-3 shadow-none border-0"
          // ? creando evento onChange cuanod se escribe en el input
          onChange={handelInputChange}
          value={task.description}
        ></textarea>

        <button className="btn btn-primary">
          Save <AiOutlinePlus />
        </button>
      </form>
    </div>
  )
}
