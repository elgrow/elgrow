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

export const pickDataSituationsEng = [
  {
    id: 1,
    img: voucherCreate,
    imgMedium: scanner,
    imgMedium2: passengerAmount,
    heading: 'Failure situations&shy;and flight delays',
    textBig: 'A system that helps in case of failure situations',
    textMedium:
      'It simplifies the work of providing passengers with drinks and meals when the aircraft is delayed.',
    textMedium2:
      'Consists of a web interface for the implementer, the airline company and a mobile app for food provaider',
  },

  {
    id: 2,
    img: application,
    imgMedium: list,
    imgMedium2: registry,
    imgMedium3: listAction,
    title: `Contractor's personal account`,
    textHard: 'Electronic conversion of meal vouchers',
    img2: flightNumber,
    imgMedium4: listPrint,
    imgMedium5: voucherCreate2,
    ul: 'Functional:',
    li1: 'Creation and modification of request',
    li2: 'Data search and filter settings',
    li3: 'Upload reports',
    textHard2: 'Create an request',
    textMedium:
      'The implementer loads the file from the registration system. The system automatically understands which fields from the uploaded files to pick up and upload.',
    textMedium2:
      'The application number, date and time of creation of the application are set automatically. Obligatory to be filled in: airline, number, flight date, flight time, number of passengers, reason for flight delay.',
    textMedium3:
      'The system allows you to select several services at once when creating a request.',
    textMedium4:
      'Passengers: You can select all from the list, select only some, or enter passengers manually.',
    icon: documents,
    textSmall:
      'Supporting documents: correspondence with the Airline or other documents',
    icon2: information,
    textSmall2:
      'If there is information that there was a complete replacement of the flight, then it is possible to enter additional data',
  },

  {
    id: 3,
    imgMedium: authorization,
    imgMedium2: scannerHeader,
    imgMedium3: scannerFooter,
    imgMedium4: passengerAmount,
    imgMedium5: voucherUsedHeader,
    imgMedium6: voucherUsed,
    title: 'Mobile application for food providers',
    textHard:
      'The application reads the barcode to recognize passenger information',
    textMedium:
      'A food service employee logs into the app. Scans a barcode, selects information: it was spent amountly , or partially (then enters how much was spent).',
    textMedium2:
      'Подтверждает, что ваучер использован и данные становятся доступны исполнителю.',
    textMedium3:
      'If the barcode is not readable, you can enter the passenger manually.',
  },

  {
    id: 4,
    img: voucherUpload,
    imgMedium: deleteVoucher,
    imgMedium2: registryFiltering,
    title: 'Airline personal accounts',
    textHard:
      'You can disclose information on the application in more detail, set up filters, upload a report to Excel',
  },

  {
    id: 5,
    title: 'Ground handling and TCS',
    url: '/groundHandling',
  },
];
