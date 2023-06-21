import React, {useState} from 'react';

export default function AddItem() {
    const [items, setItems] = useState(['Item 1', 'Item 2']);
    
    const itemList = items.map((item) => <p key={item} className='addItem--text'>{item}</p>);
    const handleAddItem = (event) => {
        //style-1
        //items.push('new value'); //it's wrong as we are directly updating the state
        //style-2
        //setItems(items => items.push('new value')); //it's also wrong as we are updating the state directly
        //style-3
        setItems(prevItems => [...prevItems, `Item ${prevItems.length+1}`]);
    }

    return (
        <div className='container'>
            <h3 className='title'>Using State with Array value</h3>
            <button className='addItem--button' onClick={handleAddItem}>Add Items</button>
            <div className='addItem--text-container'>
                {itemList}
            </div>
        </div>
    );
}