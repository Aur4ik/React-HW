import { useState } from "react";
import "./App.css";


export default function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  const [form, setForm] = useState({
    title: "",
    price: "",
    category: "food",
  });

  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");

  const visible = products.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  const sorted = visible.slice().sort((a, b) => a.price - b.price);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const togglePurchased = (id) => {
  setProducts((prev) =>
    prev.map((p) =>
      p.id === id ? { ...p, purchased: !p.purchased } : p
    )
  );
};


  const addProduct = () => {
    const title = form.title.trim();
    const price = Number(form.price);

    if (!title) return;
    if (Number.isNaN(price) || price <= 0) return;

    const newProduct = {
      id: Date.now(),
      title,
      price,
      category: form.category,
      purchased: false
    };

    setProducts([...products, newProduct]);
    setForm({ title: "", price: "", category: form.category });
  };
  const addItem = () => {
    const trimmed = text.trim();
    if (!trimmed) return;

    setItems([...items, trimmed]);
    setText("");
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

return (
  <div className="app dark">
    {/* PRODUCTS */}
    <div className="card">
      <h2>Add product</h2>

      <input
        className="input"
        name="title"
        type="text"
        value={form.title}
        onChange={onChange}
        placeholder="Enter Product title"
      />

      <input
        className="input"
        name="price"
        type="number"
        value={form.price}
        onChange={onChange}
        placeholder="Enter Product price"
      />

      <select
        className="input"
        name="category"
        value={form.category}
        onChange={onChange}
      >
        <option value="food">food</option>
        <option value="tech">tech</option>
        <option value="other">other</option>
      </select>

      <button className="btn" onClick={addProduct}>
        Add Product
      </button>
    </div>

    {/* SEARCH */}
    <div className="card">
      <h2>Products</h2>

      <input
        className="input"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
      />

      <ul className="list">
        {sorted.map((p) => (
         <li className="list-item" key={p.id}>
          <span
            style={{
              textDecoration: p.purchased ? "line-through" : "none",
              opacity: p.purchased ? 0.6 : 1,
            }}
          >
            {p.title} ({p.category})
          </span>

          <div style={{ display: "flex", gap: 8 }}>
            <span className="price">${p.price}</span>

            <button
              className={`btn ${p.purchased ? "danger" : ""}`}
              onClick={() => togglePurchased(p.id)}
            >
              {p.purchased ? "Bought" : "Buy"}
            </button>
          </div>
        </li>

        ))}
      </ul>
    </div>

    {/* SMART LIST */}
    <div className="card">
      <h2>SmartList v1</h2>

      <input
        className="input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Напиши элемент"
      />

      <button className="btn" onClick={addItem}>
        Добавить
      </button>

      <ul className="list">
        {items.map((item, i) => (
          <li className="list-item" key={i}>
            <span>{item}</span>
            <button
              className="btn danger"
              onClick={() => removeItem(i)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

}
