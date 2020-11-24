const TextField = ({ label, id, handleChange, name, type, placeholder }) => (
  <>
    <label
      htmlFor={id}
      className="text-lg font-bold tracking-wide text-blue-600"
    >
      {label}{" "}
    </label>
    <input
      type={type || "text"}
      id={id}
      name={name || id}
      placeholder={placeholder || ""}
      onChange={handleChange}
      className="w-40 mt-1"
    />
  </>
);

export default TextField;
