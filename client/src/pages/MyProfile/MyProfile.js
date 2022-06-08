import SectionTitle from '../../components/sectionTitle';
import './MyProfile.css'
import avatar from '../../components/UI/images/1.jpg';

const MyProfile = () => {

  return (
    <>
      <SectionTitle title={'My Profile'} />
      <form className='profile-form'>
        <div className='profile-textbox'>
          <img src={avatar} alt="Avatar" />
          <form action="/upload" method="POST">
            <input type="file" />
          </form>
        </div>
        <div className='profile-info'>
          <div className='first-three'>
            <div className='profile-form-names'>
              <label htmlFor='firstName'>First Name</label>
              <input
                id='firstName'
                placeholder='John'
                name='firstName'
              />
            </div>
            <div className='profile-form-names'>
              <label htmlFor='email'>Email</label>
              <input
                id='email'
                name='email'
                placeholder='john@smith.com'
              />
            </div>
            <div className='profile-form-names'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                id='password'
                name='password'
                placeholder='******'
              />
            </div>
            <button type='submit'>SAVE</button>
          </div>
          <div className='last-three'>
            <div className='profile-form-names'>
              <label htmlFor='lastName'>Last Name</label>
              <input
                id='lastName'
                name='lastName'
                placeholder='Smith'
              />
            </div>
            <div className='profile-form-names'>
              <label htmlFor='birthday'>Birthday</label>
              <input
                type='date'
                id='birthday'
                name='birthday'
              />
            </div>
            <div className='profile-form-names'>
              <label htmlFor='passwordRepeat'>Repeat Password</label>
              <input
                type='password'
                id='passwordRepeat'
                placeholder='******'
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default MyProfile;