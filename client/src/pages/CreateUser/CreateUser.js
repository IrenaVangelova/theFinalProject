import { useState } from 'react';
import SectionTitle from '../../components/sectionTitle';

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

  console.log(addUserFormData);

  return (
    <>
      <SectionTitle title={'Create Account'} />
      <div
        className='register-wrapper'
        style={{ display: 'flex', marginTop: '2rem' }}
      >
        <div
          className='register-textbox'
          style={{ width: '35%', paddingRight: '4rem' }}
        >
          <h1
            style={{
              fontSize: '46px',
              color: '#F0972A',
              fontFamily: 'Roboto Slab',
            }}
          >
            Create your <span style={{ color: '#626262' }}>account</span>
          </h1>
          <p
            style={{
              fontFamily: 'Roboto Slab',
              fontSize: '20px',
              color: '#A5A5A5',
            }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
            velit fugiat vero tenetur reprehenderit quibusdam consequuntur saepe
            ipsum soluta rem praesentium modi obcaecati nemo, rerum nisi impedit
            voluptas? Ad, doloribus? Lorem ipsum dolor, sit amet consectetur
            adipisicing elit.
          </p>
        </div>
        <form
          className='register-form'
          style={{
            width: '65%',
            marginLeft: '4rem',
            marginTop: '3rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignContent: 'flex-start',
          }}
        >
          <div
            className='form-first-name'
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '45%',
              marginBottom: '1rem',
            }}
          >
            <label
              htmlFor='firstName'
              style={{
                fontFamily: 'Roboto Slab',
                fontWeight: 'bolder',
                marginBottom: '0.7rem',
                color: '#F0972A',
              }}
            >
              First Name
            </label>
            <input
              id='firstName'
              placeholder='John'
              name='firstName'
              style={{
                padding: '5px',
                height: '1.7rem',
                borderRadius: '5px',
                fontFamily: 'Roboto Slab',
                fontWeight: 'bold',
                border: '1px solid #A5A5A5',
                background: '#F0EFEA',
                width: '85%',
                color: '#626262',
              }}
              onChange={handleInputChange}
            />
          </div>
          <div
            className='form-last-name'
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '45%',
            }}
          >
            <label
              htmlFor='lastName'
              style={{
                fontFamily: 'Roboto Slab',
                fontWeight: 'bolder',
                marginBottom: '0.7rem',
                color: '#F0972A',
              }}
            >
              Last Name
            </label>
            <input
              id='lastName'
              name='lastName'
              placeholder='Smith'
              style={{
                padding: '5px',
                height: '1.7rem',
                borderRadius: '5px',
                fontFamily: 'Roboto Slab',
                fontWeight: 'bold',
                border: '1px solid #A5A5A5',
                background: '#F0EFEA',
                width: '85%',
                color: '#626262',
              }}
              onChange={handleInputChange}
            />
          </div>
          <div
            className='form-email'
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '45%',
              marginBottom: '1rem',
            }}
          >
            <label
              htmlFor='email'
              style={{
                fontFamily: 'Roboto Slab',
                fontWeight: 'bolder',
                marginBottom: '0.7rem',
                color: '#F0972A',
              }}
            >
              Email
            </label>
            <input
              id='email'
              name='email'
              placeholder='john@smith.com'
              style={{
                padding: '5px',
                height: '1.7rem',
                borderRadius: '5px',
                fontFamily: 'Roboto Slab',
                fontWeight: 'bold',
                border: '1px solid #A5A5A5',
                background: '#F0EFEA',
                width: '85%',
                color: '#626262',
              }}
              onChange={handleInputChange}
            />
          </div>
          <div
            className='form-birthday'
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '45%',
            }}
          >
            <label
              htmlFor='birthday'
              style={{
                fontFamily: 'Roboto Slab',
                fontWeight: 'bolder',
                marginBottom: '0.7rem',
                color: '#F0972A',
              }}
            >
              Birthday
            </label>
            <input
              type='date'
              id='birthday'
              name='birthday'
              style={{
                padding: '5px',
                height: '1.7rem',
                borderRadius: '5px',
                fontFamily: 'Roboto Slab',
                fontWeight: 'bold',
                border: '1px solid #A5A5A5',
                background: '#F0EFEA',
                width: '85%',
                color: '#626262',
              }}
              onChange={handleInputChange}
            />
          </div>
          <div
            className='form-password'
            style={{ display: 'flex', flexDirection: 'column', width: '45%' }}
          >
            <label
              htmlFor='password'
              style={{
                fontFamily: 'Roboto Slab',
                fontWeight: 'bolder',
                marginBottom: '0.7rem',
                color: '#F0972A',
              }}
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='******'
              style={{
                padding: '5px',
                height: '1.7rem',
                borderRadius: '5px',
                fontFamily: 'Roboto Slab',
                fontWeight: 'bold',
                border: '1px solid #A5A5A5',
                background: '#F0EFEA',
                width: '85%',
                color: '#626262',
              }}
              onChange={handleInputChange}
            />
          </div>
          <div
            className='form-password-check'
            style={{ display: 'flex', flexDirection: 'column', width: '45%' }}
          >
            <label
              htmlFor='passwordRepeat'
              style={{
                fontFamily: 'Roboto Slab',
                fontWeight: 'bolder',
                marginBottom: '0.7rem',
                color: '#F0972A',
              }}
            >
              Repeat Password
            </label>
            <input
              type='password'
              id='passwordRepeat'
              placeholder='******'
              style={{
                padding: '5px',
                height: '1.7rem',
                borderRadius: '5px',
                fontFamily: 'Roboto Slab',
                fontWeight: 'bold',
                border: '1px solid #A5A5A5',
                background: '#F0EFEA',
                width: '85%',
                color: '#626262',
              }}
              onChange={handleInputChange}
            />
          </div>
          <button
            type='submit'
            style={{
              font: 'normal normal 700 16px/45px Roboto',
              width: '28%',
              height: '2.7rem',
              marginTop: '2rem',
              boxShadow: '0px 3px 6px #00000029',
              border: '0',
              textAlign: 'center',
              borderRadius: '6px',
              background: '#96BB36 0% 0% no-repeat padding-box',
              fontSize: '16px',
              color: '#FFFFFF',
            }}
          >
            CREATE ACCOUNT
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateUser;