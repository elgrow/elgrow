import { cn } from '@bem-react/classname';

import { Header } from '../../components/Header/Header';
import { Offer } from '../../components/Offer/Offer';
import { Slogan } from '../../components/Slogan/Slogan';
import { Product } from '../../components/Product/Product';
import { Clients } from '../../components/Clients/Clients';
import { Projects } from '../../components/Projects/Projects';
import { Footer } from '../../components/Footer/Footer';
import { pickProjects } from '../../components/Projects/Projects.const';

import './MainPage.scss';

const cnMainPage = cn('MainPage');

export const MainPage = () => {
  window.scrollTo(0, 0);
  
  return (
    <div className={cnMainPage()}>
      <Header />
      <div className={cnMainPage('padding')}>
        {/* <Offer /> */}
        <Slogan />
        <Product />
        <Clients />
        <Projects data={pickProjects} />
      </div>
      <Footer />
    </div>
  );
};
