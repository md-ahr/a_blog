import PropTypes from 'prop-types';
import React from 'react';
import Footer from './Footer';
import Header from './Header';

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className='bg-slate-50'>
        <div className='mx-auto px-2 sm:px-6 lg:px-8 max-w-[1400px]'>
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
