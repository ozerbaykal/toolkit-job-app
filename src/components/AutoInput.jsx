

const AutoInput = ({label,name}) => {
  return (
    
    <div>
        <label htmlFor={label}>{label}</label>
        <input type="text" required name={name} id={label}/>
    </div>
  )
}

export default AutoInput