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

export const pickDataGroundHandlingEng = [
  {
    id: 1,
    img: heating,
    imgMedium: tasks,
    // heading: 'Наземное обслу&shy;живание и ТКО',
    heading: 'Ground handling and TCS',
    textBig:
      'A system for submitting and fulfilling requests for aircraft maintenance. Consists of a mobile application for contractors and a web interface for UTG customers and dispatchers',
  },

  {
    id: 2,
    img: createRequest,
    imgMedium: subscribe,
    imgMedium2: dispatcherChanged,
    imgMedium3: dispatcherCanceled,
    title: 'Customer',
    textHard:
      'Web application for the client to work with requests for services',
    textMedium:
      'Consists of a table with requests and their statuses, a search field,and a filter. Report download is available.',
    textMedium2: `It is possible to sign the request if the captain of the aircraft did not do so in the implementer's mobile app.`,
    textMedium3:
      'By clicking on the line, a pop-up window opens with information about the request, the time of status changes. It is possible to make modifications.',
    icon: menu,
    textSmall:
      'When you click on the "Create Request" button, a pop-up window opens with a choice of the type of service. After that, the transition to filling in the data necessary to perform the service',
  },

  {
    id: 3,
    img: history,
    img2: history2,
    imgMedium: cancel,
    title: 'Dispatcher',
    textHard: 'Web application for dispatchers',
    textMedium:
      'Almost everything is the same as for a client: a table with the requests, the ability to create a request, cancel it, make a search, etc. The difference is that it is possible to make changes to the service even after completion of work on it.',
    textMedium2:
      'In the application, the dispatcher pasess his work to another, if it is necessary to leave the workplace.',
  },

  {
    id: 4,
    title: 'Implementer',
    textHard:
      'Mobile application, which is being used during the execution of a task',
    textMedium:
      'The implementer logs in, after that he sees a window with a list of task preview cards and the "Create Request" button.',
    textMedium2:
      'There is a search: by request number, parking place, tail number, service name.',
    textMedium3:
      'When you click on the "Create Application", a window opens where you can choose a service from the list. After that, the necessary information  is filled in (airline, tail number, type of aircraft, parking place, additional information and other data necessary for each service).',
    textMedium4:
      'After that, the information is saved and the implementer proceeds to the execution.  ',
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
      'If the executor clicks a preview card, then a window opens with important information to complete the request. When you click on the "Accepted" button, the service starts',

    textMedium2:
      'The implementer enters the data required for the service (garage number of special equipment, weather).',
    textMedium3:
      'If there is a delay in the provision of services on the part of the client, then “Forced downtime” is pressed with a time fix.If the service can be started immediately, then the implementer clicks on "Start". The system records the time at which this action has performed.',
    textMedium4:
      'When the task is completed, click "Stop". The time is fixed, and there is a transition to the report, which shows all information from the client and the filled data from the contractor.',
  },

  {
    id: 6,
    img: started,
    img2: signature,
    textMedium: `The customer's representative reads the report and signs it. Request was completed. The performer goes to the list of tasks.`,
    textMedium2:
      'For some services (for example, aircraft de-icing), there are more steps to the report and there are cases when the work is performed by one or more employees.',
    textMedium3:
      'The implementer can refuse the service, enter the reason, and proceed to the list of tasks.',
  },

  {
    id: 7,
    title: 'Airport Parking Management',
    url: '/parking',
  },
];
