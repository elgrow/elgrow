import {
  Route,
  Routes,
  BrowserRouter,
  useLocation,
  Navigate,
} from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import { cn } from '@bem-react/classname';
import { useEffect, useState } from 'react';

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
import { FoodPage } from './pages/FoodPage/FoodPage';
import { foodData } from './pages/FoodPage/FoodPage.const';
import { foodDataEng } from './pages/FoodPage/FoodPageEng.const';
import './App.scss';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Redirect from './components/Redirect/Redirect';

export const App = () => {
  const [first, setfirst] = useState(false);
  const pathName = window.location.pathname;
  const cnApp = cn('App');
  const getData = (ru?: any, en?: any) => {
    let lang = localStorage.getItem('language');
    if (lang === 'en') {
      return en;
    } else return ru;
  };

  useEffect(() => {
    const arrPathname = pathName.split('/');
    localStorage.setItem('language', arrPathname[1]);
    setfirst(true);
  }, []);

  return (
    <>
      {first ? (
        <div className={cnApp()}>
          <ParallaxProvider>
            <BrowserRouter>
              <ScrollToTop />
              <Routes>
                <Route // @ts-ignore
                  exact={true}
                  path={'/' + getData('ru', 'en')}
                  element={<MainPage />}
                />
                <Route
                  path={`/${getData('ru', 'en')}/aviationTrainingCenter`}
                  element={
                    <AviationTrainingCenterPage
                      data={getData(pickDataAviation, pickDataAviationEng)}
                    />
                  }
                />
                <Route
                  path={`/${getData('ru', 'en')}/vacation`}
                  element={
                    <VacationPage
                      data={getData(pickDataVacation, pickDataVacationEng)}
                    />
                  }
                />
                <Route
                  path={`/${getData('ru', 'en')}/disruptiveSituations`}
                  element={
                    <DisruptiveSituationsPage
                      data={getData(pickDataSituations, pickDataSituationsEng)}
                    />
                  }
                />
                <Route
                  path={`/${getData('ru', 'en')}/groundHandling`}
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
                  path={`/${getData('ru', 'en')}/parking`}
                  element={
                    <ParkingPage
                      data={getData(pickDataParking, pickDataParkingEng)}
                    />
                  }
                />
                <Route
                  path={`/${getData('ru', 'en')}/food`}
                  element={<FoodPage data={getData(foodData, foodDataEng)} />}
                />
                <Route path="*" element={<Redirect />} />
              </Routes>
            </BrowserRouter>
          </ParallaxProvider>
        </div>
      ) : null}
    </>
  );
};
