import React, { useState } from 'react';
const UniqueIDList = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editingItemId, setEditingItemId] = useState(null);
  const [editingItemValue, setEditingItemValue] = useState('');
  const addItem = () => {
    if (inputValue.trim() !== '') {
      const newItem = {
        id: Date.now(), // Generate a unique ID
        value: inputValue.trim()
      };
      setItems([...items, newItem]);
      setInputValue('');
    }};
  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };
  const editItem = (id) => {
    const itemToEdit = items.find(item => item.id === id);
    if (itemToEdit) {
      setEditingItemId(id);
      setEditingItemValue(itemToEdit.value);
    }
  };

  const updateItem = () => {
    if (editingItemId !== null) {
      setItems(items.map(item => {
        if (item.id === editingItemId) {
          return { ...item, value: editingItemValue.trim() };
        }
        return item;
      }));
      setEditingItemId(null);
      setEditingItemValue('');
    }
  };

  return (
    <div>
      <h2>ADD your favourite comics</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter comics"
      />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {editingItemId === item.id ? (
              <>
                <input
                  type="text"
                  value={editingItemValue}
                  onChange={(e) => setEditingItemValue(e.target.value)}
                />
                <button onClick={updateItem}>Update</button>
              </>
            ) : (
              <>
                {item.value}
                <button onClick={() => editItem(item.id)}>Edit</button>
                <button onClick={() => deleteItem(item.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default UniqueIDList;
