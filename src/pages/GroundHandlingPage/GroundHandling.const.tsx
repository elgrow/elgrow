import atWork from '../../assets/images/GroundHandling/at_work.png';
import cancel from '../../assets/images/GroundHandling/cancel.png';
import createRequest from '../../assets/images/GroundHandling/create_request.png';
import create from '../../assets/images/GroundHandling/create.png';
import dispatcherCanceled from '../../assets/images/GroundHandling/dispatcher_canceled.png';
import dispatcherChanged from '../../assets/images/GroundHandling/dispatcher_changed.png';
import heating from '../../assets/images/GroundHandling/heating.png';
import history from '../../assets/images/GroundHandling/history.png';
import history2 from '../../assets/images/GroundHandling/history2.png';
import power from '../../assets/images/GroundHandling/power.png';
import processing from '../../assets/images/GroundHandling/processing.png';
import signature from '../../assets/images/GroundHandling/signature.png';
import started from '../../assets/images/GroundHandling/started.png';
import subscribe from '../../assets/images/GroundHandling/subscribe.png';
import tasks from '../../assets/images/GroundHandling/tasks.png';
import VQBIG from '../../assets/images/GroundHandling/VQ_BIG.png';
import menu from '../../assets/images/GroundHandling/menu.svg';

export const pickDataGroundHandling = [
  {
    id: 1,
    img: heating,
    imgMedium: tasks,
    heading: 'Наземное обслу&shy;живание и ТКО',
    textBig:
      'Система для подачи и выполнения заявок по обслуживанию воздушных судов. Состоит из мобильного приложения для исполнителей и веб-интерфейса для клиентов и диспетчеров UTG',
  },

  {
    id: 2,
    img: createRequest,
    imgMedium: subscribe,
    imgMedium2: dispatcherChanged,
    imgMedium3: dispatcherCanceled,
    title: 'Клиент',
    textHard: 'Веб-приложение для работы клиента с заявками на услуги',
    textMedium:
      'Состоит из таблицы с заявками и их статусами, полем поиска, фильтром. Доступна выгрузка отчета.',
    textMedium2:
      'Есть возможность подписать заявку, если этого не сделал капитан воздушного судна в мобильном приложении исполнителя.',
    textMedium3:
      'По клику на строку открывается всплывающее окно с информацией по заявке, временем изменений статусов. Возможно внести изменения.',
    icon: menu,
    textSmall:
      'При нажатии на кнопку «Создать заявку» открывается всплывающее окно с выбором вида услуги. После этого переход к заполнению данных, необходимых для выполнения услуги',
  },

  {
    id: 3,
    img: history,
    img2: history2,
    imgMedium: cancel,
    title: 'Диспетчер',
    textHard: 'Веб-приложениедля диспетчеров',
    textMedium:
      'Практически все, как для клиента: таблица с заявками, возможностью создать заявку, отменить ее, сделать поиск и т. д. Отличие в том, что есть возможность вносить правки в выполнение услуги и после завершения работы по ней.',
    textMedium2:
      'В приложении диспетчер передает свои услуги другому, если необходимо отлучиться с рабочего места.',
  },

  {
    id: 4,
    title: 'Исполнитель',
    textHard: 'Мобильное приложение, работа с которым идет во время выполнения задачи',
    textMedium:
      'Исполнитель авторизуется, после этого видит окно со списком из карточек-превью задач и кнопкой «Создать заявку».',
    textMedium2: 'Есть поиск: по номеру заявки, месту стоянки, бортовому номеру, названию услуги.',
    textMedium3:
      'При нажатии на кнопку «Создать заявку» открывается окно, где выбирается услуга из списка. После этого заполняются необходимые данные (авиакомпания, бортовой номер, тип ВС, место стоянки, дополнительная информация и другие необходимые для каждой услуги данные).',
    textMedium4: 'После заполнения сохраняется информация и исполнитель приступает к выполнению.',
  },

  {
    id: 5,
    imgMedium: tasks,
    imgMedium2: create,
    imgMedium3: processing,
    imgMedium4: atWork,
    imgMedium5: VQBIG,
    imgMedium6: power,
    textMedium:
      'Если исполнитель выбрал карточку-превью, то открывается окно с данными, необходимыми для выполнения заявки. При нажатии на кнопку «Принял» начинается выполнение услуги.',

    textMedium2:
      'Исполнитель вводит требуемые для услуги данные (гаражный номер спецтехники, погоду).',
    textMedium3:
      'Если задержка по оказанию услуги со стороны клиента, то отжимается «Вынужденный простой» с фиксацией времени. Если услугу можно начинать сразу, то исполнитель нажимает на «Начало работы». В системе фиксируется время, во сколько было совершено это действие.',
    textMedium4:
      'При завершении выполнения задачи нажимается «Стоп». Фиксируется время, и идет переход к отчету, где показываются все данные от клиента и заполненные данные от исполнителя.',
  },

  {
    id: 6,
    img: started,
    img2: signature,
    textMedium:
      'Представитель заказчика знакомится с отчетом и ставит подпись. Заявка завершена. Исполнитель переходит к списку задач.',
    textMedium2:
      'Для части услуг (например противообледенительной обработки воздушного судна) больше шагов до отчета и предусмотрены случаи, когда работу выполняет один или несколько сотрудников.',
    textMedium3:
      'Исполнитель может выбрать отказ от услуги, вводит причину отказа и переходит к списку задач.',
  },

  {
    id: 7,
    title: 'Управление парковками аэропорта',
    url: '/parking',
  },
];
