import React, { useEffect, useState } from 'react'
import { ItemList } from '../itemList/ItemList'
 import { pedirDatos } from '../../helpers/pedirDatos'

export const ItemListContainer = () => {

  const [ items, setItems] = useState([])
  
  useEffect(() => {
    pedirDatos()
     .then( (data) => {
         setItems(data)
        
     })
     .catch ((error) => {
         console.log(error)
     })
    .finally(()=>{
      console.log("fin del proceso")
    })

  }, [])
  return (
      <div>
       <ItemList items={items}/> 
     </div>
  )
}

export default ItemListContainer