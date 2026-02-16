// // import { useState } from "react";


// // export default function ThemeDemo(){
// //   const [isDark, setDark] = useState(false)

// //   const pageStyle = {
// //     minHeight: "100vh",
// //     padding: 24,
// //     background: isDark ? "black" : "white",
// //     color: isDark ? "white" : "black",
// //     transtion: "0.25s",
// //     fontFamily: "Inter, system-ui, Arial"
// //   }

// //   const cardStyle = {
// //     maxWidth: 520,
// //     padding: 20,
// //     borderRadius: 16,
// //     background: isDark ? "white" : "black",
// //     boxShadow: "0 8px 24px rgba(0,0,0,0,12)",
// //     border: isDark ? "1px solid blue" : "1px solid red"
// //   }

// //   return(
// //     <div style={pageStyle}>
// //       <div style={cardStyle}>
// //         <h2 style={{marginTop: 0}}>Theme Demo</h2>

// //         <button
// //          onClick={() => setDark((v) => !v)}
// //          style={{
// //           padding: "10px 14px",
// //           borderRadius: 12,
// //           border: "none",
// //           cursor: "pointer",
// //           background: isDark ? "purple" : "blue",
// //           color: "#fff",
// //           transition: "0.25s"
// //          }}>
// //           Toggle Theme
// //          </button>
// //          <p>Сейчас тема: <b>{isDark ? "Dark" : "Light"}</b></p>
// //       </div>
// //     </div>
// //   )
// // }

// import {useEffect, useState} from "react"

// export default function TitleOnMount(){
  

//   // useEffect(() =>{
//   //   document.title = "Dashboard"
//   // })

//   // return(
//   //   <div style={{padding: 24}}>
//   //     <button onClick={() => {
//   //       setCount((c) => c + 1)
//   //     }}>+1 </button>
//   //     <p>Count: {count}</p>
//   //   </div>
//   // )

//   // const [query, setQuery] = useState("")


//   // useEffect(() => {
//   //   if (query.trim() === "") return
//   //   console.log("Пользователь ввел:", query)
//   //   // console.log("UseEffect was working")
//   // }, [query])

//   // return(
//   //   <div style={{padding:24}}>
//   //     <input type="text" 
//   //     value={query}
//   //     onChange={(e) => setQuery(e.target.value)}
//   //     placeholder="Compose something"
//   //     />
//   //     <p>query: {query}</p>
   
//   //   </div>
//   // )

//   // const [sec, setSec] = useState(0)

//   // useEffect(() =>{
//   //   const id = setInterval(() =>{
//   //     setSec((s) => s + 1)
//   //   }, 1000)

//   //   return () => clearInterval(id)
//   // }, [])

//   // return(
//   //   <div style={{padding: 24}}>
//   //     <p>Прошло секунд: {sec}</p>
//   //   </div>
//   // )

//   const [products, setProducts] = useState([])
//   const [status, setStatus] = useState("idle")
//   const [error,setError] = useState("")

//   useEffect(() =>{
//     let ignore = false 

//     async function loadProducts(){
//       setStatus("loading")
//       setError("")

//       try{
//         const res = await fetch("https://dummyjson.com/products?limit=10")
//         if(!res.ok) throw new Error("HTTP" + res.status)

//         const json = await res.json()

//         if(!ignore){
//           setProducts(json.products)
//           setStatus("success")
//         }
//       }catch(e){
//         if(!ignore){
//           setError(String(e.message || e))
//           setStatus("error")
//         }
//       }
//     }
//     loadProducts()

//     return () =>{
//       ignore = true
//     }
//   }, [])

//   return(
//     <div style={{padding: 24}}>
//       <h2>Products</h2>
//       {status === "error" && <p style={{color:"crimson"}}>Ошибка {error}</p>}

//       {status === "success" && (
//         <ul>
//           {products.map((p) => (
//             <li key={p.id}>
//               <b>{p.title}</b> - {p.price}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   )
// }

import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";

export default function App() {
  const [dark, setDark] = useState(false)
  const pageStyle = {
    minHeight: "100vh",
    padding: 24,
    background: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
    transition: "0.25s",
    fontFamily: "Inter, system-ui, Arial"
  }
  return (
    <div style={pageStyle}>
      <Header dark={dark} setDark={setDark}/>
      <Main dark={dark} setDark={setDark}/>
    </div>
  );
}

