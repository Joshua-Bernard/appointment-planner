import React from "react";

export const ContactPicker = (props) => {
  return (
    <>
      <select
        value={props.value}
        name={props.name}
        onChange={props.onChange}
        aria-label="Contact Picker"
      >
        <option value={""} key={-1}>
          No Contact Selected
        </option>
        {props.contacts.map((contact) => {
          return (
            <option value={contact} key={contact}>
              {contact}
            </option>
          );
        })}
      </select>
    </>
  );
};
