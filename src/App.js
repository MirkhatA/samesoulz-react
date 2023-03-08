import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Authorization from './pages/Authorization';
import Login from './pages/Login';
import Registration from './pages/Registration';
import PickInterest from './pages/PickInterest';
import Error from './pages/Error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Authorization />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/registration' element={<Registration />}/>
        <Route path='/pickInterest' element={<PickInterest />}/>
        <Route path='*' element={<Error />}/>
      </Routes>
    </BrowserRouter>    
      
  );  
}

export default App;
