import { useEffect } from 'react';

const Redirect = () => {
  useEffect(() => {
    localStorage.setItem('language', 'ru');
    window.location.replace('/ru');
  }, []);

  return null;
};

export default Redirect;
