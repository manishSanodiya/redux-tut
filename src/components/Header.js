import classes from './Header.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/Auth';

const Header = () => {
  const isAuth = useSelector(state => state.auth.isAuthenticated)
  const dispatch = useDispatch();

const logoutHandler =()=>{
  dispatch(authActions.logout())

}


  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          {isAuth && <li>
            <a href='/'>My Products</a>
          </li>}
         {isAuth &&  <li>
            <a href='/'>My Sales</a>
          </li>}
         {isAuth &&  <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
