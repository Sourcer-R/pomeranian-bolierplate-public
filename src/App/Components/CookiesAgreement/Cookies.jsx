import React from 'react';
import './style.css';

const Cookies = () => {
  const handleAgreement = () => {};
  const handleAgreementCustomization = () => {};
  return (
    <div>
      <p>
        Pozwól na pliki cookies Nasza strona korzysta z ciasteczek, które
        umożliwiają poprawne działanie strony i pomagają nam świadczyć usługi na
        najwyższym poziomie. Możesz zaakceptować wykorzystanie przez nas
        wszystkich tych plików i przejść do strony lub dostosować użycie do
        swoich referencji. W tym celu kliknij przycisk po prawej stronie
        “dopasuj zgody”, aby następnie wybrać te które odpowiadają Twoim
        indywidualnym preferencjom.
      </p>
      <button onClick={handleAgreement}>w porządku</button>
      <button onClick={handleAgreementCustomization}>Dopasuj zgody</button>
    </div>
  );
};

export default Cookies;