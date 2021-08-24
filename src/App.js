// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



// let name = "Hemil" //simple varible
// let name2 = (<h1>Hello Hemil Bhai kese ho?</h1>) //this is how you can put html in variable
function App() {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#101010'
      showAlert("Dark Mode has been enabled", "success")

    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled", "success")
    }
  }
  return (
    <>
      <Router>
        <Navbar title="Text Analyzer" aboutText="AboutUs" mode={mode} toggleMode={toggleMode} />

        <Alert alert={alert} />

        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About mode={mode}/>
            </Route>

            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Enter the Text to Analyze" mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>




    </>
  );
}

export default App;
