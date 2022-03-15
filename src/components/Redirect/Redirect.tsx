import { useEffect } from 'react';


const Redirect = () => {
  useEffect(() => {
    localStorage.setItem('language', 'en');
    window.location.replace('/en');
  }, []);

  return null;
};

export default Redirect;
