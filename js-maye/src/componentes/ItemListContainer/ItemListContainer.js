import React, { useEffect, useState } from 'react'
import { ItemList } from '../itemList/ItemList'
import { pedirDatos } from '../../helpers/pedirDatos'
import { useParams } from "react-router-dom"
import PacmanLoader from "react-spinners/PacmanLoader"
  

export const ItemListContainer = () => {

  const [ items, setItems] = useState([])
  const [loading, setLoading] =useState(true)
  const [color, setColor] = useState("#36d6d2");

  const { categoryId } = useParams() 
  console.log(categoryId)
  
  useEffect(() => {
    setLoading(true)

    pedirDatos()
     .then( (data) => {
        if (!categoryId){
         setItems(data)
        }else{
          setItems( data.filter((item)=> item.category === categoryId) )
        }
     })
     .catch ((error) => {
         console.log(error)
     })
    .finally(()=>{
      setLoading(false)
    })

  }, [categoryId])

  return (
      <div>
        {
          loading ? <PacmanLoader  color={color} loading={loading}  size={100} />
          :<ItemList items={items}/> 
        }
     </div>
  )
}

export default ItemListContainer