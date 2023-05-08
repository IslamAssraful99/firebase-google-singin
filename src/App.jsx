
import './App.css'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from './firebase/firebase.config'
import { useState } from 'react';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
function App() {
  const [user, setUser] = useState(null);

  const handleGoogleSingIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const loggedUser = result.user
        setUser(loggedUser)

      })
      .catch(error => {
        console.log(error)
      })

  }
  return (
    <>
      <div>
      </div>
      <h1>Timple + React</h1>
      <button onClick={handleGoogleSingIn}>Google Sing In</button>
      {user && <div className="card">
      <h3>Email: {user.displayName}</h3>
        <img src={user.photoURL} alt="" />
      </div>}

    </>
  )
}

export default App
