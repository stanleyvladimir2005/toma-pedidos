import {
  BrowserRouter as Router, Routes,  Route,Navigate} from 'react-router-dom'
import Login from './pages/login'

function MainRouter() {
    return (
      <Router>
        <Routes>
        <Route path="*" element={<Navigate to ="/login" />}/>
          <Route exact path='/login' element={<Login />} />

        </Routes>
      </Router>
    )
  }

  export default MainRouter