import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={css.contactListContainer}>
      {contacts.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact data={contact} handleDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
}
