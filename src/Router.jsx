import { useState } from 'react'

import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Cart } from "./pages/Cart";
import { Purchase } from "./pages/FinishedPurchase";
import { Home } from "./pages/Home";

export function Router(props) {
  const [list, setList] = useState([])
  
  function handleSaveCoffe(coffee){
    let newList = [...list]
    
    newList.push(coffee)
    setList(newList)
  }
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart listCoffe={list} />} />
        <Route path="/finishedpurchase" element={<Purchase />} />
      </Route>
    </Routes>
  );
}
