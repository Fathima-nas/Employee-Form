import { Button, TextField } from '@material-ui/core'
import React from 'react'
import useForm from './ReadForm'

export const EmployeeReg =()=>{
    var [value,changeValue]=useForm({name:"",address:"",pincode:"",mobile:"",email:"",password:"",confirmPassword:""})
     const valueAdd=()=>{
         console.log(value)
     }
    return (

        <div>
            <h1> EMPLOYEE FORM</h1>
            <TextField name="name" value={value.name}  onChange={changeValue} color="secondary" type="text" fullWidth variant="outlined" margin="normal" label="Enter your Name"/>
           
            <TextField name="address" value={value.address} onChange={changeValue} color="secondary" type="text" fullWidth variant="outlined" margin="normal" label="Enter your Address"/>
            
            <TextField name="pincode" value={value.pincode} onChange={changeValue} color="secondary"  fullWidth variant="outlined" margin="normal" label="Enter your Pincode"/>
           
            <TextField name="mobile" value={value.mobile} onChange={changeValue} color="secondary" inputMode="numeric" fullWidth variant="outlined" margin="normal" label="Enter your Mobile Number"/>
            
            <TextField name="email" value={value.email} onChange={changeValue} color="secondary" type="email" fullWidth variant="outlined"  margin="normal" label="Enter your Email id"/>
            
            <TextField name="password" value={value.password} onChange={changeValue} color="secondary" type="password" fullWidth variant="outlined" margin="normal" label="Enter your Password"/>
            
            <TextField name="confirmPassword" value={value.confirmPassword} onChange={changeValue} color="secondary" type="password" fullWidth variant="outlined" margin="normal" label="Enter your Confirm Password"/>
            
            <Button margin="normal" onClick={valueAdd} variant="contained" color="primary" >SUBMIT</Button>

        </div>
    )
}

export default EmployeeReg
