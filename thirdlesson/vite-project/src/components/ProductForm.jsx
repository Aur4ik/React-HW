import { useState } from "react";

export default function ProductForm({ onAdd }) {
  const [item, setItem] = useState({
    name: "",
    price: "",
    qty: 1,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setItem(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      id: Date.now(),
      name: item.name,
      price: Number(item.price),
      qty: Number(item.qty),
    };

    onAdd(newItem);
    setItem({ name: "", price: "", qty: 1 });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={item.name}
        onChange={handleChange}
        placeholder="Product name"
      />

      <input
        name="price"
        type="number"
        value={item.price}
        onChange={handleChange}
        placeholder="Price"
      />

      <input
        name="qty"
        type="number"
        value={item.qty}
        onChange={handleChange}
      />

      <button>Add</button>
    </form>
  );
}
