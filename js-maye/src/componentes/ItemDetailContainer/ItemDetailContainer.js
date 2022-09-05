import { useEffect, useState } from "react";
import { pedirDatos } from "../../helpers/pedirDatos"
import { useParams }  from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"

export const ItemDetailContainer = () =>{

    const [producto, setProducto] = useState(null)
    const [loading, setLoading ] = useState( true)

    const {productoId} = useParams()

    console.log (productoId)
    console.log (producto)

    useEffect(()=> {

        setLoading(true)

        pedirDatos()
        .then((res)=>{
            setProducto( res.find((item)=> item.id === Number(productoId)) )
        })
        .catch(err => console.log(err))
        .finally(()=>{
            setLoading(false)
        })

    }, [])

    return(
        <div>
            {
            loading 
            ? <h2> Loading...</h2>
            : <ItemDetail producto={producto}/>  
            }
       </div>
    )
}

export default ItemDetailContainer