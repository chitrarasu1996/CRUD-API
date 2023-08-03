import axios from 'axios'
import React, { useState } from 'react'
import {Form,FormGroup,Input,Label,Button} from "reactstrap"
import { API } from '../service/API'
import { useNavigate } from 'react-router-dom'
const Post = () => {
    const navigate=useNavigate()
    const [names,setNames]=useState({
        firstName:"",
        LastaName:""
    })
const createUser=async(e)=>{
e.preventDefault()
if(names.firstName.length>3&&names.LastaName.length>3){
    const res=await axios.post(API,{firstName:names.firstName ,lastName:names.LastaName})
navigate("/")
alert("user Created successfully")
}else{
    alert("firstName or LastName should be more than 3 Charctors")
}

}
  return (
   <div className='hole-form-container'>
    <div  className='input-container'>
    <Form >
    <h3 className='text-center'>Create User</h3>
    <FormGroup floating>
    
      <Input
        id="exampleEmail"
        name="email"
        placeholder="Enter Your firstName"
        type="text"
        value={names.firstName}
        onChange={(e)=>setNames({...names,firstName:e.target.value})}
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
        value={names.LastaName}
        onChange={(e)=>setNames({...names,LastaName:e.target.value})}
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

export default Post