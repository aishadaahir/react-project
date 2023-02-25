import React from 'react'
import { useForm } from 'react-hook-form'
export default function Hook() {
    const {register,handleSubmit}=useForm()
    const submitdata=(data)=>{
        // document.getElementById('result').value = data
        console.log(data)
    }
  return (
    <div>
        <form onSubmit={handleSubmit(submitdata)} >
        <label>ID</label>
        <input name='id' {...register('id')}  type="text" placeholder="id"></input><br/>
        <label>Name</label>
        <input name='name' {...register('name')} type="text" placeholder="name"></input><br/>
        <label>Phone</label>
        <input name='phone' {...register('phone')} type="text" placeholder="phone"></input><br/>
        <label>Address</label>
        <input name='address' {...register('address')} type="text" placeholder="address"></input><br/>
        <button type='submit'>submit</button>
        </form>
        {/* <label id='result' type='text' >data</label> */}
    </div>
  )
}
