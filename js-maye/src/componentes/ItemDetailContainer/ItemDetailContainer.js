import { useEffect, useState } from "react";
import { pedirDatos } from "../../helpers/pedirDatos"
import { useParams }  from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import Loader from "../loader/Loader";

export const ItemDetailContainer = () =>{

    const [producto, setProducto] = useState(null)
    const [loading, setLoading ] = useState( true)
    
    const {productoId} = useParams()


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
            ?  <Loader/>
            : <ItemDetail producto={producto}/>  
            }
       </div>
    )
}

export default ItemDetailContainer