import { useState } from 'react';
import {Item} from '../../types/Item'



import * as C from './styles';
type Props = {
    item: Item
}

function ListItem({item} : Props) {
    const [isChecked, setIsChecked] = useState(item.done)

  return (
    <C.Container done={isChecked}>
        <input 
            type="checkbox" 
            name='item' 
            checked={isChecked} 
            onChange={e => setIsChecked(/*e.target.checked*/ !isChecked)}
        />
        <label htmlFor='item'>{item.name}</label>
    </C.Container>
  )
}

export default ListItem