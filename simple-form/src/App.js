import "./App.css"
import { useState } from "react"

function App() {

  const [ inputValue, setInputValue ] = useState({
    firstName: "",
    lastName: "",
    email: "",
  })

  const [ submited, setSubmited ] = useState(false)

  const [ valid, setValid ] = useState(false)

  const handleFirstName = (e) => {
    setInputValue({...inputValue, firstName: e.target.value})
  }

  const handleLastName = (e) => {
    setInputValue({...inputValue, lastName: e.target.value})
  }

  const handleEmail = (e) => {
    setInputValue({...inputValue, email: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.firstName && inputValue.lastName && inputValue.email) 
    setValid(true)
    setSubmited(true)
  }

  return (
    <div className="App">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form className="container" onSubmit={handleSubmit}>
        <h3>Login here</h3>
        {submited && valid ? <div className="submited">Thank you for registering!</div> : null}
        <input className="input"
        type="text"
        placeholder="Enter first name"
        value={inputValue.firstName}
        onChange={handleFirstName}
        />
        {submited && !inputValue.firstName ? <span className="enter">Enter correct first name</span> : null}
        <input className="input"
        type="text"
        placeholder="Enter last name"
        value={inputValue.lastName}
        onChange={handleLastName}
        />
        {submited && !inputValue.lastName ? <span className="enter">Enter correct first name</span> : null}
        <input className="input"
        type="text"
        placeholder="Enter email"
        value={inputValue.email}
        onChange={handleEmail}
        />
        {submited && !inputValue.email ? <span className="enter">Enter correct first name</span> : null}
        <button className="btn"
        type="submit"
        >Submit</button>
      </form>
    </div>
  );
}

export default App;
