import React, { useState } from 'react'
import Layout from '../core/layout';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { signUp } from '../auth';


const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState("");
    const [success, setSucess] = useState(false);
  
  

    const onSubmit = (data, e) => {
        signUp(data)
            .then(dataInput => {
                if (dataInput.error) {
                    setError(dataInput.error);
                } else {
                    e.target.reset() //xóa tất cả dữ liệu trong input
                    setError("");
                    setSucess(true);
                }

            })

    }
    const showError = () => {
      return  <div className="alert alert-danger" style={{display: error ? "block" : "none"}}>
          {error}
      </div>
    }
    const showSucess = () => {
        return <div className="alert alert-info" style={{display: success ? "block" : "none"}}>
            Bạn đã tạo tài khoản thành công. Click để <Link to="/signin">Đăng nhập</Link>
        </div>
    }
    const signUpForm = () => {
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Họ và tên</label>
                    <input type="text"
                        className="form-control1"
                        id="name"
                        {...register('name')}
                    />
                </div>
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
                <button className="login">Đăng ký</button>
            </form>
        )
    }
    return (
        <>
   
            {showError()}
            {showSucess()}
            {signUpForm()}

      </>
    )
}

export default SignUp
