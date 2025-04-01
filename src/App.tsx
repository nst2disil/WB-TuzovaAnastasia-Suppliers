import { useState, useEffect } from 'react';
import './app.css';
import './reset.css';
import Logo from "./components/Logo/Logo";
import HeaderNav from './components/HeaderNav/HeaderNav';
import Settings from './components/Settings/Settings';
import SuppliesTable from './components/SuppliesTable/SuppliesTable';

function App() {
  const [rowsData, setrowsData] = useState([]);

  const headers = ['Номер', 'Дата поставки', 'Город', 'Количество', 'Тип поставки', 'Склад', 'Статус'];
  const endpoint = 'http://localhost:3000/supplies';

  const endpoint2 = 'http://localhost:3000/supplies/154814';

  useEffect(() => {
    const fetchRowsData = async () => {
      try {
        const response = await fetch(endpoint);
        const result = await response.json();
        setrowsData(result);
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
      }
    };

    fetchRowsData();
  }, []);

  useEffect(() => {
    const updateRowsData = async () => {
      try {
        const response = await fetch(endpoint2, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ status: false }),
        });
        const result = await response.json();
        console.log(result)
      } catch (error) {
        console.error('Ошибка:', error);
      }
    };

    updateRowsData();
  }, []);



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
