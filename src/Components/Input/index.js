const Input = ({ label, id, handleChange, name, type }) => (
  <>
    <label htmlFor={id}>{label}</label>
    <input
      type={type || "text"}
      id={id}
      name={name || id}
      onChange={handleChange}
    />
    <br />
  </>
);

export default Input;
