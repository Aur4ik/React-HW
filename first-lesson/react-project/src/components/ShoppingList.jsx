import { useState } from "react";
import "./Shoppinglist.css"

export default function ShoppingList(){
    const [items, setItems] = useState([])

    const [title, setTitle] = useState("")
    const [qty, setQty] = useState("1")

    const [editId, setEditId] = useState(null)
    const [editTitle, setEditTitle] = useState("")
    const [editQty, setEditQty] = useState("1")

    const addItem = () =>{
        const cleanTitle = title.trim()
        if (cleanTitle === "") return

        const cleanQty = qty.trim() === "" ? "1" : qty.trim()

        const newItem = {
            id: Date.now(),
            title: cleanTitle,
            qty: cleanQty,
            done: false,
        }
        setItems([newItem, ...items])
        setTitle("")
        setQty("")

    }

    const removeItem = (id) => {
        setItems(items.filter((i) => i.id !== id))
        if(editId === id){
            setEditId(null)
            setEditTitle("")
            setEditQty("1")
        }
    }

    const toggleDone = (id) =>{
        setItems(
            items.map((i) => (i.id === id ? {...i, done: !i.done} : i))
        )
    }

    const startEdit = (item) =>{
        setEditId(item.id)
        setEditTitle(item.title)
        setEditQty(item.qty)
    }
    const saveEdit = (id) =>{
        const cleanTitle = editTitle.trim()
        if(cleanTitle === "") return

        const cleanQty = editQty.trim() === "" ? "1": editQty.trim()

        setItems(
            items.map((i) => i.id === id ? {...i, title: cleanTitle, qty: cleanQty}: i)
        )
        setEditId(null)
        setEditTitle("")
        setEditQty("1")
    }
    const onKeyDownAdd = (e) => {
        if(e.key === "Enter") addItem()
    }
return (
    <div>
        <h2>Shopping List</h2>

        <input
            type="text"
            placeholder="Название товара"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={onKeyDownAdd}
        />

        <input
            type="number"
            placeholder="Количество"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
            onKeyDown={onKeyDownAdd}
        />

        <button onClick={addItem}>Добавить</button>

        <ul>
            {items.map((item) => (
                <li key={item.id}>
                    {editId === item.id ? (
                        <>
                            <input
                                type="text"
                                value={editTitle}
                                onChange={(e) => setEditTitle(e.target.value)}
                            />
                            <input
                                type="number"
                                value={editQty}
                                onChange={(e) => setEditQty(e.target.value)}
                            />
                            <button onClick={() => saveEdit(item.id)}>Сохранить</button>
                        </>
                    ) : (
                        <>
                            <span
                                style={{
                                    textDecoration: item.done ? "line-through" : "none",
                                    cursor: "pointer",
                                }}
                                onClick={() => toggleDone(item.id)}
                            >
                                {item.title} — {item.qty}
                            </span>

                            <button onClick={() => startEdit(item)}>Редактировать</button>
                            <button onClick={() => removeItem(item.id)}>Удалить</button>
                        </>
                    )}
                </li>
            ))}
        </ul>
    </div>
)


}