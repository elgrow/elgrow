import aviationHistory from '../../assets/images/AviationTrainingCenter/history.png';
import jobProfile from '../../assets/images/AviationTrainingCenter/job_profile.png';
import avatar2 from '../../assets/images/AviationTrainingCenter/avatar1.png';
import avatar3 from '../../assets/images/AviationTrainingCenter/avatar2.png';
import avatar1 from '../../assets/images/AviationTrainingCenter/avatar3.png';
import avatar4 from '../../assets/images/AviationTrainingCenter/avatar4.png';
import editCourse from '../../assets/images/AviationTrainingCenter/edit_course.png';
import people from '../../assets/images/AviationTrainingCenter/people.svg';
import candidateLog from '../../assets/images/AviationTrainingCenter/candidate_log.png';
import trainingList from '../../assets/images/AviationTrainingCenter/training_list.png';
import historyList from '../../assets/images/AviationTrainingCenter/history_list.png';
import directoryTrainingCenters from '../../assets/images/AviationTrainingCenter/directory_training_centers.png';
import information from '../../assets/images/AviationTrainingCenter/information.svg';
import editEntry from '../../assets/images/AviationTrainingCenter/edit_entry.png';
import addEntry from '../../assets/images/AviationTrainingCenter/add_entry.png';
import applicationTraining from '../../assets/images/AviationTrainingCenter/application_training.png';
import applicationsList from '../../assets/images/AviationTrainingCenter/applications_list.png';
import icon1 from '../../assets/images/AviationTrainingCenter/icon1.svg';
import icon2 from '../../assets/images/AviationTrainingCenter/icon2.svg';
import icon3 from '../../assets/images/AviationTrainingCenter/icon3.svg';
import icon4 from '../../assets/images/AviationTrainingCenter/icon4.svg';
import icon5 from '../../assets/images/AviationTrainingCenter/icon5.svg';
import courseReference from '../../assets/images/AviationTrainingCenter/course_reference.png';
import listCandidates from '../../assets/images/AviationTrainingCenter/list_candidates.png';

export const pickDataAviationEng = [
  {
    id: 1,
    img: aviationHistory,
    heading: 'Aviation Training Center',
    textHard: `A complete educational system for training the holding's employees`,
    textMedium:
      'This platform allows a company to plan, approve and track education of individual employees or groups by departments at the same time',
    textMedium2:
      'Each tab contains filtering, pagination and search by records for business optimization',
  },

  {
    id: 2,
    titlePart: 'Component parts of the center',
    img: jobProfile,
    avatars: {
      avatar1: avatar1,
      avatar2: avatar2,
      avatar3: avatar3,
      avatar4: avatar4,
    },
    title: '1. Specializations',
    textHard: 'This part integrates employees by position in the groups',
    textMedium:
      'The company’s employee filters people by companies, divisions and positions. He further attaches profiles to the certain course so that the system knows that these people should be learning these programs.',
  },

  {
    id: 3,
    img: editCourse,
    img2: courseReference,
    title: '2. Courses guide',
    textHard: 'Includes initial and periodic studying programs',
    textMedium:
      'The courses guide is divided into the fields are showed in the screenshot: for example, “the frequency” show us the time after which the employee must go to course again. If the frequency is 0, then the employee is trained only once',
    textSmall:
      'Moreover, the courses also include processors - people responsible for training, as a rule, these are employees of the ATC',
    icon: people,
  },

  {
    id: 4,
    img: candidateLog,
    img2: listCandidates,
    title: '3. Journal of candidates',
    textMedium:
      'The journal of candidates is presented in the form of a table of courses with information relevant to the organization of the studying process.',
    textMedium2:
      'When you click on a course you get into a table with candidates for training. It is possible from profiles and from the history of training.',
    imgMedium: trainingList,
    textHard:
      'In addition, you can add any person from base to the course manually',
    textMedium3:
      'From history people get on the course automatically in 2 months before the end of the education certificate.',
  },

  {
    id: 5,
    img: directoryTrainingCenters,
    title: '4. Guide of training centers',
    icon: information,
    textHard: 'This section is purely informational.',
    textMedium:
      'It’s useful for the user because it visually divides courses and areas of responsibility.',
  },

  {
    id: 6,
    img: historyList,
    title: '5. History',
    textHard: 'History is a list of all training processes of employees.',
    textMedium:
      'In this chapter the import of notes begins which fill in the list of courses and the journal of candidates.',
    textMedium2:
      'Subsequently, there is a function to fill history manually or by closing the application created in the journal of candidates and closed list of applications.',
    imgMedium: addEntry,
    imgMedium2: editEntry,
    textMedium3:
      'In the "History" section, you can change the frequency of the course or the cost of training, etc. This was done in case of force majeure circumstances in the process. ',
    textMedium4:
      'There is also the functionality of editing / adding certificate files for each employee',
  },

  {
    id: 7,
    img: applicationsList,
    title: '6. List of applications',
    textMedium:
      'The list of applications presents a table of courses but has different information. Going to each of the courses, we see a list of request for training',
    textHard: 'The application has several stages:',
    stage: [
      {
        icon: icon1,
        title: 'On agreement',
        text: 'An employee of the ATC must approve the request',
      },
      {
        icon: icon2,
        title: 'On agreement of the manager',
        text: 'The employee chosen as the manager at the stage of creating the application in the journal of candidates must approve the application',
      },
      {
        icon: icon3,
        title: 'Agreed',
        text: 'Waiting to be put into training',
      },
      {
        icon: icon4,
        title: 'In work',
      },
      {
        icon: icon5,
        title: 'In work',
        text: 'At this stage people from the application enter to the history, where you can filter people and filled out certificates for these employees',
      },
    ],
    imgMedium: applicationTraining,
    textMedium2:
      'You can also change the training dates for the application, after which the application will acquire the first stage',
  },

  {
    id: 8,
    title: 'Holidays',
    url: '/vacation',
  },
];
