import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import {Form,FormGroup,Input,Label,Button} from "reactstrap"
import { API } from '../service/API'
import { useNavigate } from 'react-router-dom'
import { userContext } from '../App'
const Edit = () => {
const navigate=useNavigate()
   const {name,setName}=useContext(userContext)

  
const createUser=async(e)=>{
e.preventDefault()


if(name.firstName.length>3&&name.lastName.length>3){

    const res=await axios.put(`${API}/${name.userId}`,
    {firstName:name.firstName,lastName:name.lastName})
navigate("/")
localStorage.clear()
}else{
    alert("firstName or LastName should be more than 3 Charctors")
}

}
  return (
    <div className='hole-form-container'>
    <div  className='input-container'>
    <Form >
    <h3 className='text-center'>Edit User</h3>
    <FormGroup floating>
    
      <Input
        id="exampleEvamail"
        name="email"
      value={name.firstName}
        placeholder="Enter Your firstName"
        type="text"
        onChange={(e)=>setName({...name,firstName:e.target.value})}
      />
      <Label for="firstname">
        firstName
      </Label>
    </FormGroup>
    {' '}
    <FormGroup floating>
      <Input
        id="lastname"
        name="lastname"
        placeholder="Enter Your lastname"
        type="text"
        value={name.lastName}
        onChange={(e)=>setName({...name,lastName:e.target.value})}
      />
      <Label for="lastname">
        lastName
      </Label>
    </FormGroup>
    {' '}
    <Button onClick={(e)=>createUser(e)} type='submit' color='success'>
      Submit
    </Button>
  </Form>
  </div>
   </div>
  )
}

export default Edit