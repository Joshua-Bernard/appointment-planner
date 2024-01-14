import React, { useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([{ name: "test name", phone: "test phone", email: "test email"}]);
  const [appointments, setAppointments] = useState([{ title: "test title", contact: "test contact", date: "test date", time: "test time"}]);
  /*
  Implement functions to add data to
  contacts and appointments
  */
  const addContact = (name, phone, email) => {
    setContacts((prev) => [...prev, { name, phone, email }]);
  };

  const addAppointment = (title, contact, date, time) => {
    setAppointments((prev) => [...prev, { title, contact, date, time }]);
  };
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
        <Route
          path={ROUTES.CONTACTS}
          element={
            <ContactsPage
              addContact={addContact}
              contacts={contacts}
            /> /* Add props to ContactsPage */
          }
        />
        <Route
          path={ROUTES.APPOINTMENTS}
          element={
            <AppointmentsPage
              addAppointment={addAppointment}
              appointments={appointments}
              contacts={contacts}
            /> /* Add props to AppointmentsPage */
          }
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
