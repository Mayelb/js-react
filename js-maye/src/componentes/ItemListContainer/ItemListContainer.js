import React, { useEffect, useState } from 'react'
import { ItemList } from '../itemList/ItemList'
import { pedirDatos } from '../../helpers/pedirDatos'
import { useParams } from "react-router-dom"
import Loader from '../loader/Loader'
  

export const ItemListContainer = () => {

  const [ items, setItems] = useState([])
  const [loading, setLoading] =useState(true)
   

  const { categoryId } = useParams() 
  
  
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
          loading ? <Loader />
          :<ItemList items={items}/> 
        }
     </div>
  )
}

export default ItemListContainer