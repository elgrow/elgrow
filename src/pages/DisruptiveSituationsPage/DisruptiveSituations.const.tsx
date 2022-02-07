import application from '../../assets/images/DisruptiveSituations/application.png';
import authorization from '../../assets/images/DisruptiveSituations/authorization.png';
import deleteVoucher from '../../assets/images/DisruptiveSituations/delete.png';
import flightNumber from '../../assets/images/DisruptiveSituations/flight_number.png';
import listAction from '../../assets/images/DisruptiveSituations/list_action.png';
import listPrint from '../../assets/images/DisruptiveSituations/list_print.png';
import list from '../../assets/images/DisruptiveSituations/list.png';
import passengerAmount from '../../assets/images/DisruptiveSituations/passenger_amount.png';
import registryFiltering from '../../assets/images/DisruptiveSituations/registry_filtering.png';
import registry from '../../assets/images/DisruptiveSituations/registry.png';
import scanner from '../../assets/images/DisruptiveSituations/scanner.png';
import voucherCreate from '../../assets/images/DisruptiveSituations/voucher_create.png';
import voucherUpload from '../../assets/images/DisruptiveSituations/voucher_upload.png';
import voucherUsedHeader from '../../assets/images/DisruptiveSituations/voucher_used_header.png';
import voucherUsed from '../../assets/images/DisruptiveSituations/voucher_used.png';
import documents from '../../assets/images/DisruptiveSituations/documents.svg';
import information from '../../assets/images/DisruptiveSituations/information.svg';
import scannerHeader from '../../assets/images/DisruptiveSituations/scanner_header.png';
import scannerFooter from '../../assets/images/DisruptiveSituations/scanner_footer.png';
import voucherCreate2 from '../../assets/images/DisruptiveSituations/voucher_create2.png';

export const pickDataSituations = [
  {
    id: 1,
    img: voucherCreate,
    imgMedium: scanner,
    imgMedium2: passengerAmount,
    heading: 'Сбойные ситуации&shy;и задержки рейсов',
    textBig: 'Система, которая помогает при сбойных ситуациях',
    textMedium:
      'Упрощает работу по предоставлению пассажирам напитков и питания при задержке самолета.',
    textMedium2:
      'Состоит из веб-интерфейса для исполнителя, авиакомпании и мобильного приложения для точек питания',
  },

  {
    id: 2,
    img: application,
    imgMedium: list,
    imgMedium2: registry,
    imgMedium3: listAction,
    title: 'Личный кабинет Исполнителя',
    textHard: 'Перевод в электронный вид ваучеров по питанию',
    img2:flightNumber,
    imgMedium4: listPrint,
    imgMedium5: voucherCreate2,
    ul: 'Функционал:',
    li1: 'Создание и изменение заявок',
    li2: 'Поиск по данным и настройка фильтров',
    li3: 'Выгрузка отчетов',
    textHard2: 'Создание заявки',
    textMedium:
      'Исполнитель подгружает файл из системы регистрации. Система автоматически понимает, какие поля из загруженных файлов забирать и подгружать.',
    textMedium2:
      'Номер заявки, дата и время создания заявки устанавливаются автоматически. Обязательны к заполнению поля: авиакомпания, номер, дата рейса, время рейса, количество пассажиров, причина задержки рейса.',
    textMedium3: 'Система позволяет выбрать сразу несколько услуг при создании заявки.',
    textMedium4:
      'Пассажиры: можно выбрать всех из списка, выбрать только часть или ввести пассажиров вручную.',
    icon: documents,
    textSmall: 'Подтверждающие документы: переписка с Авиакомпанией или иные документы',
    icon2: information,
    textSmall2:
      'Если есть информация что произошла полная замена рейса, то имеется возможность внесения дополнительных данных',
  },

  {
    id: 3,
    imgMedium: authorization,
    imgMedium2: scannerHeader,
    imgMedium3: scannerFooter,
    imgMedium4: passengerAmount,
    imgMedium5: voucherUsedHeader,
    imgMedium6: voucherUsed,
    title: 'Мобильное приложение для точек питания',
    textHard: 'Для распознания информации по пассажиру приложение считывает штрих-код',
    textMedium: 'Сотрудник точки питания заходит в приложение. Сканирует штрих-код, выбирает информацию: потрачена вся сумма, либо частично (тогда вводит, сколько потрачено).', 
    textMedium2: 'Подтверждает, что ваучер использован и данные становятся доступны исполнителю.',
    textMedium3: 'Если штрих-код не считывается, то можно ввести пассажира вручную.',
  },

  {
    id: 4,
    img: voucherUpload,
    imgMedium: deleteVoucher,
    imgMedium2: registryFiltering,
    title: 'Личные кабинеты авиакомпаний',
    textHard: 'Можно более детально расскрыть информацию по заявке, настроить фильтры, выгрузить отчет в Excel',
  },

  {
    id: 5,
    title: 'Наземное обслуживание и ТКО',
    url: '/groundHandling',
  },
];
