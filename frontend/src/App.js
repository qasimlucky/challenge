import { Route, Routes } from 'react-router-dom';
import Home from './containers/index';
import AddCenter from './containers/centers/add-center';
import CenterList from './containers/centers/center-list';
import EditCenter from './containers/centers/edit-center';
import AddResisdent from './containers/resisdent/add-resisdent';
import ResisdentList from './containers/resisdent/resisdent-list';
import EditResisdent from './containers/resisdent/edit-resisdent';
import AddNurse from './containers/nurses/add-nurse';
import NurseList from './containers/nurses/list-nurse';
import EditNurse from './containers/nurses/edit-nurse';
import BookReservation from './containers/reservation/book-reservation';
import ReservationList from './containers/reservation/reservation-list';



function App() {
  return (
    <main>
      <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/dashboard" exact element={<Home/>}/>
          <Route path="/addcenter" exact element={<AddCenter/>}/>
          <Route path="/centerlist" exact element={<CenterList/>}/>
          <Route path="/editcenter" exact element={<EditCenter/>}/>
          <Route path="/addresisdent" exact element={<AddResisdent/>}/>
          <Route path="/resisdentlist" exact element={<ResisdentList/>}/>
          <Route path="/addnurse" exact element={<AddNurse/>}/>
          <Route path="/nurselist" exact element={<NurseList/>}/>
          <Route path="/editresisdent" exact element={<EditResisdent/>}/>
          <Route path="/editnurse" exact element={<EditNurse/>}/>
          <Route path="/bookreservation" exact element={<BookReservation/>}/>
          <Route path="/reservationlist" exact element={<ReservationList/>}/>
      </Routes>
    </main>
  );
}

export default App;
