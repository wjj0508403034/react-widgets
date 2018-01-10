import React from 'react';
import Selector from "./Selector";
import ItemControl from "./ItemControl";

class ItemsControl extends Selector {

  constructor(props) {
    super(props);
  }

  itemTemplate(itemIndex,itemData){
    return <ItemControl key={itemIndex} index={itemIndex} data={itemData}/>
  }

}

export default ItemsControl;