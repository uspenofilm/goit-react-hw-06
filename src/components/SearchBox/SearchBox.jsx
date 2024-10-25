import css from "./SearchBox.module.css";

export default function SearchBox({ value, onFilter }) {
  return (
    <label className={css.searchBoxContainer}>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={(event) => onFilter(event.target.value)}
      ></input>
    </label>
  );
}
