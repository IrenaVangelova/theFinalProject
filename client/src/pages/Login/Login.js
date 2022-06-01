import { useState } from 'react';



import SectionTitle from '../../components/sectionTitle';


const Login = () => {
//     const [userLogin, setUserLogina] = useState({
//         email: '',
//         password: '',
//       });
    
//       const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setUserLogina((prevState) => ({ ...prevState, [name]: value }));
//       };

//   const handleSubmitFormData = (data, e) => {
//     e.preventDefault();
//   };

//   const onError = (errors, e) => console.log(errors, e);

  return (
    <>
      <SectionTitle title={'Log In'} />
      <div
        className='login-container'
        style={{ display: 'flex', marginTop: '2rem' , textAlign: 'left' }}
      >
        <div
          className='login-text-box'
          style={{ width: '60%', paddingRight: '4rem' }}
        >
          <h1
            style={{
              fontSize: '46px',
              color: '#F0972A',
              fontFamily: 'Roboto Slab',
            }}
          >
            Welcome to <span style={{ color: '#626262' }}>Baby's</span>
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
            adipisicing elit. Quam, incidunt nobis maxime, provident inventore
            harum repellat repudiandae aliquam quod expedita iste minus dolore
            dolorem quae eos et? Corrupti, dicta impedit!
          </p>
        </div>
        <div
          className='login-form'
          style={{ width: '40%', margin: '3rem 2rem' }}
        >
          <form
            style={{ display: 'flex', flexDirection: 'column' }}
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
              type='text'
              id='email'
              placeholder='user@domain.com'
              style={{
                padding: '5px',
                height: '1.7rem',
                borderRadius: '5px',
                fontFamily: 'Roboto Slab',
                fontWeight: 'bold',
                border: '1px solid #A5A5A5',
                background: '#F0EFEA',
                width: '60%',
                color: '#626262',
              }}
            />

            <label
              htmlFor='password'
              style={{
                fontFamily: 'Roboto Slab',
                fontWeight: 'bolder',
                marginTop: '1.5rem',
                marginBottom: '0.7rem',
                color: '#F0972A',
              }}
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              placeholder='*****'
              style={{
                padding: '5px',
                height: '1.7rem',
                borderRadius: '5px',
                fontFamily: 'Roboto Slab',
                fontWeight: 'bold',
                border: '1px solid #A5A5A5',
                background: '#F0EFEA',
                width: '60%',
                color: '#626262',
              }}
            />
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
              LOG IN
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;