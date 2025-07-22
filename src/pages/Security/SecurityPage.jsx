import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import OrganigramaSecurity from '../../components/ComponentSecurity/OrganigramaSecurity';

const SecurityPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      <main className="flex-grow">
        <OrganigramaSecurity />
      </main>
      
      <Footer />
    </div>
  );
};

export default SecurityPage;