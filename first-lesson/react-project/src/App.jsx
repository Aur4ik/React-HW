import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Box from "./components/Box";
//1

// function App(){
//   const name = "Aurik"
//   const time = new Date().getDate()
//   const isAuth = true


//   return(
//     <div>
//       <h1>Мадияр Здравстуйтееее</h1>

//       <p>Имя : {name}</p>
//       <p>Время : {time}</p>

//       {isAuth ? (
//         <p>Добро пожаловать</p>
//       ): (
//         <p>ВЫ не вошли в систему</p>
//       )}
//     </div>
//   )

// }
// export default App

function App(){
  return(
  <Box>
      <Header name = "Aurik"/>
      <Main react = "React"/>
      <Footer p = "Четко"/>
  </Box>    
  )


}
export default App