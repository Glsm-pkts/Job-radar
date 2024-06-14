import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const {isLoading, isError, flights} = useSelector((store)=>store.flight);
  
  return (
    <header>
      <div>
        <img width={100} src="/public/plane-logo.png" alt="" />
        <h2>Uçuş Radarı</h2>
      </div>
      <p>{
        isLoading 
        ? "Uçuşlar Hesaplanıyor..." 
        : isError 
        ? "üzgünüz hata oluştu" 
        : flights.length + "Uçuş Bulundu"
        } </p>
    </header>
  );
}

export default Header;
