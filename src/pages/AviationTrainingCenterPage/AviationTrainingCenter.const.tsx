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

export const pickDataAviation = [
  {
    id: 1,
    img: aviationHistory,
    heading: 'Авиа&shy;ционный учебный центр',
    textHard: 'Полноценная и удобная система, помогающая обучать сотрудников холдинга',
    textMedium:
      'С ее помощью проводится планирование, согласование и отслеживание обучения как каждого отдельного сотрудника, так и групп по подразделениям и компаниям.',
    textMedium2:
      'Каждая вкладка АУЦ содержит в себе фильтрации, удобные бизнесу, пагинацию и поиск по записям.',
  },

  {
    id: 2,
    titlePart: 'Составные части центра',
    img: jobProfile,
    avatars: {
      avatar1: avatar1,
      avatar2: avatar2,
      avatar3: avatar3,
      avatar4: avatar4,
    },
    title: '1. Профили обучения',
    textHard: 'Представляет из себя сущность, которая объединяет в себе людей по должностям',
    textMedium:
      'Сотрудник центра фильтрует людей по компаниям, подразделениям и затем должностям, чтобы прикрепить данный профиль к учебному курсу с целью, чтобы система знала, что эти люди должны быть обучены по тем или иным программам.',
  },

  {
    id: 3,
    img: editCourse,
    img2: courseReference,
    title: '2. Справочник курсов',
    textHard: 'Включает в себя программы периодической подготовки и первоначальной',
    textMedium:
      'У курса есть поля представленные на скриншоте, периодичность отвечает за время, через которое сотрудник должен пройти курс заново после окончания обучения. Если периодичность 0, то сотрудник проходит обучение лишь 1 раз.',
    textSmall:
      'Помимо информации и профилей обучения курс в себя также включает обработчиков – людей ответственных за обучение, как правило это сотрудники самого АУЦ.',
    icon: people,
  },

  {
    id: 4,
    img: candidateLog,
    img2: listCandidates,
    title: '3. Журнал кандидатов',
    textMedium:
      'Журнал кандидатов изначально представлен в виде таблицы курсов, но в отличии от курсов в столбцах информация, релевантная организации процесса обучения.',
    textMedium2:
      'При клике на курс мы попадаем в таблицу с кандидатами на обучение, в нее люди попадают как из профилей, так и из истории обучения.',
    imgMedium: trainingList,
    textHard: 'Кроме того, пользователей на курс можно добавить вручную, любого человека из базы',
    textMedium3:
      'Из истории люди попадают по принципу – за 2 месяца до окончания действия сертификата обучения, что представляет из себя сумму периодичности курса и его длительности.',
  },

  {
    id: 5,
    img: directoryTrainingCenters,
    title: '4. Справочник учебных центров',
    icon: information,
    textHard: 'Данная сущность носит чисто информационный характер',
    textMedium:
      'Представляет интерес только для пользователя, т.е. визуально разграничивает курсы и делит зоны ответственности.',
  },

  {
    id: 6,
    img: historyList,
    title: '5. История',
    textHard: 'Самая интересная сущность, поскольку с нее начинается импорт записей, которые заполняют список курсов и журнал кандидатов.',
    textMedium: 'История – это список всех записей об обучении всех сотрудников.',
    textMedium2: 'В последствии в историю записи попадают либо ручным способом, либо закрытием заявки, созданной в журнале кандидатов и закрытой в списке заявок.',
    imgMedium: addEntry,
    imgMedium2: editEntry,
    textMedium3: 'История – самая гибкая сущность поскольку записи в ней можно редактировать как угодно: изменять периодичность курса или стоимость обучения и тп. Это сделано на случай форс мажоров в процессе обучения и изменений в курсах.',
    textMedium4: 'Также присутствует функционал редактирования/добавления файлов сертификата каждой записи',
  },

  {
    id: 7,
    img: applicationsList,
    title: '6. Список заявок',
    textMedium: 'Список заявок также на первом экране представляет таблицу курсов, но с другими данными. Проваливаясь в каждый из курсов мы видим список заявок на обучение по выбранному',
    textHard: 'У заявки есть несколько стадий:',
    stage: [
      {
        icon: icon1,
        title: 'На согласовании ауц',
        text: 'должен согласовать заявку сотрудник ауц',
      },
      {
        icon: icon2,
        title: 'На согласовании руководителя',
        text: 'должен согласовать заявку сотрудник, выбранный в кач-ве руководителя на этапе создания заяки в журнале кандидатов',
      },
      {
        icon: icon3,
        title: 'Согласована',
        text: 'ожидает когда ее запустят в обучение',
      },
      {
        icon: icon4,
        title: 'В работе',
      },
      {
        icon: icon5,
        title: 'Завершена',
        text: 'на этой стадии люди из заявки попадают в историю, где людей можно быстро отфильтровать и заполнить сертификаты данным сотрудникам',
      },
    ],
    imgMedium: applicationTraining,
    textMedium2: 'Также можно поменять даты обучения заявки, после этого заявка приобретет первую стадию',
  },

  {
    id: 8,
    title: 'Отпуска',
    url: '/vacation',
  }
];
