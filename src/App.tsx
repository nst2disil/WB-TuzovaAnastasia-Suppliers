import './app.css';
import './reset.css';
import Logo from "./components/Logo/Logo";
import HeaderNav from './components/HeaderNav/HeaderNav';
import Settings from './components/Settings/Settings';
import SuppliesTable from './components/SuppliesTable/SuppliesTable';

function App() {
  const headers = ['Номер', 'Дата поставки', 'Город', 'Количество', 'Тип поставки', 'Склад', 'Статус'];
  const rowsData = [{
    "id": "984153",
    "date": "26.06.2024",
    "city": "Псков",
    "quantity": 748,
    "type": "Короб",
    "warehouse": {
      "name": "Склад",
      "address": "ул. Индустриальная, д. 9/1"
    },
    "status": false
  },
  {
    "id": "984153",
    "date": "26.06.2024",
    "city": "Псков",
    "quantity": 748,
    "type": "Короб",
    "warehouse": {
      "name": "Склад",
      "address": "ул. Индустриальная, д. 9/1"
    },
    "status": false
  }];


  return (
    <div className="app">
      <Logo />
      <div className="container">
        <HeaderNav />
        <Settings />
        <SuppliesTable headers={headers} rowsData={rowsData} />
      </div>
    </div>
  )
}

export default App;
