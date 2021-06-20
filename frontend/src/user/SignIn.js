import React, { useState } from 'react'
import Layout from '../core/layout';
import { useForm } from 'react-hook-form';
import { Redirect } from 'react-router-dom';
import { signIn, authenticate, isAuthenticated } from '../auth';



const SignIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
  
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [redirectToRef, setRedirectToRef] = useState(false);
    const { user } = isAuthenticated();

    const onSubmit = (data) => {
        setLoading(true);
        signIn(data)
            .then(dataUser => {
                if (dataUser.error) {
                    setError(dataUser.error);
                    setLoading(false);
                } else {
                    authenticate(dataUser, () => {
                        setRedirectToRef(true)
                       
                    })
                  
                }

            })

    }
    const showError = () => {
      return  <div className="alert alert-danger" style={{display: error ? "block" : "none"}}>
          {error}
      </div>
    }
    const redirectUser = () => {
        if(redirectToRef){
            if(user.role == 1) {
                return <Redirect to="/admin/dashboard" />
            } else {
                return <Redirect to="/user/dashboard" />
            }
        }
    }
    const showLoading = () => {
        return loading && <div className="alert alert-info">
            <h2>...Loading</h2>
        </div>
    }
    const signInForm = () => {
        return (
            
            
           <form onSubmit={handleSubmit(onSubmit)}>
               
               <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email của bạn</label>
                  <input type="email"  
                     className="form-control2"
                    id="email"
                     {...register('email')}
                  />
              </div>
              <div className="mb-3">
                  <label htmlFor="password" className="form-label">Mật khẩu</label>
                    <input type="password"
                       className="form-control3"
                        id="password"
                      {...register('password')}
                   />
              </div>
                <button className=" login" >Đăng nhập</button>
             </form>
        )
    }
    return (
        <>
        
            {redirectUser()}
            {showError()}
            {showLoading()}
            {signInForm()}

    
        </>
    )
}

export default SignIn
