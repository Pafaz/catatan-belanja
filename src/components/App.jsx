import { useState } from 'react'
import Footer from './Footer';
import Form from './Form';
import GroceryList from './GroceryList';
import Header from './Header';

const groceryItems = [
  {
    id: 1,
    name: 'Kopi Bubuk',
    quantity: 2,
    checked: true,
  },
  {
    id: 2,
    name: 'Gula Pasir',
    quantity: 5,
    checked: false,
  },
  {
    id: 3,
    name: 'Air Mineral',
    quantity: 3,
    checked: false,
  },
];


export default function App() {
  
  const [items, setItems] = useState(groceryItems);

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleDeleteItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function handleCheckItem(id) {
    setItems(items.map((item) => item.id === id ? {...item, checked: !item.checked} : item));
  }

  function handleClearItems() {
    setItems([]);
  }

  return (
    <div className="app">
      <Header />  
      <Form onAddItem={handleAddItem}/>
      <GroceryList items={items} onDeleteItem={handleDeleteItem} onCheckItem={handleCheckItem}
      onClearItems={handleClearItems}/>
      <Footer items={items}/>
  </div>
  )
}









