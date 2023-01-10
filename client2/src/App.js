import{BrowserRouter,Route,Routes} from 'react-router-dom'
import Dashboard from './component/home';
import Login from "./component/loginpage"
import Register from "./component/register";
import Course from './component/course'
import { PrivateRoute } from './privateroute';
import HTMLCourse from "./component/htmlcourse"
import CssCourse from "./component/csscourse"
import Assignment from './component/Assignment';

function App() {

  
 


  return (
    <>
    <BrowserRouter>

   <Routes>
    
   <Route path="/register" element={<Register/>}/>

<Route exact path="/home" element={ <PrivateRoute>
                                <Dashboard/>
                                </PrivateRoute>
                            
}/>
<Route path="/" element={<Login/>}/>
<Route path="/assignment" element={<Assignment/>}/>
<Route path="/csscourse" element={<CssCourse/>}/>
<Route path="/htmlcourse" element={<HTMLCourse/>}/>



   </Routes>

    </BrowserRouter>
   
    </>
  );
}

export default App;
