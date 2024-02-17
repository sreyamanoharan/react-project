import React from 'react'
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import UserLogin from './Components/UserLogin';
import Register from './Components/Register';


const App = () => {
  return (
  <Router>
    <Routes>
    <Route path='/userLogin' Component={UserLogin}/>
    <Route path='/register' Component={Register}/>
    </Routes>
  
  </Router>
  )
}

export default App
