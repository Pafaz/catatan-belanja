import { useState } from "react";

import Item from "./Item";
export default function GroceryList({items, onDeleteItem, onCheckItem, onClearItems}) {

    const [sortBy, setSortBy] = useState('input');
  
    if (sortBy === 'input') items.sort((a, b) => a.id - b.id);
    if (sortBy === 'name') items.sort((a, b) => a.name.localeCompare(b.name));
    if (sortBy === 'checked') items.sort((a, b) => a.checked - b.checked);
  
    return (
      <>
      <div className="list">
        <ul>
          {items.map((item) => (
            <Item key={item.id} item={item} onDeleteItem={onDeleteItem} onCheckItem={onCheckItem}/>
          ))}
        </ul>
      </div>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Urutkan berdasarkan urutan input</option>
          <option value="name">Urutkan berdasarkan nama barang</option>
          <option value="checked">Urutkan berdasarkan ceklis</option>
        </select>
        <button onClick={onClearItems}>Bersihkan Daftar</button>
      </div>
      </>
    )
  }