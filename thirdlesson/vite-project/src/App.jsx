import { useState } from "react";
import styles from "./App.module.css";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import ProductCard from "./components/ProductCard";


export default function App(){
  const [items, setItems] = useState([])

  function addItem(item){
    setItems(prev => [item, ...prev]);
  }
  function onRemove(id){
    setItems(prev => prev.filter(i => i.id !== id))
  }
  function onInc(id){
    setItems(prev => prev.map(i => i.id === id ? {...i, qty: i.qty + 1} : i ))
  }
  function onDec(id){
    setItems(prev => prev.map(i => i.id === id && i.qty > 1 ? {...i, qty: i.qty - 1} : i))
  }
  const total = items.reduce(
    (sum,i) => sum += i.price * i.qty,
    0
  )


  return(
    <div className={styles.app}>
      <h1>Mini Shop</h1>

      <ProductForm onAdd={addItem}></ProductForm>
      <ProductList 
      items = {items}
      onRemove = {onRemove}
      onInc = {onInc}
      onDec = {onDec}
      ></ProductList>
      

      <h2>Total : {total}$</h2>

    </div>
  )
}