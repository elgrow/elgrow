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

export const pickDataVacation = [
  {
    id: 1,
    heading: 'Отпуска',
    img: user,
    textBig:
      'Система для автоматизации планирования отпусков и работы по ним. Представляет из себя веб-интерфейс для рядовых сотрудников, руководителей подразделения, ведущего кадровика и кадровиков',
  },

  {
    id: 2,
    img: userVacation,
    imgMedium: unscheduled,
    imgMedium2: september,
    imgMedium3: nextYear,
    title: 'Рядовой сотрудник',
    textHard: 'По умолчанию отображается график плановых отпусков в виде календаря',
    textMedium:
      'При нажатии на кнопку «Спланировать/перенести отпуск» система предлагает ввести дату начала, дату окончания отпуска, указать комментарий.',
    textMedium2: 'Тип отпуска автоматически устанавливается как «оплачиваемый».',
    textMedium3:
      'При оформлении заявки на отпуск следующего года система проверяет как конкретную заявку, так и весь пакет заявок в целом на соответствие многочисленным правилам.',
    textMedium4:
      'Только в случае, когда все эти правила выполнены, сотрудник отправляет заявки руководителю на согласование.',
  },

  {
    id: 3,
    img: applications,
    imgMedium: print,
    imgMedium2: reminder,
    textHard: 'Заявки',
    textMedium:
      'Заявки представлены в виде таблицы, по которой можно сделать поиск, задать фильтр. Есть функции редактирования заявки, подачи нового заявления, удаления.',
    textMedium2:
      'При наведении на статус отклоненной заявки можно увидеть комментарий руководителя с причиной отклонения.',
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
    title: 'Руководитель подразделения',
    textHard:
      'Отображается график отпусков руководителя и подчиненных. Есть фильтр, поиск, выгрузка в Excel',
    textMedium:
      'Чтобы принять решение по заявкам сотрудников на отпуска, руководитель заходит в нужный раздел. В нем список всех подчиненных сотрудников. Можно просматривать в виде календаря и в виде таблицы.',
    textMedium2:
      'Статусы сотрудника выделяются цветом, который зависит от стадии согласования отпуска. Отдельно выделяются сотрудники в декрете.',
    textMedium3:
      'Поле «Заполнено» вычисляется как количество дней из пакета заявок на отпуска следующего года, поданных сотрудником, деленное на норму отпуска сотрудника.',
    img2: approve,
    imgMedium3: nextYear2021,
    textMedium4:
      'Руководитель может согласовать пакет отпусков всех сотрудников, заявки которых прошли все контроли и согласованы. Для этого кнопка «Согласовать все».',
    textMedium5:
      'Можно перейти в детальный экран, который покажет все заявки на плановые отпуска сотрудника, и согласовать/отклонить заявки по отдельности, указав причину.',
  },

  {
    id: 5,
    img: applicationsBlackout,
    imgMedium: planning,
    title: 'Ведущий кадровик',
    textHard: 'Начинает и заканчивает кампанию по планированию отпусков будущего года',
    textMedium:
      'В раздел «Отпуска» выбирает режим «Включить планирование отпусков будущего год», указывает год. После этого всем приходит оповещение об этом. Появляется раздел «Планирование отпусков будущего года» у всех участников процесса (сотрудники, руководители, кадровики).',
    textMedium2:
      'После утверждения всех отпусков, отключает режим планирования отпусков на следующий год.',
  },

  {
    id: 6,
    img: hr,
    imgMedium: prohibition,
    title: 'Кадровик',
    textHard: 'Согласовывает пакет отпусков сотрудников',
    textMedium:
      'Если их заявки прошли все контроли. Заносит в список сотрудников, отпуска которых не должны пересекаться в разделе «Отпуска/Пересечение отпусков».',
    textMedium2:
      'Ведет список сотрудников, на плановые отпуска которых не действует правило «запрещается брать отпуска продолжительностью 5, 6, 12, 13 дней, начинающиеся с понедельника».',
    textMedium3: 'Выгружает в 1С ЗУП согласованные отпуска, не содержащие ошибок.',
  },

  {
    id: 7,
    title: 'Сбойные ситуации и задержки рейсов',
    url: '/disruptiveSituations',
  },
];
