import creatingAnApplication from '../../assets/images/project/creating_an_application.png';
import phoneBarcode from '../../assets/images/project/phone_barcode.png';
import tutorial from '../../assets/images/project/tutorial.png';
import vacation from '../../assets/images/project/vacation.png';
import webInterface from '../../assets/images/project/web_interface.png';

export const pickProjects = [
  {
    _id: 1,
    img: phoneBarcode,
    text: 'Система помогает при возникновении сбойных ситуаций в аэропортах, упрощая работу по предоставлению пассажирам напитков и питания при задержке самолета',
    development: 'ux/ui design, Frontend, backend',
    task: 'Сбойные ситуации и задержки рейсов',
    url: '/disruptiveSituations',
  },
  {
    _id: 2,
    img: creatingAnApplication,
    text: 'Система для подачи и выполнения заявок по обслуживанию воздушных судов. Мобильное приложение для исполнителей и веб-интерфейс для клиентов и диспетчеров',
    development: 'ux/ui design, Frontend, backend',
    task: 'Наземное обслуживание и ТКО',
    url: '/groundHandling',
  },
  {
    _id: 3,
    img: webInterface,
    text: 'Мобильное приложение и веб-интерфейс. Обеспечивает взаимодействие клиента с автоматизированными парковочными зонами',
    development: 'ux/ui design, Frontend, backend',
    task: 'Управление парковками аэропорта',
    url: '/parking',
  },
  {
    _id: 4,
    img: tutorial,
    text: 'Полноценная и удобная система, помогающая обучать сотрудников холдинга',
    development: 'ux/ui design, Frontend, backend',
    task: 'Авиационный учебный центр',
    url: '/aviationTrainingCenter',
  },
  {
    _id: 5,
    img: vacation,
    text: 'Система для автоматизации планирования отпусков и работы по ним. Веб-интерфейс для рядовых сотрудников, руководителей подразделения, ведущего кадровика и кадровиков',
    development: 'ux/ui design, Frontend, backend',
    task: 'Отпуска',
    url: '/vacation',
  },
];
