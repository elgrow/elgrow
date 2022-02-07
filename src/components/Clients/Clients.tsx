import { cn } from '@bem-react/classname';

import ClientSlider from './ClientSlider';

import asos from '../../assets/images/asos_color.png';
import vtb from '../../assets/images/vtb_color.png';
import kfc from '../../assets/images/kfc_color.png';
import open from '../../assets/images/open_color.png';
import megafon from '../../assets/images/megafon_color.png';
import telecom from '../../assets/images/telecom_color.png';

import './Clients.scss';

export const Clients = () => {
  const cnClients = cn('Clients');

  const clientsLogoPath = [open, kfc, vtb, asos, megafon, telecom];

  return (
    <section id="clients" className={cnClients()}>
      <h2 className={cnClients('title')}>Клиенты</h2>
      <div className={cnClients('container')}>
        <ClientSlider />
      </div>
      <div className={cnClients('container320')}>
        {clientsLogoPath.map((card, index) => (
          <div className={cnClients('container-card')} key={index}>
            <img src={card} alt="client" />
          </div>
        ))}
      </div>
    </section>
  );
};
