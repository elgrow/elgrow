import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import { cn } from '@bem-react/classname';
import { useEffect } from 'react';

import { MainPage } from './pages/MainPage/MainPage';
import { AviationTrainingCenterPage } from './pages/AviationTrainingCenterPage/AviationTrainingCenterPage';
import { VacationPage } from './pages/VacationPage/VacationPage';
import { DisruptiveSituationsPage } from './pages/DisruptiveSituationsPage/DisruptiveSituationsPage';
import { GroundHandlingPage } from './pages/GroundHandlingPage/GroundHandlingPage';
import { ParkingPage } from './pages/ParkingPage/ParkingPage';
import { pickDataAviation } from './pages/AviationTrainingCenterPage/AviationTrainingCenter.const';
import { pickDataAviationEng } from './pages/AviationTrainingCenterPage/AviationTrainingCenterEng.const';
import { pickDataVacation } from './pages/VacationPage/VacationPage.const';
import { pickDataVacationEng } from './pages/VacationPage/VacationPageEng.const';
import { pickDataSituations } from './pages/DisruptiveSituationsPage/DisruptiveSituations.const';
import { pickDataSituationsEng } from './pages/DisruptiveSituationsPage/DIsruptiveSituationsEng.const';
import { pickDataGroundHandling } from './pages/GroundHandlingPage/GroundHandling.const';
import { pickDataGroundHandlingEng } from './pages/GroundHandlingPage/GroundHandlingEng.const';
import { pickDataParking } from './pages/ParkingPage/Parking.const';
import { pickDataParkingEng } from './pages/ParkingPage/ParkingEng.const';

import './App.scss';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { FoodPage } from './pages/FoodPage/FoodPage';
import { foodData } from './pages/FoodPage/FoodPage.const';

const cnApp = cn('App');

export const App = () => {
  const getData = (ru: any, en: any) => {
    let lang = localStorage.getItem('language');
    if (lang === 'En') {
      return en;
    } else return ru;
  };

  return (
    <div className={cnApp()}>
      <ParallaxProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route
              path="/aviationTrainingCenter"
              element={
                <AviationTrainingCenterPage
                  data={getData(pickDataAviation, pickDataAviationEng)}
                />
              }
            />
            <Route
              path="/vacation"
              element={
                <VacationPage
                  data={getData(pickDataVacation, pickDataVacationEng)}
                />
              }
            />
            <Route
              path="/disruptiveSituations"
              element={
                <DisruptiveSituationsPage
                  data={getData(pickDataSituations, pickDataSituationsEng)}
                />
              }
            />
            <Route
              path="/groundHandling"
              element={
                <GroundHandlingPage
                  data={getData(
                    pickDataGroundHandling,
                    pickDataGroundHandlingEng
                  )}
                />
              }
            />
            <Route
              path="/parking"
              element={
                <ParkingPage
                  data={getData(pickDataParking, pickDataParkingEng)}
                />
              }
            />
            <Route path="/food" element={<FoodPage data={foodData} />} />
          </Routes>
        </BrowserRouter>
      </ParallaxProvider>
    </div>
  );
};
