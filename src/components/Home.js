import React, { useContext, useEffect, useState } from 'react'
import axios, { all } from "axios"
import { API } from '../service/API'

import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from '../App';
function Home() {
    const [allUsers,setAllUsers]=useState([])
    const {setName,name}=useContext(userContext)

   const navigate=useNavigate()
    useEffect(()=>{
        getAllUsers()
    },[])
    const  getAllUsers=async()=>{
        const {data}= await axios.get(API)
       setAllUsers(data)
    }
    const deleteUser=async(user)=>{
      try {
      
        const res= await  axios.delete(`${API}/${user.id}`)
      alert("user was successfully deleted")
        getAllUsers()
      } catch (error) {
        console.log(error)
      }
    }
    const edituser=(user)=>{
     localStorage.setItem("names",JSON.stringify(user))
      setName({...name,
         userId:user.id,
         firstName:user.firstName,
         lastName:user.lastName
    })
      navigate("/edit-user")
    
    }
  return (
    <div className='hole-home' >
{allUsers.length>0?
   <div className='user-container'>


   <table className="table ">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">FirstName</th>
      <th scope="col">LastName</th>
      <th scope="col">Edit</th>
      <th scope="col">delete</th>
    </tr>
  </thead>
  <tbody>
   {allUsers.map((user,i)=>(
    <tr key={i} className='all-user-wrap'>
      <td>{i+1}</td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td><button onClick={()=>edituser(user)} className='btn btn-primary'>edit</button></td>
      <td><button onClick={()=>deleteUser(user)} className='btn btn-danger'>delete</button></td>
    
    </tr>
   ))}
    
 
  </tbody>
</table>

</div>
:<h3 className='text-center text-bold emptyuser'>There Is No User.. Create user</h3>}
<Link to={"/post"}><button className='btn btn-primary' >Create User</button></Link>

        </div>
  
  )
}

export default Home