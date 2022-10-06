import PropTypes from 'prop-types';
import React from 'react';
import Footer from './Footer';
import Header from './Header';

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>{children}</main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
