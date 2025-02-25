import CommonForm from '@/components/common/Form';
import { registerFormControls } from '@/config';
import { registerUser } from '@/Store/auth-slice';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "sonner";

const initialState = {
  userName: '',
  email: '',
  password: ''
}

const AuthRegister = () => {

  const [formData, setFormData] = useState(initialState)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(registerUser(formData))
      .then((data) => {
        toast.success(data?.payload?.message)
        if (data?.payload?.success) navigate('/auth/login')
        else {
          toast.error(error.message)
        }

      });

  }



  return (
    <div className='mx-auto w-full max-w-md space-y-6'>
      <div className='text-center'>
        <h1 className='text-3xl font-bold tracking-tight text-foreground'>Create new account</h1>
        <p className='mt-2'>Already have an account
          <Link to='/auth/login'
            className='font-medium ml-3  text-primary hover:underline'>Login</Link></p>
      </div>
      <CommonForm
        formControls={registerFormControls}
        buttonText={'Sign Up'}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />

    </div>
  )
}

export default AuthRegister;
