import React from 'react';
import './styles/ConceptApp.scss';

function ConceptApp() {
  return (
    <div className="conceptApp">
      <header className="header">
          <h1 className="titles">Javascript Essential concepts</h1>
          <h6 className="titles">By Cesar Quintero Arias</h6>
      </header>
      <div className="meanings"></div>
    </div>
  );
}

export default ConceptApp;
