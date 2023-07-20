  import { lazy, Suspense } from 'react';
  import {
    BrowserRouter,
    Routes, 
    Route,
  } from 'react-router-dom' ;
import './App.css';
import { TransactionForm } from './Components/Forms/TransactionForm';

  const LoginPage = lazy(() => (import('./Components/LoginPage/Login')));
  const AdminPage = lazy(() => (import('./Components/AdminScreen/AdminScreen')));
  const UserDashboard = lazy(() => (import('./Components/UserScreen/UserDashboard')));
  const UserTransaction = lazy(() => (import('./Components/UserScreen/UserTransaction')));

function App() {
  return (
    <>
      <BrowserRouter >
        <Suspense >
          <Routes>
              <Route path='/' element={<LoginPage/>}></Route>
              <Route path='/dashboard/:id' element={<UserDashboard/>}></Route>
              <Route path='/admin' element={<AdminPage/>}></Route>
              <Route path='/transaction/:id' element={<UserTransaction/>}></Route>
              <Route path='/create-transaction' element={<TransactionForm/>}></Route> 
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
