import React, { useState, useEffect } from 'react';
import '../styles/ItemList.scss'

interface Item {
  id: number;
  name: string;
  category: string;
}

const ItemList: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {


    const fetchItems = async () => {
      const response = await fetch('http://localhost:3000/items');
      if (response.ok) {
        const data = await response.json();
        setItems(data.items);
      } else {
        console.error('Failed to fetch items list');
      }

    };

    fetchItems();
  }, []);

  return (
    <div className="item-list">
      <h2>Recycling Catalogue</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} ({item.category})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
