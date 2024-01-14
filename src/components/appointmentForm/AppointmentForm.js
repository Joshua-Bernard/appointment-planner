import React, { useMemo } from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const contactNames = useMemo(() => {
    return contacts.map((contact) => contact.name);
  }, [contacts]);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Appointment Title"
          required
        />
        <input
          type="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          min={getTodayString()}
          required
        />
        <input
          type="time"
          name="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
        <ContactPicker
          name="contact"
          value={contact}
          contacts={contactNames}
          onChange={(e) => setContact(e.target.value)}
        />
        <input type="submit" value="Add Appointment" />
      </form>
    </>
  );
};
