import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';



function App() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({


  });




  const onSubmit = (data) => {
    console.log('Form Data:', data);

      console.log(watch("example"))
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
      

      <div>
        <label htmlFor="">Name</label>
      <input type="text" {...register('name', { required: true })} />
        {errors.name && <span>Name is required</span>}
      </div>


      <div>
        <label>Phone</label>
        <input type="text" {...register('phone',  { required: true })} />
        {errors.phone && <span> phone number is requred</span>}
      </div>

      <div>
        <label>Email</label>
        <input type="email" {...register('email',  { required: true })} />
        {errors.email && <span>Email is requred</span>}
      </div>

      <div>
        <label>Description</label>
        <textarea {...register('description' , { required: true })} />
        {errors.description && <span>Description is required</span>}
      </div>

      <div>
        <label>Category</label>
        <select {...register('category' ,  { required: true })}> 
          {/* {errors.category && <span>Category is required</span>} */}
          <option value="">Select...</option>
          <option value="10th">10th</option>
          <option value="12th">12th</option>
          <option value="graduate">Graduate</option>
          <option value="master's">Master's</option>

        </select>
      </div>

      <div>
        <label>Gender</label>
        <label><input type="radio" value="male" {...register('gender')} /> Male</label>
        <label><input type="radio" value="female" {...register('gender')} /> Female</label>
        <label><input type="radio" value="other" {...register('gender')} /> Other</label>
      </div>

      <div>
        <label>Programming Languages</label>
        <label><input type="checkbox" value="reactjs" {...register('programmingLanguages')} /> ReactJS</label>
        <label><input type="checkbox" value="nodejs" {...register('programmingLanguages')} /> NodeJS</label>
        <label><input type="checkbox" value="Advance Js" {...register('programmingLanguage')} />Advance JS</label>
        <label><input type="checkbox" value="html" {...register('programmingLanguages')} /> HTML</label>
      </div>

      <div>
        <label>
          <input type="checkbox" {...register('acceptTerms')} />
          Accept Terms & Conditions
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  
    </>
  )
}

export default App
