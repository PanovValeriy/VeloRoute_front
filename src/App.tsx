import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import ViewRouteList from "./modules/ViewRouteList/ViewRouteList";
import ViewRoute from "./modules/ViewRoute/ViewRoute";
import ViewReportList from "./modules/ViewReportList/ViewReportList";
import ViewReport from "./modules/ViewReport/ViewReport";
import ViewMain from "./modules/ViewMain/ViewMain";
import ViewEventList from "./modules/ViewEventList/ViewEventList";
import ViewEvent from "./modules/ViewEvent/ViewEvent";
import {readTheme, showTheme} from "./libs/libs";
function App() {

  showTheme(readTheme())

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainPage/>}>
          <Route path={"/"} element={<ViewMain />} />
          <Route path="/routes" element={<ViewRouteList />}/>
          <Route path="/route/:id" element={<ViewRoute />}/>
          <Route path="/reports" element={<ViewReportList />}/>
          <Route path="/report/:id" element={<ViewReport />}/>
          <Route path="/events" element={<ViewEventList />}/>
          <Route path="/event/:id" element={<ViewEvent />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
