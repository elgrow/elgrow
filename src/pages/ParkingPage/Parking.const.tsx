import authorization from '../../assets/images/Parking/authorization.png';
import blocking from '../../assets/images/Parking/blocking.png';
import bookPlace from '../../assets/images/Parking/book_place.png';
import booking from '../../assets/images/Parking/booking.png';
import confirmation from '../../assets/images/Parking/confirmation.png';
import feedback from '../../assets/images/Parking/feedback.png';
import go from '../../assets/images/Parking/go.png';
import order from '../../assets/images/Parking/order.png';
import parkings from '../../assets/images/Parking/parkings.png';
import profile from '../../assets/images/Parking/profile.png';
import shuttle from '../../assets/images/Parking/shuttle.png';
import shuttle2 from '../../assets/images/Parking/shuttle2.png';
import time from '../../assets/images/Parking/time.png';
import user from '../../assets/images/Parking/user.png';

export const pickDataParking = [
  {
    id: 1,
    img: booking,
    imgMedium: bookPlace,
    imgMedium2: shuttle,
    heading: 'Управление парков&shyками аэропорта',
    textBig:
      'Сервис представляет собой мобильное приложение и веб-интерфейс. Обеспечивает взаимодействие клиента/сотрудника компании с автоматизированными парковочными зонами',
  },

  {
    id: 2,
    title: 'Пользователь',
    imgMedium: bookPlace,
    imgMedium2: parkings,
    imgMedium3: time,
    textHard: 'Доступен функционал бронирования парковочных мест и заказ шаттлов',
    ul: 'Навигация состоит из следующих кнопок-переходов:',
    li1: 'Парковки',
    li2: 'Шаттл',
    li3: 'Профиль',
    li4: 'Обратная связь',
    textHard2: 'Парковки',
    textMedium: 'Состоит из карточек-превью броней мест, кнопки «Бронировать».',
    textMedium2:
      'Каждая карточка позволяет смахиванием влево открыть на ней блок с возможностью удаления карточки и, соответственно, сброса времени бронирования.',
    textMedium3:
      'Кнопка «Бронировать» открывает всплывающее окно. После выбора дат показывается список из свободных парковочных мест. Предусмотрено, чтобы несколько пользователей одновременно не забронировали одно и то же место.',
    textMedium4:
      'Пользователь выбирает из списка своих автомобилей нужный и после бронирует парковочное место.',
  },

  {
    id: 3,
    imgMedium: shuttle2,
    imgMedium2: profile,
    imgMedium3: feedback,
    textHard: 'Шаттл',
    textHard2: 'Профиль',
    textHard3: 'Обратная связь',
    textSmall:
      'После ввода данных при нажатии «Заказать шаттл» начинается поиск подходящего шаттла. Как шаттл найден, показывается экран с его госномером.',
    textSmall2:
      'Раздел состоит из ФИО пользователя и списка карточек-превью с данными по авто. Смахиванием карточки влево происходит ее удаление и сброс времени бронирования с этим авто.',
    textSmall3:
      'Раздел отправки сообщений и изображений Администратору. Есть возможность создавать и просматривать сообщения, получать ответ от администратора',
  },

  {
    id: 4,
    title: 'Водитель шаттла',
    imgMedium: authorization,
    imgMedium2: confirmation,
    imgMedium3: go,
    imgMedium4: order,
    textHard: 'Доступен функционал отклика на заказы шаттла, обнуления списка пассажиров',
    textMedium:
      'Водителю показан маршрут на текущий день – парковка и обратно. Его назначает администратор.',
    textMedium2:
      'Видно активный заказ с количеством пассажиров (счетчик изменяется в реальном времени в зависимости от количества броней) и кнопку «Принять».',
    textMedium3:
      'После того как нажата эта кнопка, она заменяется на «Поехали», после нажатия которой появляется окно подтверждения действия. Это для исключения случайного нажатия на кнопку водителем до прибытия его на нужную парковку.',
    textMedium4: 'Кнопка меняется на «Готов к заказу», открывающую водителя к новым броням.',
  },

  {
    id: 5,
    img: user,
    imgMedium: blocking,
    title: 'Администратор',
    textHard: 'Веб-версия для администратора. Состоит из следующих разделов:',
    textHard2: 'Пользователи',
    textMedium:
      'В разделе таблица со списком пользователей, полем поиска. По клику на пользователя открывается всплывающее окно с его данными. Их можно редактировать. Есть возможность блокировки пользователя или его авто.',
    textMedium2:
      'Видно список обращений, каждое из которых открывает всплывающее окно, в котором можно дать ответ, внести изменения в парковку пользователя.',
    textHard3: 'Водители',
    textMedium3:
      'Раздел состоит из аналогичной пользователям таблицы. В ней администратор назначает водителя на линию.',
    textMedium4:
      'По клику на строку водителя, администратору доступна статистика его поездок за день, месяц, год. Кроме того, видно количество броней на каждую поездку с привязкой к пользователям.',
  },

  {
    id: 6,
    title: 'Авиационный учебный центр',
    url: '/aviationTrainingCenter',
  },
];
