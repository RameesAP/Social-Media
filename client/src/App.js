
import "./App.css"
import Home from "./pages/home/Home"
// import Profile from "./pages/Profile/Profile";
import Auth from './pages/Auth/Auth'
import Profile from "./pages/Profile/Profile"

import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Chat from "./pages/Chat/Chat";



function App() {
  const user = useSelector((state) => state.authReducer.authData)
  return (

    <div className="App">
      <div className="blur" style={{ top: '-18%', right: '0' }}></div>
      <div className="blur" style={{ top: '36%', left: '-8rem' }}></div>

      <Routes>
        <Route path="/"
          element={user ? <Navigate to="Home" /> : <Navigate to='Auth' />} />

        <Route path="/Home"
          element={user ? <Home /> : <Navigate to='../Auth' />} />

        <Route path="/Auth"
          element={user ? <Navigate to='../Home' /> : <Auth />} />

        <Route path="/profile/:id"
          element={user ? <Profile /> : <Navigate to="../auth" />} />
        <Route path="/chat"
          element ={user ?<Chat /> :<Navigate to="../auth"/>}/>
      </Routes>

      {/* <Home /> */}
      {/* <Profile /> */}

    </div>
  );
}

export default App;
