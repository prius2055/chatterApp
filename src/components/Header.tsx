import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { CgProfile } from 'react-icons/cg';
import { RxHamburgerMenu } from 'react-icons/rx';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { getCurrentUser } from '../store/userSlice';
import { showNavigation } from '../store/postSlice';

const Header: React.FC = () => {
  const { navigationDisplay } = useAppSelector((store) => store.posts);
  const { currentUser, isLoading, loadingError } = useAppSelector(
    (store) => store.users
  );

  const [showNavObj, setShowNavObj] = useState({
    navigation: false,
    closeBtn: false,
  });

  const dispatch = useAppDispatch();

  // const hamburger = document.getElementById('hamburger-icon');
  // console.log(hamburger?.style);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);



  return (
    <div className="header">
      <div className="header-top">
        <NavLink to="/posts" className="logo">
          GISTAM
        </NavLink>

        <div className="search">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="header-icons" />
          <input type="text" placeholder="Search here" />
        </div>

        <div className="profile">
          {currentUser?.firstname ? `Hi ${currentUser.firstname}` : `Welcome`}
        </div>
      </div>

      <div className="header-bottom">
        {currentUser?.firstname ? (
          <CgProfile className="profile-image" />
        ) : (
          <div className="header-buttons">
            <NavLink to="/signup" className="btn-blue">
              Sign up
            </NavLink>
          </div>
        )}
        {currentUser?.firstname ? (
          <FontAwesomeIcon icon={faBell} className="header-icons" />
        ) : (
          <div className="header-buttons">
            <NavLink to="/login">Log in</NavLink>
          </div>
        )}
      </div>

      {/* <div className="profile">
        <span>
          {currentUser?.firstname ? (
            `Hi ${currentUser.firstname}`
          ) : (
            <div className="header-buttons">
              <NavLink to="/login">Log in</NavLink>
              <NavLink to="/signup" className="btn-blue">
                Sign up
              </NavLink>
            </div>
          )}
        </span>

        {currentUser?.firstname ? <CgProfile className="profile-image" /> : ''}
        {currentUser?.firstname ? (
          <FontAwesomeIcon icon={faBell} className="header-icons" />
        ) : (
          ''
        )}
      </div> */}
    </div>
  );
};

export default Header;
