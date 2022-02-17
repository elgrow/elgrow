import vouchers from '../../assets/images/project/vouchers.png';
import tko from '../../assets/images/project/tko.png';
import parking from '../../assets/images/project/parking.png';
import auz from '../../assets/images/project/auz.png';
import vacations from '../../assets/images/project/vacations.png';
import food from '../../assets/images/project/food.png';
import MRO from '../../assets/images/project/MRO.png';

export const pickProjects = [
  {
    _id: 1,
    img: vouchers,
    text: 'Система помогает при возникновении сбойных ситуаций в аэропортах',
    development: 'ux/ui design, frontend, backend',
    task: 'Сбойные ситуации и задержки рейсов',
    url: '/disruptiveSituations',
  },
  {
    _id: 2,
    img: tko,
    text: 'Система для подачи и выполнения заявок по обслуживанию воздушных судов',
    development: 'ux/ui design, frontend, backend',
    task: 'Наземное обслуживание и ТКО',
    url: '/groundHandling',
  },
  {
    _id: 3,
    img: parking,
    text: 'Система для взаимодействия клиента с автоматизированными парковочными зонами',
    development: 'ux/ui design, frontend, backend',
    task: 'Управление парковками аэропорта',
    url: '/parking',
  },
  {
    _id: 4,
    img: auz,
    text: 'Полноценная и удобная система, помогающая обучать сотрудников холдинга',
    development: 'ux/ui design, frontend, backend',
    task: 'Авиационный учебный центр',
    url: '/aviationTrainingCenter',
  },
  {
    _id: 5,
    img: vacations,
    text: 'Система для автоматизации планирования отпусков и работы по ним',
    development: 'ux/ui design, frontend, backend',
    task: 'Отпуска',
    url: '/vacation',
  },
  {
    _id: 6,
    img: food,
    text: 'Сервис для заказа еды на рабочее место',
    development: 'ux/ui design, frontend, backend',
    task: 'Доставка питания сотрудникам',
    url: '/food',
  },
  {
    _id: 7,
    img: MRO,
    text: 'Веб-приложение для работы со всей информацией и документами по персоналу',
    development: 'ux/ui design, frontend, backend',
    task: 'Учет персонала',
    url: '/MRO',
  },
];
