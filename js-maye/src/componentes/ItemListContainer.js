import React from 'react'
import { ItemCount } from './ItemCount'

export const ItemListContainer = (props) => {

  const{ greeting } = props;

  return (
    <div>
      { greeting }
    <ItemCount/>
    </div>
  )
}

export default ItemListContainer