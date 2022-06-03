import SectionTitle from '../../components/sectionTitle';
import './Login.css'

const Login = () => {

  return (
    <>
      <SectionTitle title={'Log In'} />
      <div className='login-container'>
        <div className='login-text-box'>
          <h1>
            Welcome to <span style={{ color: '#626262' }}>Baby's</span>
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
            velit fugiat vero tenetur reprehenderit quibusdam consequuntur saepe
            ipsum soluta rem praesentium modi obcaecati nemo, rerum nisi impedit
            voluptas? Ad, doloribus? Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Quam, incidunt nobis maxime, provident inventore
            harum repellat repudiandae aliquam quod expedita iste minus dolore
            dolorem quae eos et? Corrupti, dicta impedit!
          </p>
        </div>
        <form>
          <div className='login-form'>
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              id='email'
              placeholder='user@domain.com'
            />
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              placeholder='*******'
            />
            <button type='submit'>LOG IN</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;