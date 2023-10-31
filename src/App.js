import { useState } from 'react';
import './App.css';
import Validation from './Validation';

function App() {

  const [dataForm, setDataForm] = useState({
    nameInput: '',
    emailInput: '',
    numberInput: '',
    numberRepeatInput: ''
  })

  const handleInput = (e) => {
    setDataForm((dataForm) => ({ ...dataForm, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (el) => {
    el.preventDefault();

    if (dataForm.nameInput !== '' && dataForm.emailInput !== '' && dataForm.numberInput !== '' && dataForm.numberRepeatInput !== '') {

      let infos = JSON.parse(localStorage.getItem('infos') || '[]')

      infos.push({
        name: dataForm.nameInput,
        email: dataForm.emailInput,
        number: dataForm.numberInput
      })

      localStorage.setItem('infos', JSON.stringify(infos))

    } else {
      alert('error')
    }
  }



  return (
    <section>
      <div className="container">
        <h1>Register</h1>

        <form onSubmit={handleSubmit}>
          <div className="data">
            <div id='message-return'></div>
            <p>Name:</p>
            <input type="text" name="nameInput" placeholder="Ex: Jhon Doe" onChange={handleInput}  />
            
            <p>E-mail:</p>
            <input type="email" name="emailInput" placeholder="Ex: jhondoe@email.com" onChange={handleInput}  />

            <p>Insert a valid number:</p>
            <input type="text" name="numberInput" placeholder="Ex: (00) 123459273" onChange={handleInput}  />

            <p>Please repeat a number:</p>
            <input type="text" name="numberRepeatInput" placeholder="Ex: (00) 123459273" onChange={handleInput}  />

            <button type='submit' > Submit </button>
          </div>
        </form>

      </div>
    </section>
  )
}
export default App;
