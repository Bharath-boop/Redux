import React, {useState} from 'react'
import CartCard from './components/CartCard.'
import UserContextComponent from './utils/UserContextComponents'
function App() {

  return <>
    <div className="container my-5">
      <UserContextComponent>
        <CartCard/>
      </UserContextComponent>
    </div>
  </>
}

export default App