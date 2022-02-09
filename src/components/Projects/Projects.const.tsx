import vouchers from '../../assets/images/project/vouchers.png';
import tko from '../../assets/images/project/tko.png';
import parking from '../../assets/images/project/parking.png';
import auz from '../../assets/images/project/auz.png';
import vacations from '../../assets/images/project/vacations.png';

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
];
