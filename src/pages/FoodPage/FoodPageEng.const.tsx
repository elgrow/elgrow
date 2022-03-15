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

export const foodDataEng = [
  {
    id: 1,
    img: heating,
    imgMedium: delivery,
    imgMedium2: headerOrder,
    imgSmall: vacation,
    heading: 'Delivery of meals for employees',
    textBig:
      'Service for ordering food at the workplace. It consists of a mobile application (for employees of the company and couriers) and a web-interface (for the administrator and food providers)',
  },

  {
    id: 2,
    img: createRequest,
    imgMedium: subscribe,
    imgMedium2: dispatcherChanged,
    imgMedium3: dispatcherCanceled,
    title: 'User',
    textHard: 'You can use a mobile app to order food  to a chosen place',
    textMedium: 'The app navigation consists of:',
    textSmall: 'Orders',
    textSmall2: 'Food order',
    textSmall3: 'The documents',
    textSmall4: 'Feedback',
  },
  {
    id: 3,
    img: order,
    img2: orderEdit,
    img3: orderDelete,
    imgMedium: cancel,
    title: 'Orders',
    textMedium:
      'In this section you can view current and completed orders. You can delete it until the time specified by the food supplier or change the place of delivery.',
  },
  {
    id: 4,
    img: order2,
    img2: orderBasket,
    img3: orderBasketConfirm,
    title: 'Food order',
    textMedium:
      'You get a list of food providers and the remaining limit for the selected date and place of delivery,',
    textMedium2:
      'After choosing a supplier and a meal time the employee chooses offered dishes. He may add another meal if the amount of orders for the day allows.',
    textMedium3:
      'the order appears in the Orders section after confirmation. It is provided that the user could not order over the speed limit.',
  },

  {
    id: 5,
    img: agreement,
    img2: feedback,
    img3: feedbackLetter,
    title: 'The documents',
    textMedium:
      'Section with documents and advertisements sent by the administrator.',
  },
  {
    id: 6,
    title: 'Feedback',
    textMedium:
      'Section for sending messages and images to the Administrator. Need to indicate the subject of the order (for example, Caterer, Courier), if it is necessary clients can attach a photo and write a message.',
    textMedium2:
      'Also, it is possible to view messages from the administrator or food provider.',
  },
  {
    id: 7,
    img: courier,
    img2: courier2,
    title: 'Courier',
    textHard:
      'The courier can see orders ready for delivery through the mobile app.',
    textMedium:
      'The courier sees orders only to the delivery points assigned by the administrator.',
    textMedium2:
      'The courier sees food suppliers who have ready orders for delivery points. In the supplier profile the courier sees a separation of orders by their delivery points, it contains the full name, order number.',
    textMedium3:
      'After all orders from several suppliers are accepted for delivery, the courier delivers orders to each point, presses the delivery completion button, and users receive a notification that their order has been delivered.',
  },
  {
    id: 8,
    title: 'Administrator',
    textHard: 'Web version for administrator. Consists of the these sections:',
    textHard2: 'Orders',
    textMedium:
      'In this section there is a table with a list of orders, a field of search , and a filter. By clicking on the line, all information about the order becomes visible, including the name of the picker, courier, time of changing status. Can be uploaded to Excel.',
    textHard3: 'Places',
    textMedium2:
      'The section consists of three tables: location, place of delivery, food provider. Places could be added, edited, deleted, searched and filtered.',
    img: admin,
    img2: login,
    img3: orderTable,
    img4: filterList,
    img5: table,
    img6: couriersPurpose,
  },
  {
    id: 9,
    textHard: 'Couriers',
    textMedium:
      'It is the table with information on each courier’s working shift. The administrator appoints each courier for a specific date, time, place of delivery, deletes, adds new ones. Also, it can be exported  to Excel.',
    textHard2: 'Feedback',
    textMedium2:
      'Feedback is divided into three parts: from customers (employees), from food suppliers, and outgoing. The administrator can answer to employees or forward the information for a response to the food provider.',
    textMedium3:
      'It is possible to attach images and documents. All feedback can be viewed, there is a search and filter.',
    textHard3: 'The documents',
    textMedium4:
      'The Administrator uploads a document or image, marks the relevance, writes a title, and a short message. Also choose the period of the document and who is receiver',
    img: createAppeal,
    img2: addDocument,
    img3: checkboxes,
  },
  {
    id: 10,
    title: 'Administration',
    textHard: 'Web version for administrator. Consists of the these sections:',
    textHard2: 'Orders',
    textMedium:
      'In this section there is a table with a list of orders, a field of search , and a filter. By clicking on the line, all information about the order becomes visible, including the name of the picker, courier, time of changing status. Can be uploaded to Excel.',
    textHard3: 'Places',
    textMedium2:
      'The section consists of three tables: location, place of delivery, food provider. Places could be added, edited, deleted, searched and filtered.',
    img: foodSupplier,
    img2: editDish,
  },
  {
    id: 11,
    title: 'Food provider',
    textHard: 'Web version for order picking and administration',
    textHard2: 'Order picking',
    textHard3: 'Administration',
    textMedium:
      'Consists of cards of orders, divided by time and place of delivery.',
    textMedium2:
      'The assembler takes the order in work and marks his full name. Also he can see the full name of the customer, the number and time of the order, and dishes. After that the order has been assembled, the picker notes this on the order card. ',
    textMedium3:
      'It’s available to view orders for other dates to know  about the load in advance.',
    textMedium4:
      'In this section, the administrator fills in information about dishes (then price, weight, and calories), adds, edits and deletes them. In this way, the menu is filled for all dates of work with the time and the time of the possible cancellation of the order.',
    textMedium5:
      'The administrator adds assemblers, assigns dates and worktimes of them. He can edit and delete it.',
    textMedium6:
      'In the table of orders, he sees all information, as in the administrator app.',
    textMedium7: 'Documents and Feedback are similar with in a mobile service',
    img: menuTable,
    img2: foodSupplierFilter,
    img3: foodSupplierContext,
  },
  {
    id: 12,
    title: 'Flight delays and error condition',
    url: '/disruptiveSituations',
  },
];
