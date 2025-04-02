import { useEffect } from 'react';
import './app.css';
import './reset.css';
import Logo from "./components/Logo/Logo";
import HeaderNav from './components/HeaderNav/HeaderNav';
import Settings from './components/Settings/Settings';
import SuppliesTable from './components/SuppliesTable/SuppliesTable';

import { fetchSupplies } from './store/suppliesSlice';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  const headers = ['Номер', 'Дата поставки', 'Город', 'Количество', 'Тип поставки', 'Склад', 'Статус'];

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    dispatch(fetchSupplies());
  }, [dispatch]);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const supplies = useSelector((state) => state.supplies.value);


  // useEffect(() => {
  //   const supplyData = {
  //     "id": "26589",
  //     "date": "24.06.2024",
  //     "city": "обновлёнyyy",
  //     "quantity": 30,
  //     "type": "Короб",
  //     "warehouse": {
  //       "name": "СЦ Абакан",
  //       "address": "ул. Игарская, д. 21г"
  //     },
  //     "status": "Задерживается"
  //   }
  //   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //   // @ts-expect-error
  //   dispatch(updateSupply(supplyData));
  // }, [dispatch]);


  return (
    <div className="app">
      <Logo />
      <div className="container">
        <HeaderNav />
        <Settings />
        <SuppliesTable headers={headers} rowsData={supplies} />
      </div>
    </div>
  )
}

export default App;

