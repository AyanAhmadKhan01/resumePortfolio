import HomePage from "./assets/homePage"
import { BrowserRouter, Routes, Route } from "react-router";
import './assets/style.css'

export default function app() {
  return(
    <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage/>}/>
  </Routes>
  </BrowserRouter>
    </>
  )
}