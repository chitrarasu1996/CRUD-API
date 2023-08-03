import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.css';
import Post from './components/Post';
import { Routes,Route } from 'react-router-dom';
import Edit from './components/Edit';
import { createContext, useContext, useState } from 'react';

export const userContext=createContext();

function App() {

  const [name,setName]=useState({
    userId:"",
firstName:"",
lastName:""
  })
  return (
    <div className="App">
      <userContext.Provider value={{setName,name}}>
      <Routes>
   <Route path="/" element={<Home/>} /> 
    <Route path="/post" element={<Post/>}/>
    <Route path="/edit-user" element={<Edit/>}/>
    </Routes>
    </userContext.Provider>
    </div>
  );
}

export default App;
