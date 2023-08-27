import { useDispatch } from 'react-redux';
import classes from './Auth.module.css';
import { authSliceActions } from '../store/auth-slice';
import { useRef } from 'react';

const Auth = () => {
  const dispatch = useDispatch();
  const inputEmailRef = useRef();
  const inputPwdRef = useRef();

  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (
      emailRegex.test(inputEmailRef.current.value) &&
      inputPwdRef.current.value.length >= 10
    ) {
      dispatch(authSliceActions.login());
    } else {
      inputPwdRef.current.value = '';
    }
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={handleFormSubmit}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' ref={inputEmailRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' ref={inputPwdRef} />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
