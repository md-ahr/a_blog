import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Layout from './components/Layout';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import useAuthCheck from './hooks/useAuthCheck';
import NotFound from './pages/NotFound';

function App() {
  const authChecked = useAuthCheck();

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Blog />} />
          <Route path='/blog/:id' element={<BlogDetails />} />
          <Route path='/contact' element={<Contact />} />
          {!authChecked ? (
            <>
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </>
          ) : (
            <>
              <Route path='/login' element={<Navigate to='/' replace />} />
              <Route path='/register' element={<Navigate to='/' replace />} />
            </>
          )}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
