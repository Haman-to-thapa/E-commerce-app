import CommonForm from '@/components/common/Form'
import { loginFormControls } from '@/config'
import { loginUser } from '@/Store/auth-slice'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'


const initialState = {
  email: "",
  password: '',
}



const AuthLogin = () => {


  const [formData, setFormData] = useState(initialState)
  const dispatch = useDispatch()


  const onSubmit = (event) => {
    event.preventDefault()

    dispatch(loginUser(formData)).then(data => {
      if (data?.payload?.success) {
        toast.success("Login Successful")
      } else {
        toast.error(data.payload.error)
      }
    })
  }
  return (
    <div className='mx-auto w-full max-w-md space-y-6'>
      <div className='text-center'>
        <h1 className='text-3xl font-bold tracking-tight text-foreground'> Sign in your account</h1>
        <p className='mt-2'> Don't have and accunt
          <Link to='/auth/register' className='font-medium ml-2 text-primary hover:underline'>Register</Link>
        </p>
      </div>
      <CommonForm
        formControls={loginFormControls}
        buttonText={'Sign in'}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}

      />

    </div>
  )
}

export default AuthLogin
