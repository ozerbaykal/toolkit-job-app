

const Error = ({message,retry}) => {
  return (
    <div className='error' >
      <p>Üzgünüz verilere erişirken hata oluştu</p>
      <p className='text'> {message}</p>
      <button onClick={retry} className="button">
       <span>Tekrar Deneyin</span>
      </button>

      </div>
  )
}

export default Error