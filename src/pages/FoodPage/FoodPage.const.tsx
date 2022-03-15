import cancel from '../../assets/images/Food/cancel.png';
import createRequest from '../../assets/images/Food/create_request.png';
import dispatcherCanceled from '../../assets/images/Food/dispatcher_canceled.png';
import dispatcherChanged from '../../assets/images/Food/dispatcher_changed.png';
import heating from '../../assets/images/Food/heating.png';
import signature from '../../assets/images/Food/signature.png';
import started from '../../assets/images/Food/started.png';
import subscribe from '../../assets/images/Food/subscribe.png';
import delivery from '../../assets/images/Food/Delivery.png';
import order from '../../assets/images/Food/order1.png';
import orderEdit from '../../assets/images/Food/orderEdit.png';
import orderDelete from '../../assets/images/Food/orderDelete.png';
import headerOrder from '../../assets/images/Food/headerOrder.png';
import vacation from '../../assets/images/Food/vacation.png';
import order2 from '../../assets/images/Food/order2.png';
import orderBasket from '../../assets/images/Food/orderBasket.png';
import orderBasketConfirm from '../../assets/images/Food/orderBasketConfirm.png';
import agreement from '../../assets/images/Food/agreement.png';
import feedback from '../../assets/images/Food/feedback.png';
import feedbackLetter from '../../assets/images/Food/feedbackLetter.png';
import courier from '../../assets/images/Food/courier.png';
import courier2 from '../../assets/images/Food/courier2.png';
import admin from '../../assets/images/Food/admin.png';
import login from '../../assets/images/Food/login.png';
import orderTable from '../../assets/images/Food/orderTable.png';
import filterList from '../../assets/images/Food/filterList.png';
import table from '../../assets/images/Food/table.png';
import couriersPurpose from '../../assets/images/Food/couriersPurpose.png';
import createAppeal from '../../assets/images/Food/createAppeal.png';
import addDocument from '../../assets/images/Food/addDocument.png';
import checkboxes from '../../assets/images/Food/checkboxes.png';
import foodSupplier from '../../assets/images/Food/foodSupplier.png';
import editDish from '../../assets/images/Food/editDish.png';
import menuTable from '../../assets/images/Food/menuTable.png';
import foodSupplierFilter from '../../assets/images/Food/foodSupplierFilter.png';
import foodSupplierContext from '../../assets/images/Food/foodSupplierContext.png';

export const foodData = [
  {
    id: 1,
    img: heating,
    imgMedium: delivery,
    imgMedium2: headerOrder,
    imgSmall: vacation,
    heading: 'Доставка питания сотрудникам',
    textBig:
      'Сервис для заказа еды на рабочее место. Состоит из мобильного приложения (для сотрудников организации и курьеров) и веб интерфейса (для администратора и поставщиков питания)',
  },

  {
    id: 2,
    img: createRequest,
    imgMedium: subscribe,
    imgMedium2: dispatcherChanged,
    imgMedium3: dispatcherCanceled,
    title: 'Пользователь',
    textHard:
      'С помощью мобильного приложения делается заказ еды на выбранное место  ',
    textMedium: 'Навигация приложения состоит из кнопок переходов.',
    textSmall: 'Заказы',
    textSmall2: 'Заказ еды',
    textSmall3: 'Документы',
    textSmall4: 'Обратная связь',
  },
  {
    id: 3,
    img: order,
    img2: orderEdit,
    img3: orderDelete,
    imgMedium: cancel,
    title: 'Заказы',
    textMedium:
      'В разделе доступен просмотр текущих и завершенных заказов. До заданного поставщиком питания времени заказ можно удалить или поменять в нем место доставки.',
  },
  {
    id: 4,
    img: order2,
    img2: orderBasket,
    img3: orderBasketConfirm,
    title: 'Заказ еды',
    textMedium:
      'По выбранной дате и месту доставки выдается список поставщиков питания и остаток лимита на день',
    textMedium2:
      'После выбора поставщика и времени приема пищи сотрудник выбирает из предложенных блюд. Он может добавить другой прием пищи, если позволяет сумма заказов на день',
    textMedium3:
      ' После подтверждения заказ появляется в разделе Заказы. Предусмотрено, чтобы пользователь не мог заказать на сумму, большую лимита.',
  },

  {
    id: 5,
    img: agreement,
    img2: feedback,
    img3: feedbackLetter,
    title: 'Документы',
    textMedium:
      'Раздел с документами и рекламой, отправленными администратором.',
  },
  {
    id: 6,
    title: 'Обратная связь',
    textMedium:
      'Раздел отправки сообщений и изображений администратору. Указывается тема заказа (например, поставщик питания, курьер), при необходимости указывается заказ, по которому создается обращение, прикрепляется фото, пишется сообщение.',
    textMedium2:
      ' Есть возможность просматривать сообщения, получать ответ от администратора или поставщика питания.',
  },
  {
    id: 7,
    img: courier,
    img2: courier2,
    title: 'Курьер',
    textHard:
      'Через мобильное приложение курьеру видны готовые для доставки заказы',
    textMedium:
      'Курьер видит заказы только до тех мест доставки, которые ему назначил администратор.',
    textMedium2:
      'Курьер видит поставщиков питания, у которых есть готовые заказы по точкам доставки. В карточке поставщика курьер видит разбивку заказов по своим точкам доставки, в каждой указаны ФИО, номер заказа.',
    textMedium3:
      'После того, как все заказы от нескольких поставщиков приняты в доставку, курьер доставляет заказы в каждую точку, нажимает кнопку завершения доставки и пользователям приходит оповещение, что их заказ доставлен. ',
  },
  {
    id: 8,
    title: 'Администратор',
    textHard: 'Веб-версия для администратора. Состоит из следующих разделов:',
    textHard2: 'Заказы',
    textMedium:
      'В разделе таблица со списком заказов, полем поиска, фильтром. По клику на строку становятся видны все данные по заказу, включая ФИО сборщика, курьера, время смены статусов. Можно выгружать в Excel.',
    textHard3: 'Места',
    textMedium2:
      'Раздел состоит из трех таблиц: локация, место доставки, поставщик питания. Места можно добавлять, редактировать, удалять, осуществлять по ним поиск и фильтровать.',
    img: admin,
    img2: login,
    img3: orderTable,
    img4: filterList,
    img5: table,
    img6: couriersPurpose,
  },
  {
    id: 9,
    textHard: 'Курьеры',
    textMedium:
      'Раздел состоит из таблицы с данными по каждой рабочей смене курьера. Администратор назначает каждого курьера на определенную дату, время, точки доставки, удаляет, добавляет новых. Может выгружать данные в Excel.',
    textHard2: 'Обратная связь',
    textMedium2:
      'Вся обратная связь разделена на три части: от клиентов (сотрудников), от поставщиков питания, исходящие. Администратор может сам ответить сотрудникам или переслать информацию для ответа поставщику питания.',
    textMedium3:
      'Предусмотрена возможность прикреплять к ответу изображения, документы. Все обратную связь можно просматривать, есть поиск и фильтр.',
    textHard3: 'Документы',
    textMedium4:
      'Администратор отправляет документы. Для этого он загружает документ или изображение, выбирает его важность, пишет название, короткое сообщение. Выбирает период действия документа, кому отправлять.',
    img: createAppeal,
    img2: addDocument,
    img3: checkboxes,
  },
  {
    id: 10,
    title: 'Администратор',
    textHard: 'Веб-версия для администратора. Состоит из следующих разделов:',
    textHard2: 'Заказы',
    textMedium:
      'В разделе таблица со списком заказов, полем поиска, фильтром. По клику на строку становятся видны все данные по заказу, включая ФИО сборщика, курьера, время смены статусов. Можно выгружать в Excel.',
    textHard3: 'Места',
    textMedium2:
      'Раздел состоит из трех таблиц: локация, место доставки, поставщик питания. Места можно добавлять, редактировать, удалять, осуществлять по ним поиск и фильтровать.',
    img: foodSupplier,
    img2: editDish,
  },
  {
    id: 11,
    title: 'Поставщик питания',
    textHard: 'Веб-версия для сборки заказов и администрирования',
    textHard2: 'Сборка заказов',
    textHard3: 'Администрирование',
    textMedium:
      'Состоит из карточек заказов, разделенных по времени и местам доставки.',
    textMedium2:
      'Сборщик выделяет не взятый в работу заказ, выбирает свое ФИО, принимает заказ в работу. Ему видны ФИО заказчика, номер и время заказа, выбранные блюда. После того, как заказ собран, сборщик отмечает это в карточке заказа. Сразу обновляется счетчик заказов для передачи их курьеру.',
    textMedium3:
      'Можно просмотреть заказы на другие даты, чтобы предварительно знать о нагрузке на сборщиков.',
    textMedium4:
      'В этом разделе администратор заполняет данными по блюдам, добавляет, редактирует и удаляет их. При добавлении вводит данные по стоимости, весу, калорийности. Заполняет меню на все даты работы, выставляя время действия меню, время возможной отмены заказа.',
    textMedium5:
      'Администратор добавляет сборщиков, назначает им даты и время работ. Ему доступно редактирование и удаление данных',
    textMedium6:
      'В таблице заказов видит все данные, как в приложении администратора.',
    textMedium7:
      'Документы и Обратная связь как у сотрудников в мобильном приложении.',
    img: menuTable,
    img2: foodSupplierFilter,
    img3: foodSupplierContext,
  },
  {
    id: 12,
    title: 'Сбойные ситуации и задержки рейсов',
    url: '/disruptiveSituations',
  },
];
