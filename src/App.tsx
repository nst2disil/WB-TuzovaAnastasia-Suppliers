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
  const filter = useSelector((state) => state.supplies.filter);

  const STATUS_MAP = {
    in_way: "В пути",
    delayed: "Задерживается",
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const supplies = useSelector((state) => state.supplies.value.filter((item) => {

    if (filter.searchVal) {
      let itemVal = String(item[filter.key])
      const searchVal = String(filter.searchVal)

      if (filter.key === 'status') {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        itemVal = STATUS_MAP[itemVal]
      }
      // debugger

      return itemVal.includes(searchVal)
    }
    return true;
  }))




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

