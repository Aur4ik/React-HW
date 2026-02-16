import { useState, useEffect } from "react";
import "../App.css";

export default function Main({ dark }) {

    const [products, setProducts] = useState([]);
    const [status, setStatus] = useState("idle")
    const [error,setError] = useState("")


    const mainColor ={
        background: dark ? "#333" : "#fff",
        color: "#333",
        padding: 24,
        borderRadius: 8,
        margin: "24px 0"
    }

    useEffect(() => {
    async function loadingProducts() {
        setStatus("loading");
        setError("");

        try {
            const res = await fetch("https://dummyjson.com/products?limit=8");
            if (!res.ok) throw new Error("HTTP " + res.status);

            const json = await res.json();
            setProducts(json.products);
            setStatus("success");
        } catch (e) {
            setError(String(e.message || e));
            setStatus("error");
        }
    }

    loadingProducts();
}, []);
    return (
  <div className="card" style={mainColor}>
    <h2>Products</h2>

    {status === "error" && (
      <p style={{ color: "crimson" }}>Ошибка {error}</p>
    )}

    {status === "loading" && <p>Загрузка...</p>}

    {status === "success" && (
      <div className="grid">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <img src={p.thumbnail} alt={p.title} />
            <h3>{p.title}</h3>
            <p className="price">${p.price}</p>
            <p className="desc">{p.description.slice(0, 60)}...</p>
            <button className="buy-btn">Buy</button>
          </div>
        ))}
      </div>
    )}
  </div>
);


}
