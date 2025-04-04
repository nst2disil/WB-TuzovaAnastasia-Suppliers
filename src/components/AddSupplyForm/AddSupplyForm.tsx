import './addSupplyForm.css';
import { FC, useState } from 'react';
import calImg from './icon-cal.svg';
import chevronDownImg from './../../icon-chevron-down.svg';
import { DatePicker } from 'antd';
import chevronTopImg from './../../icon-chevron-top.svg';
import { useDispatch, useSelector } from 'react-redux';
import { createSupply, updateSupplyForm } from '../../store/suppliesSlice';
import { RootState } from '@reduxjs/toolkit/query';
import moment from 'moment';

interface AddSupplyFormProps {
    closeModal: () => void;
}

const AddSupplyForm: FC<AddSupplyFormProps> = ({ closeModal }) => {
    const dispatch = useDispatch();
    const {
        id: selectedId,
        date: selectedDate,
        city: selectedCity,
        quantity: selectedQuantity,
        type: selectedType,
        warehouse: selectedWarehouse,
        status: selectedStatus
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
    } = useSelector((state: RootState) => state.supplyForm);

    const formattedStatus = selectedStatus === 'in_way' ? 'В пути' : 'Задерживается';

    const handleCreateClick = () => {
        const newSupplyData = {
            id: selectedId,
            date: selectedDate,
            city: selectedCity,
            quantity: selectedQuantity,
            type: selectedType,
            warehouse: selectedWarehouse,
            status: selectedStatus
        };
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        dispatch(createSupply(newSupplyData));
        closeModal();
    }

    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [isCityDropDownOpen, setIsCityDropDownOpen] = useState(false);
    const [isTypeDropDownOpen, setIsTypeDropDownOpen] = useState(false);
    const [isWarehouseDropDownOpen, setIsWarehouseDropDownOpen] = useState(false);
    const [isStatusDropDownOpen, setIsStatusDropDownOpen] = useState(false);

    const cities = ['Москва', 'СПб', 'Псков', 'Тверь', 'Абакан', 'Нижний Новгород', 'Кострома', 'Ярославль'];
    const types = ['Короб', 'Монопаллета'];
    const statuses = ['В пути', 'Задерживается'];
    const warehouses = [
        { name: 'Склад', address: 'ул. Индустриальная, д. 9/1' },
        { name: 'СЦ Абакан', address: 'ул. Игарская, д. 21г' },
        { name: 'Черная грязь', address: 'д. Черная Грязь, ул. Промышленная, с.2' },
        { name: 'Внуково', address: 'Поселение Марушкинское, квартал № 8' },
        { name: 'Белая дача', address: 'Яничкин проезд, 3' },
        { name: 'Электросталь', address: 'Ногинский р-н, Московская обл., г. Электросталь' },
        { name: 'Вёшки', address: 'Липкинское шоссе, 2-й километр, вл1с1, посёлок Вёшки, городской округ Мытищи, Московская область' }
    ];


    function toggleCalendar() {
        setIsCalendarOpen(prevState => !prevState);
    };

    function toggleCityDropDown() {
        setIsCityDropDownOpen(prevState => !prevState);
    };

    function toggleTypeDropDown() {
        setIsTypeDropDownOpen(prevState => !prevState);
    };

    function toggleWarehouseDropDown() {
        setIsWarehouseDropDownOpen(prevState => !prevState);
    };

    function toggleStatusDropDown() {
        setIsStatusDropDownOpen(prevState => !prevState);
    };

    function handleDateSelect(_date: moment.Moment | null, dateString: string | string[]) {
        const dateStr = Array.isArray(dateString) ? dateString.join(', ') : dateString;
        const formattedDate = moment(dateStr, 'YYYY-MM-DD').format('DD.MM.YYYY');
        dispatch(updateSupplyForm({ field: 'date', value: formattedDate }));
        setIsCalendarOpen(false);
    };

    const handleCitySelect = (city: string) => {
        dispatch(updateSupplyForm({ field: 'city', value: city }));
        setIsCityDropDownOpen(false);
    }

    const handleQuantitySelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const quantity = event.target.value;
        dispatch(updateSupplyForm({ field: 'quantity', value: Number(quantity) }));
    };

    const handleTypeSelect = (type: string) => {
        dispatch(updateSupplyForm({ field: 'type', value: type }));
        setIsTypeDropDownOpen(false);
    }

    const handleWarehouseSelect = (warehouse: { name: string, address: string }) => {
        dispatch(updateSupplyForm({ field: 'warehouse', value: warehouse }));
        setIsWarehouseDropDownOpen(false);
    }

    const handleStatusSelect = (status: string) => {
        dispatch(updateSupplyForm({ field: 'status', value: status === 'В пути' ? 'in_way' : 'delayed' }));
        setIsStatusDropDownOpen(false);
    }

    return (
        <div className="AddSupplyForm">
            <div>
                <div className="AddSupplyForm__title">Новая поставка</div>
            </div>
            <ul className="AddSupplyForm__data">
                <li>
                    <span className="AddSupplyForm__data__title">
                        Дата поставки
                    </span>
                    <div className="AddSupplyForm__data__input">
                        <input
                            type="text"
                            value={selectedDate || ''}
                            readOnly
                            placeholder="__.__.____"
                        />
                        <img
                            src={calImg}
                            alt="cal"
                            onClick={toggleCalendar}
                        />
                    </div>
                    {isCalendarOpen && (
                        <div className="AddSupplyForm__data__calendar">
                            <DatePicker
                                onChange={handleDateSelect}
                                open={true}
                                placeholder=""
                            />
                        </div>
                    )}
                </li>
                <li>
                    <span className="AddSupplyForm__data__title">
                        Город
                    </span>
                    <div className="AddSupplyForm__data__input">
                        <input
                            type="text"
                            value={selectedCity || ''}
                            readOnly
                            onClick={toggleCityDropDown}
                        />
                        <button onClick={toggleCityDropDown}>
                            <img src={isCityDropDownOpen ? chevronTopImg : chevronDownImg} alt="chevron" />
                        </button>
                    </div>
                    {isCityDropDownOpen && (
                        <div className="dropDown">
                            <div className="dropDown__list">
                                {cities.map((city, index) => (
                                    <button key={index} onClick={() => handleCitySelect(city)}>
                                        <span>{city}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </li>
                <li>
                    <span className="AddSupplyForm__data__title">
                        Количество
                    </span>
                    <div className="AddSupplyForm__data__input">
                        <input
                            type="text"
                            placeholder="0"
                            value={selectedQuantity || ''}
                            onChange={handleQuantitySelect}
                        />
                        <span>шт.</span>
                    </div>
                </li>
                <li>
                    <span className="AddSupplyForm__data__title">
                        Тип поставки
                    </span>
                    <div className="AddSupplyForm__data__input">
                        <input
                            type="text"
                            value={selectedType || ''}
                            readOnly
                            onClick={toggleTypeDropDown}
                        />
                        <button onClick={toggleTypeDropDown}>
                            <img src={isTypeDropDownOpen ? chevronTopImg : chevronDownImg} alt="chevron" />
                        </button>
                    </div>
                    {isTypeDropDownOpen && (
                        <div className="dropDown">
                            <div className="dropDown__list">
                                {types.map((type, index) => (
                                    <button key={index} onClick={() => handleTypeSelect(type)}>
                                        <span>{type}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </li>
                <li>
                    <span className="AddSupplyForm__data__title">
                        Склад
                    </span>
                    <div className="AddSupplyForm__data__input">
                        <input
                            type="text"
                            value={selectedWarehouse.name || ''}
                            readOnly
                            onClick={toggleWarehouseDropDown}
                        />
                        <button onClick={toggleWarehouseDropDown}>
                            <img src={isWarehouseDropDownOpen ? chevronTopImg : chevronDownImg} alt="chevron" />
                        </button>
                    </div>
                    {isWarehouseDropDownOpen && (
                        <div className="dropDown">
                            <div className="dropDown__list">
                                {warehouses.map((warehouse, index) => (
                                    <button key={index} onClick={() => handleWarehouseSelect(warehouse)}>
                                        <span>{warehouse.name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </li>
                <li>
                    <span className="AddSupplyForm__data__title">
                        Статус
                    </span>
                    <div className="AddSupplyForm__data__input">
                        <input
                            type="text"
                            value={(selectedStatus ? formattedStatus : '') || ''}
                            readOnly
                            onClick={toggleStatusDropDown}
                        />
                        <button onClick={toggleStatusDropDown}>
                            <img src={isStatusDropDownOpen ? chevronTopImg : chevronDownImg} alt="chevron" />
                        </button>
                    </div>
                    {isStatusDropDownOpen && (
                        <div className="dropDown">
                            <div className="dropDown__list">
                                {statuses.map((status, index) => (
                                    <button key={index} onClick={() => handleStatusSelect(status)}>
                                        <span>{status}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </li>
            </ul>
            <div className="AddSupplyForm__btns">
                <button className="AddSupplyForm__btns__create" onClick={handleCreateClick}>
                    Создать
                </button>
                <button className="AddSupplyForm__btns__cancel" onClick={closeModal}>
                    Отменить
                </button>
            </div>

        </div>

    );
}

export default AddSupplyForm;