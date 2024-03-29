import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookmark,
  faEnvelopeOpen,
  faUser,
  faBell,
} from '@fortawesome/free-regular-svg-icons';
import { faUserGroup, faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';
import feedImage from '../img/feed.png';
import chartImage from '../img/chart.png';
import './Navigation.css';

const Navigation: React.FC = () => {
  // const { usersArray, isLoading, loadingError } = useSelector(
  //   (store) => store.users
  // );

  // const loggedInUser = usersArray.filter(
  //   (user) =>
  //     user.email === currentUser.email && user.password === currentUser.password
  // );

  return (
    <div className="navigation-group">
      <NavLink to="/" className="logo">
        CHATTER
      </NavLink>

      {/* {usersArray?.map((user) => (
        <nav className="navigation">
          <ul className="navbar">
            <li>
              Welcome, <span>{user.firstname}</span>
            </li>
            <li>
              <NavLink to="/newpost">Write a post</NavLink>
            </li>
          </ul>
          <button type="button">Sign out</button>
        </nav>
      ))} */}

      <nav className="navigation">
        <div className="navbar">
          <div>
            <h3>Overview</h3>
            <ul>
              <li className="list-group">
                <img src={feedImage} alt="feed" />
                <p>Feed</p>
              </li>
              <li className="list-group">
                <FontAwesomeIcon icon={faBookmark} />
                <p>Bookmarks</p>
              </li>
              <li className="list-group">
                <FontAwesomeIcon icon={faUserGroup} />
                <p> Team blogs</p>
              </li>
              <li className="list-group">
                <FontAwesomeIcon icon={faEnvelopeOpen} />
                <p>Drafts</p>
              </li>
              <li className="list-group">
                <img src={chartImage} alt="chart" />
                <p>Analysis</p>
              </li>
            </ul>
          </div>

          <div>
            {/* <NavLink to="/member">Become a member</NavLink> */}
            <NavLink to="/member" className="trending">
              <h3>Trending Tags</h3>
              <FontAwesomeIcon icon={faArrowTrendUp} />
            </NavLink>

            <ul className="trending-list">
              <li>Programming</li>
              <li>Data science</li>
              <li>Technology</li>
              <li>Machine learning</li>
              <li>Politics</li>
              <li>See all</li>
            </ul>
          </div>
          <div>
            <h3> Personal</h3>
            <ul>
              <li className="list-group">
                <FontAwesomeIcon icon={faUser} />
                <p> Account</p>
              </li>
              <li className="list-group">
                <FontAwesomeIcon icon={faBell} />
                <p> Notifications</p>
              </li>
              <li>Log Out</li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
