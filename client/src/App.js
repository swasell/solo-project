import './App.css';
import Dashboard from './components/Dashboard';
import Details from './components/Details'
import EditList from './components/EditList'
import ExerciseForm from './components/ExerciseForm'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>

      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element= {< Dashboard />} />
          <Route path="/exercise/:id" element= {< Details/>} />
          <Route path="/exercise/edit/:id" element= {< EditList />} />
          <Route path="/exercise/new" element= {< ExerciseForm />} />
        </Routes>
        
      </div>

    </BrowserRouter>
  );

}

export default App;
