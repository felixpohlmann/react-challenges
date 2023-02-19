import { useState } from "react"
import "./List.sass"

import Element from "../Element/Element"



function List() {


  const [items, setItems] = useState([...Array(5).keys()])

  const handleAdd = (id: number) => {
    const newItems = items
    newItems.splice(items.indexOf(id), 0, items.length)
    setItems([...newItems])
  }

  return <div className="list">
    {items.map(e => (
      <Element id={e} key={e} onAdd={handleAdd} />
    ))}

  </div>
}

export default List
