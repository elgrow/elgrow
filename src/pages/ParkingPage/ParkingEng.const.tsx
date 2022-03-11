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

export const pickDataParkingEng = [
  {
    id: 1,
    img: booking,
    imgMedium: bookPlace,
    imgMedium2: shuttle,
    heading: 'Airport Parking Management',
    textBig:
      'The service is a mobile app and a web interface. Provides interaction of the client/employee of the company with automated parking zones',
  },

  {
    id: 2,
    title: 'User',
    imgMedium: bookPlace,
    imgMedium2: parkings,
    imgMedium3: time,
    textHard: 'It is opportunity to book parking and order shuttles',
    ul: 'Navigation consists of the following navigation buttons:',
    li1: 'Parking',
    li2: 'Shuttle',
    li3: 'Profile',
    li4: 'Feedback',
    textHard2: 'Parking',
    textMedium:
      'It consists of preview cards of seat reservations, the "Book" button',
    textMedium2:
      'Each card allows you to swipe to the left to open a block on it with the ability to delete the card and, accordingly, reset the booking time.',
    textMedium3:
      'The "Book" button opens a pop-up window. Free parking places are shown after choosing dates. It is intended that multiple users do not book similar seats at one time.',
    textMedium4:
      'The user selects the desired car from the list of his cars and then reserves a parking place.',
  },

  {
    id: 3,
    imgMedium: shuttle2,
    imgMedium2: profile,
    imgMedium3: feedback,
    textHard: 'Shuttle',
    textHard2: 'Profile',
    textHard3: 'Feedback',
    textSmall:
      'After entering information, when you click "Order a shuttle", the search for a suitable shuttle begins. If the shuttle is found, a screen with its license plate is shown.',
    textSmall2: `The section consists of the user's full name and a list of preview cards with information about the car. If you want to delete it and reset the booking time with this car,
      you need to swipe the card to the left.`,
    textSmall3:
      'Section for sending messages and images to the Administrator. It is possible to create and view messages, receive a response from the administrator',
  },

  {
    id: 4,
    title: 'Shuttle driver',
    imgMedium: authorization,
    imgMedium2: confirmation,
    imgMedium3: go,
    imgMedium4: order,
    textHard:
      'It is available functionality to respond to shuttle orders, reset the list of passengers',
    textMedium:
      'The driver sees the route for the current day - parking and back. It is assigned by the administrator.',
    textMedium2:
      'It shows the active order with the number of passengers (the counter changes in real time depending on the number of bookings) and the "Accept" button.',
    textMedium3: `After this button is pressed, it is replaced by "Let's go", after clicking which a confirmation window appears. This is to prevent the driver from accidentally pressing the button before he arrives at the parking place.`,
    textMedium4:
      'The next time the button changes to "Ready to order", opening the driver to new reservations.',
  },

  {
    id: 5,
    img: user,
    imgMedium: blocking,
    title: 'Administrator',
    textHard:
      'Web version for administrator. Consists of the following sections:',
    textHard2: 'Users',
    textMedium:
      'In this section there is a table with a list of users, and a search field. Clicking on a user opens a pop-up window with their data. They can be edited. Also It is possible to block the user or his car.',
    textMedium2: `You can see a list of requests, each of which opens a pop-up window in which you can give an answer, make changes to the user's parking.`,
    textHard3: 'Drivers',
    textMedium3:
      'The section consists of a table similar to users. In it, the administrator assigns the driver to the line.',
    textMedium4: `By clicking on the driver's line, the administrator can access the statistics of his trips for the day, month, year. In addition, you can see the number of bookings for each trip with reference to users.`,
  },

  {
    id: 6,
    title: 'Aviation Training Center',
    url: '/aviationTrainingCenter',
  },
];
