import React from 'react';
import ConceptGrid from './components/ConceptGrid';
import './styles/ConceptApp.scss';

function ConceptApp() {
  return (
    <div className="conceptApp">
      <header className="header">
          <h1 className="titles">Javascript Essential concepts</h1>
          <h6 className="titles">By Cesar Quintero Arias</h6>
      </header>
      <div className="meanings">
          <ConceptGrid isMain={true}></ConceptGrid>
      </div>
    </div>
  );
}

export default ConceptApp;
