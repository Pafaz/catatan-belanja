export default function Item ({item, onDeleteItem, onCheckItem}) {
    return (
    <li key={item.id}>
      <input value={item.id} type="checkbox" checked={item.checked} onChange={() => onCheckItem(item.id)}/>
      <span style={{textDecoration: item.checked ? 'line-through' : 'none'}}>{item.quantity} {item.name}</span>
      <button onClick={() => onDeleteItem(item.id)}>&times;</button>
    </li>
    )
  }