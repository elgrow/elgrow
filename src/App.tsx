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
import { pickDataVacation } from './pages/VacationPage/VacationPage.const';
import { pickDataSituations } from './pages/DisruptiveSituationsPage/DisruptiveSituations.const';
import { pickDataGroundHandling } from './pages/GroundHandlingPage/GroundHandling.const';
import { pickDataParking } from './pages/ParkingPage/Parking.const';

import './App.scss';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { FoodPage } from './pages/FoodPage/FoodPage';
import { foodData } from './pages/FoodPage/FoodPage.const';

const cnApp = cn('App');

export const App = () => {
  return (
    <div className={cnApp()}>
      <ParallaxProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route
              path="/aviationTrainingCenter"
              element={<AviationTrainingCenterPage data={pickDataAviation} />}
            />
            <Route
              path="/vacation"
              element={<VacationPage data={pickDataVacation} />}
            />
            <Route
              path="/disruptiveSituations"
              element={<DisruptiveSituationsPage data={pickDataSituations} />}
            />
            <Route
              path="/groundHandling"
              element={<GroundHandlingPage data={pickDataGroundHandling} />}
            />
            <Route
              path="/parking"
              element={<ParkingPage data={pickDataParking} />}
            />
            <Route path="/food" element={<FoodPage data={foodData} />} />
          </Routes>
        </BrowserRouter>
      </ParallaxProvider>
    </div>
  );
};
