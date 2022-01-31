import react from "react";
import Header from './components/Header';
import Balance from "./components/Balance";
import './App.css'
import Incomeexpenses from "./components/Incomeexpenses";
import Transactionlist from "./components/Transactionlist";
import Addtransaction from "./components/Addtransaction";
import {useState} from 'react'
import { Button } from 'react-bootstrap';
function App() {
  const [text,setText]=useState('')
  const [amount,setAmount]=useState(0)
  return (
    <div>
    <Header></Header>
    <div className="container">
      <Balance></Balance>
      <Incomeexpenses></Incomeexpenses>
      <Transactionlist></Transactionlist>
      <Addtransaction></Addtransaction>
      <>
  <Button variant="primary">Primary</Button>{' '}
  <Button variant="secondary">Secondary</Button>{' '}
  <Button variant="success">Success</Button>{' '}
  <Button variant="warning">Warning</Button>{' '}
  <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
  <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
  <Button variant="link">Link</Button>
</>
    </div>
    </div>
  );
}

export default App;
