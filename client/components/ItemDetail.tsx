import React, { useState, useEffect } from 'react';

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
    // Mock fetch call to the backend to get the details of a specific item
    // In a real application, this would be a call to your backend API
    const mockFetchItemDetail = async () => {
      const mockData: Item = {
        id: 1,
        name: 'Plastic Bottle',
        category: 'Plastic',
        description: 'A common household item used for storing liquids.',
        recyclingProtocol: 'Rinse and clean the bottle. Remove the cap and place it in the recycling bin.'
      };
      // For simplicity, we are returning the same mockData for any itemId
      setItem(mockData);
    };

    mockFetchItemDetail();
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
