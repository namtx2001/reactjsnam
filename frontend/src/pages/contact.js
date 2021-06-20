import React from 'react'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
const ContactPage = ({addContact}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    const onHandleSubmit = (data) => {
      
      const uploads = new FormData();
      uploads.append("name", data.name);
      uploads.append("email", data.email);
      
      uploads.append("phone", data.phone);

      uploads.append("message", data.message);
     
     addContact(uploads);
      
      history.push('/');
  }
    return (
        <div>
  <div className="container py-5">
    <div className="row py-5">
      <form  className="col-md-9 m-auto" onSubmit={handleSubmit(onHandleSubmit)}>
        <div className="row">
          <div className="form-group col-md-6 mb-3">
            <label htmlFor="inputname">Name</label>
            <input type="text" className="form-control mt-1" id="contact-name" name="name" placeholder="Name" 
              {...register('name', { required: true })}
            />
                {errors.name && <span className="text-danger mt-2">Field</span>}

          </div>
          <div className="form-group col-md-6 mb-3">
            <label htmlFor="inputemail">Email</label>
            <input type="email" className="form-control mt-1" id="contact-email" name="email" placeholder="Email"
             {...register('email', { required: true })}
            />
                {errors.email && <span className="text-danger mt-2">Field</span>}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="inputsubject">Phone</label>
          <input type="text" className="form-control mt-1" id="contact-phone" name="subject" placeholder="Subject"
           {...register('phone', { required: true })}
          />
              {errors.phone && <span className="text-danger mt-2">Field</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="inputmessage">Message</label>
          <textarea className="form-control mt-1" id="contact-message" name="message" placeholder="Message" rows={8} defaultValue={""} 
           {...register('message', { required: true })}
          />
              {errors.message && <span className="text-danger mt-2">Field</span>}
        </div>
        <div className="row">
          <div className="col text-end mt-2">
            <button type="submit" className="btn btn-success btn-lg px-3">Let’s Talk</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

    )
}

export default ContactPage
