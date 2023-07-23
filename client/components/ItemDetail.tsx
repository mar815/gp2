import React, { useState, useEffect } from 'react';
import '../styles/ItemDetail.scss'

interface Item {
  id: number;
  name: string;
  category: string;
  description: string;
  recyclingProtocol: string;
}

interface Props {
  itemId: number;
}

const ItemDetail: React.FC<Props> = ({ itemId }) => {
  const [item, setItem] = useState<Item | null>(null);

  useEffect(() => {


    const fetchItemDetail = async () => {
      const response = await fetch('http://localhost:3000/items/' + itemId);
      if (response.ok) {
        const data = await response.json();
        setItem(data.item);
      } else {
        console.error('Failed to fetch item details');
      }

    };

    fetchItemDetail();
  }, [itemId]);

  return (
    <div className="item-detail">
      {item && (
        <>
          <h2>{item.name}</h2>
          <p><strong>Category:</strong> {item.category}</p>
          <p><strong>Description:</strong> {item.description}</p>
          <p><strong>Recycling Protocol:</strong> {item.recyclingProtocol}</p>
        </>
      )}
    </div>
  );
}

export default ItemDetail;
