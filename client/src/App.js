import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { UserProvider } from './contexts/userContext';
import Main from './views/Main';
// import Login from './views/Login';
// import Register from './views/Register';
import Create from './views/Create';
import Detail from './views/Detail';
import User from './views/User';


function App() {
  return (
    <div className="container text-center">
      <UserProvider>
        <Router>
          <Routes>
            <Route path='/myprofile' element={<Main/>}/>
            <Route path='/' element={<User/>}/>
            <Route path='/pirates/new' element={<Create/>} />
            <Route exact path='/pirates/:id' element={<Detail/>} />
          </Routes>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
