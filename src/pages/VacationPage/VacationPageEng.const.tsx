import user from '../../assets/images/Vacation/user.png';
import applications from '../../assets/images/Vacation/applications.png';
import nextYear from '../../assets/images/Vacation/next_year.png';
import september from '../../assets/images/Vacation/september.png';
import unscheduled from '../../assets/images/Vacation/unscheduled.png';
import userVacation from '../../assets/images/Vacation/user_vacation.png';
import plan from '../../assets/images/Vacation/plan.png';
import planGoOver from '../../assets/images/Vacation/plan_go_over.png';
import planCheck from '../../assets/images/Vacation/plan_check.png';
import approve from '../../assets/images/Vacation/approve.png';
import nextYear2021 from '../../assets/images/Vacation/12_06_2021.png';
import applicationsBlackout from '../../assets/images/Vacation/applications_blackout.png';
import planning from '../../assets/images/Vacation/planning.png';
import hr from '../../assets/images/Vacation/hr.png';
import prohibition from '../../assets/images/Vacation/prohibition.png';
import reminder from '../../assets/images/Vacation/reminder.png';
import print from '../../assets/images/Vacation/print.png';

export const pickDataVacationEng = [
  {
    id: 1,
    heading: 'Holidays',
    img: user,
    textBig:
      'A system for automated planning of vacation and work. It is a web interface for staff, department heads, head HR and personnel officers',
  },

  {
    id: 2,
    img: userVacation,
    imgMedium: unscheduled,
    imgMedium2: september,
    imgMedium3: nextYear,
    title: 'Individual employee',
    textHard:
      'By default, the planned vacation schedule is displayed in the form of a calendar.',
    textMedium:
      'When you click on the "Plan/reschedule vacation", the system prompts you to fill the dates of start/end of the vacation,make a comment.',
    textMedium2: 'The type of holiday is automatically set to "paid".',
    textMedium3: `When you apply for next year's vacation, the system checks both a specific application and the entire package of applications as a whole for compliance with numerous rules`,
    textMedium4:
      'Only in the case when all these rules are right, the employee sends applications to the manager for approval.',
  },

  {
    id: 3,
    img: applications,
    imgMedium: print,
    imgMedium2: reminder,
    textHard: 'Request',
    textMedium:
      'Requests are presented in the form of a table by which you can search and set a filter. There are functions for editing, submitting new entries, and deleting',
    textMedium2: `When you hover over the status of a rejected request, you can see a manager's comment with the reason for the rejection.`,
    textHard2: 'Приказы на отпуск',
    textMedium3:
      'Сотрудник может видеть приказы на отпуск. В этой же вкладке он может ознакомиться с приказом, распечатать его для подписи',
    textHard3: 'Уведомления',
  },

  {
    id: 4,
    img: plan,
    imgMedium: planCheck,
    imgMedium2: planGoOver,
    title: 'Department head',
    textHard:
      'Here the vacation schedule of the manager and subordinates is displayed. There is a filter, search, export to Excel',
    textMedium:
      'The manager needs to enter a certain section to make a decision on the request of employees for vacation. It contains a list of all subordinate employees. Can be viewed as a calendar and as a table.',
    textMedium2:
      'Employee statuses are highlighted in color, which depends on the stage of vacation approval. Workers in the decree are allocated separately .',
    textMedium3: `The “Completed” field is calculated as the number of days in the next year's vacation request batch submitted by the employee divided by the employee's vacation rate`,
    img2: approve,
    imgMedium3: nextYear2021,
    textMedium4:
      'The manager can agree on a vacation package for all employees whose requests have passed all controls and have been approved. To do this, the button "Agree all".',
    textMedium5: `You can go to a detailed screen that will show all requests for an employee's planned holiday, and approve / reject requests individually, indicating the reason.`,
  },

  {
    id: 5,
    img: applicationsBlackout,
    imgMedium: planning,
    title: 'Leading HR',
    textHard: `Starts and ends next year's vacation planning campaign`,
    textMedium: `In the "Holidays" section, select the "Enable next year's vacation planning" mode, indicating the year. After that, everyone gets a notification about it. The section "Planning holidays for the next year" appears for all participants in the process (employees, managers, personnel officers).`,
    textMedium2:
      'After all vacations are approved, disables the vacation planning mode for the next year.',
  },

  {
    id: 6,
    img: hr,
    imgMedium: prohibition,
    title: 'Personnel officer',
    textHard: 'Coordinate vacation packages for employees',
    textMedium:
      'If employees’ requests passed all controls, he adds to the list of employees whose holidays should not overlap in the "Holidays/Holidays Intersection" section.',
    textMedium2:
      'Maintains a list of employees whose planned vacations are not subject to the rule "it is forbidden to take vacations of 5, 6, 12, 13 days starting on Monday."',
    textMedium3: 'Unloads agreed vacations in 1C ZUP that haven’t errors.',
  },

  {
    id: 7,
    title: 'Failure situations and flight delays',
    url: '/disruptiveSituations',
  },
];
