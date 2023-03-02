import { useState } from 'react'
import { Item } from './types/Item' 



import * as c from './App.styles'
import ListItem from './components/ListItem'
import AddArea from './components/AddArea'
import Footer from './components/Footer'


function App() {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Tarefa de demonstração (adicione novas tarefas acima)', done: false },
  ])

  const handleAddTask = (taskname:string) => {
    let newList = [...list]
    newList.push({
      id: list.length + 1,
      name: taskname,
      done: false
    })
    setList(newList)
  }

  return (
    <c.Container>
      <c.Area>
        <c.Header>
          Lista de tarefas
        </c.Header>


        <AddArea onEnter={handleAddTask}/>

        {list.map((item, index)=>(
          <ListItem key={index} item={item}/>
        ))}
      </c.Area>
      <Footer />
    </c.Container>
  )
}

export default App