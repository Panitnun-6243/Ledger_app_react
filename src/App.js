import './App.css';
import Title from './components/Title';
import Transaction from './components/Transaction';
import FormComponent from './components/formComponent';


function App() {
  return (
    <div className="container">
        <Title />
        <FormComponent/>
        <Transaction />
    </div>
  );
}

export default App;
