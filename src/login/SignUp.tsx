import React from 'react';
import { useEffect, useState } from 'react';
// import { setUser } from '../store/postSlice';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './Sign.css';

interface UserData {
  firstname: string;
  lastname: string;
  role: string;
  email: string;
  password: string;
  confirmPassword: string;
  image: string;
  loggedIn: boolean;
  registrationDate: string;
  // userFeeds: [
  //   {
  //     feedId: 'post1',
  //     feedTopic: 'Software Engineering',
  //     feedIntro: 'Software...',
  //     feedDate: '',
  //     feedContent: {
  //       content: ' ',
  //       img: '',
  //       video: '',
  //     },
  //   },
  // ],
}

const SignUp: React.FC = () => {
  const navigate = useNavigate();

  const [showLogin, setShowLogin] = useState<boolean>(true);
  const [showRegister, setShowRegister] = useState<boolean>(false);

  const [userLogin, setUserLogIn] = useState<UserData>({
    firstname: '',
    lastname: '',
    role: '',
    email: '',
    password: '',
    confirmPassword: '',
    image: '',
    loggedIn: false,
    registrationDate: '',
  });
  const [loginError, setLoginError] = useState<boolean>(false);

  // const [authUser, setAuthUser] = useState(null);

  const dispatch = useDispatch();

  const showLoginForm = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const showRegisterForm = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  // const firstNameHandler = (e) => {
  //   setUserLogIn((prev) => ({ ...prev, firstname: e.target.value }));
  // };

  // const lastNameHandler = (e) => {
  //   setUserLogIn((prev) => ({ ...prev, lastname: e.target.value }));
  // };

  // const roleHandler = (e) => {
  //   setUserLogIn((prev) => ({ ...prev, role: e.target.value }));
  // };

  // const emailHandler = (e) => {
  //   setUserLogIn((prev) => ({ ...prev, email: e.target.value }));
  // };

  // const passwordHandler = (e) => {
  //   setUserLogIn((prev) => ({ ...prev, password: e.target.value.trim() }));
  // };

  // const confirmPasswordHandler = (e) => {
  //   setUserLogIn((prev) => ({
  //     ...prev,
  //     confirmPassword: e.target.value.trim(),
  //   }));
  // };

  // HANDLE FORM FOR NEW REGISTRATION
  // WITH GOOGLE EMAIL/PASSWORD SIGN UP
  // const signUpHandler = (e) => {
  //   e.preventDefault();
  // };

  //WITH GOOGLE SIGN UP
  const googleSignUpHandler = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    //   signInWithPopup(auth, provider);

    //   // await addDoc(collectionRef, {
    //   //   firstname: '',
    //   //   lastname: '',
    //   //   displayName: user.displayName,
    //   //   role: '',
    //   //   email: user.email,
    //   //   image: '',
    //   //   loggedIn: user.emailVerified,
    //   //   registrationDate: '',
    //   //   posts: [
    //   //     {
    //   //       postId: 'post1',
    //   //       topic: 'Software Engineering',
    //   //       intro: 'Software...',
    //   //       date: '',
    //   //       postContent: {
    //   //         content:
    //   //           'I want to start by saying that there is no bad programming language. Every programming language has a role and is very important to the applications the world uses daily. As some of the older programming languages are getting replaced by newer ones that are also much higher in demand, it makes more sense to focus on learning those. The cool thing about programming languages is that the basic syntax is usually the same. So once you have a solid understanding of one language, picking another language becomes much easier.',
    //   //         img: '',
    //   //         video: '',
    //   //       },
    //   //     },

    //   //     {
    //   //       postId: 'post2',
    //   //       topic: 'Digital marketing',
    //   //       intro: 'Digital marketing...',
    //   //       date: '',
    //   //       postContent: {
    //   //         content:
    //   //           'Firebase provides some great services like NoSQL databases, authentication, cloud storage, and much more. In this tutorial, we will learn how to use your React application to read and add data to your Firebase database.To demonstrate this, we will learn how to build a Todo app using React and Cloud Firestore (Firebase9 web SDK). Before we start building.',
    //   //         img: '',
    //   //         video: '',
    //   //       },
    //   //     },
    //   //   ],
    //   // })
    //   //   .then(() => {
    //   //     alert('User created');
    //   //   })
    //   //   .catch((err) => {
    //   //     alert(err.message);
    //   //   });

    //   // user && navigate('/feeds');
  };

  // HANDLE FORM FOR EXISTING USERS
  const logInHandler = async (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
  };

  //AUTHENTICATE USER

  //   import { doc, updateDoc } from "firebase/firestore";

  // const washingtonRef = doc(db, "cities", "DC");

  // // Set the "capital" field of the city 'DC'
  // await updateDoc(washingtonRef, {
  //   capital: true
  // });

  // useEffect(() => {
  //   const listen = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setAuthUser(user);
  //       console.log(user.uid);
  //     } else {
  //       setAuthUser(null);
  //        console.log('not signed in');

  //     }
  //   });
  // }, [authUser, setAuthUser]);

  // ADD USER

  return (
    <div className="overlay">
      {/* {loginError && <p className="error">The passwords do not match</p>} */}
      {loginError && (
        <div className="error-message">
          <p>Please check the form!</p>
          <ul>
            <li>Make Sure the first name and last name fields are not empty</li>
            <li>Make Sure the email field is not empty</li>
            <li>Make Sure the two password fields are not empty & matches</li>
          </ul>
        </div>
      )}

      <div className="sign-in">
        <div className="sign-in-hero">
          <p className="chatter">CHATTER</p>
          <p>
            Unleash the Power of Words, Connect with Like-minded Readers and
            Writers
          </p>
        </div>
        <div className="sign-in-form">
          <div className="sign-in-form-nav">
            <h4
              className={showRegister ? 'blue-border' : 'grey-border'}
              onClick={showRegisterForm}
            >
              REGISTER
            </h4>
            <NavLink
              to="/login"
              className={showLogin ? 'blue-border' : 'grey-border'}
            >
              LOGIN
            </NavLink>
          </div>
          <div className="sign-in-form-area">
            <h2>Register as a writer/reader</h2>

            <form onSubmit={logInHandler}>
              <div className="name-field">
                <label className="first-name-label">
                  First name
                  <input
                    name="firstname"
                    type="text"
                    onChange={(e) => {
                      setUserLogIn((prev) => ({
                        ...prev,
                        firstname: e.target.value,
                      }));
                    }}
                    value={userLogin.firstname}
                  />
                </label>
                <label>
                  Last name
                  <input
                    type="text"
                    onChange={(e) => {
                      setUserLogIn((prev) => ({
                        ...prev,
                        lastname: e.target.value,
                      }));
                    }}
                    value={userLogin.lastname}
                  />
                </label>
              </div>

              <label>
                You are joining as?
                <select
                  onChange={(e) => {
                    setUserLogIn((prev) => ({ ...prev, role: e.target.value }));
                  }}
                >
                  <option>Writer</option>
                  <option>Reader</option>
                </select>
              </label>
              <label>
                Email address
                <input
                  type="email"
                  onChange={(e) => {
                    setUserLogIn((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }));
                  }}
                  value={userLogin.email}
                />
              </label>
              <label>
                Password
                <input
                  type="password"
                  onChange={(e) => {
                    setUserLogIn((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }));
                  }}
                  value={userLogin.password}
                />
              </label>
              <label>
                Confirm password
                <input
                  type="password"
                  onChange={(e) => {
                    setUserLogIn((prev) => ({
                      ...prev,
                      confirmPassword: e.target.value.trim(),
                    }));
                  }}
                  value={userLogin.confirmPassword}
                />
              </label>
              <button className="account-btn" type="submit">
                Create account
              </button>
            </form>

            <button onClick={googleSignUpHandler} type="submit">
              Sign up with google
            </button>
            {/* <button>Sign up with LinkedIn</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
