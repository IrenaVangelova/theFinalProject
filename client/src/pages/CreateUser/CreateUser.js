import { useState } from 'react';
import SectionTitle from '../../components/sectionTitle';
import './CreateUser.css'

const CreateUser = () => {
  const [addUserFormData, setAddUserFormData] = useState({
    firstName: '',
    lastName: '',
    birthday: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddUserFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <SectionTitle title={'Create Account'} />
      <div className='register-wrapper'>
        <div className='register-textbox'>
          <h1>
            Create your <span style={{ color: '#626262' }}>account</span>
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
            velit fugiat vero tenetur reprehenderit quibusdam consequuntur saepe
            ipsum soluta rem praesentium modi obcaecati nemo, rerum nisi impedit
            voluptas? Ad, doloribus? Lorem ipsum dolor, sit amet consectetur
            adipisicing elit.
          </p>
        </div>
        <form className='create-user-form'>
          <div className='register-form-names'>
            <label htmlFor='firstName'>First Name</label>
            <input
              id='firstName'
              placeholder='John'
              name='firstName'
              onChange={handleInputChange}
            />
          </div>
          <div className='register-form-names'>
            <label htmlFor='lastName'>Last Name</label>
            <input
              id='lastName'
              name='lastName'
              placeholder='Smith'
              onChange={handleInputChange}
            />
          </div>
          <div className='register-form-names'>
            <label htmlFor='email'>Email</label>
            <input
              id='email'
              name='email'
              placeholder='john@smith.com'
              onChange={handleInputChange}
            />
          </div>
          <div className='register-form-names'>
            <label htmlFor='birthday'>Birthday</label>
            <input
              type='date'
              id='birthday'
              name='birthday'
              onChange={handleInputChange}
            />
          </div>
          <div className='register-form-names'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='******'
              onChange={handleInputChange}
            />
          </div>
          <div className='register-form-names'>
            <label htmlFor='passwordRepeat'>Repeat Password</label>
            <input
              type='password'
              id='passwordRepeat'
              placeholder='******'
              onChange={handleInputChange}
            />
          </div>
          <button type='submit'>CREATE ACCOUNT</button>
        </form>
      </div>
    </>
  );
};

export default CreateUser;