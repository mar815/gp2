import React, { useState, useEffect } from 'react';

interface Item {
  id: number;
  name: string;
  category: string;
}

const ItemList: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    // Mock fetch call to the backend to get the list of items
    // In a real application, this would be a call to your backend API
    const mockFetchItems = async () => {
      const mockData: Item[] = [
        { id: 1, name: 'Plastic Bottle', category: 'Plastic' },
        { id: 2, name: 'Glass Jar', category: 'Glass' },
        { id: 3, name: 'Newspaper', category: 'Paper' }
      ];
      setItems(mockData);
    };

    mockFetchItems();
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
