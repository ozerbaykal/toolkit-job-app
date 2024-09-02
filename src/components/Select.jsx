const Select = ({ label, options, name,handleChange}) => {
  return (
    <div>
      <label>{label}</label>
      <select name={name} onChange={handleChange}>
        <option value="">seçiniz</option>
        {options.map((i) => (
          <option key={i} >{i}</option>
        ))}
      </select>
      
      
    </div>
  );
};

export default Select;
