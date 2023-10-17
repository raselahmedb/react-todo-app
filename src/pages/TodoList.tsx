// import React from 'react'
// import Input from '../components/Input'
import { useState } from 'react';

function TodoList() {
    const [list, setList] = useState(['Apple']);
    const [item, setItem] = useState("");

    function AddToList(itm: string){
        list.push(itm);
        setList([...list]);
        setItem('');
        console.log(list);
        
    }

    function RemoveItem(index: number){
        list.splice(index, 1);
        setList([...list]);
    }

    function UpdateItem(index: number) {
        setItem(list[index]);
        RemoveItem(index);
    }

  return (
    <>
        <h1>TodoList</h1>
        <input type='text' value={item} onChange={(e)=> setItem(e.target.value)} />
        <button onClick={()=>AddToList(item)}>Add</button>
        <div>
            <table>
                <thead>
                    {list.map((l, index) => <tr key={index}>
                        <td>{l}</td>
                        <td><button onClick={()=>UpdateItem(index)}>Update</button></td>
                        <td ><button onClick={() => RemoveItem(index)}>Remove</button></td>
                    </tr>)}
                </thead>
            </table>
        </div>
    </>
  )
}

export default TodoList