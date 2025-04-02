import './addSupplyForm.css';
import { FC, useState } from 'react';
import calImg from './icon-cal.svg';
import chevronDownImg from './../../icon-chevron-down.svg';
import { DatePicker } from 'antd';
import CityDropDown from '../CityDropDown/CityDropDown';
import chevronTopImg from './../../icon-chevron-top.svg';

interface AddSupplyFormProps {
    closeModal: () => void;
}

const AddSupplyForm: FC<AddSupplyFormProps> = ({ closeModal }) => {
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<string | null>(null);

    const [isDropDownOpen, setIsDropDownOpen] = useState(false);

    function toggleDropDown() {
        setIsDropDownOpen(prevState => !prevState);
    }

    const toggleCalendar = () => {
        setIsCalendarOpen(prevState => !prevState);
    };

    const handleDateChange = (_date: Date | null, dateString: string | string[]) => {
        const dateStr = Array.isArray(dateString) ? dateString.join(', ') : dateString;
        setSelectedDate(dateStr);
        setIsCalendarOpen(false);
    };

    return (
        <div className="AddSupplyForm">
            <div>
                <div className="AddSupplyForm__title">Новая поставка</div>
                <div className="AddSupplyForm__id">#02387</div>
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
                                onChange={handleDateChange}
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
                        <input />
                        <button onClick={toggleDropDown}>
                            <img src={isDropDownOpen ? chevronTopImg : chevronDownImg} alt="chevron" />
                        </button>
                    </div>
                    {isDropDownOpen && <CityDropDown />}
                </li>
                <li>
                    <span className="AddSupplyForm__data__title">
                        Количество
                    </span>
                    <div className="AddSupplyForm__data__input">
                        <input />
                        <span>шт.</span>
                    </div>
                </li>
                <li>
                    <span className="AddSupplyForm__data__title">
                        Тип поставки
                    </span>
                    <div className="AddSupplyForm__data__input">
                        <input />
                        <img src={chevronDownImg} alt="chevron" />
                    </div>
                </li>
                <li>
                    <span className="AddSupplyForm__data__title">
                        Склад
                    </span>
                    <div className="AddSupplyForm__data__input">
                        <input />
                        <img src={chevronDownImg} alt="chevron" />
                    </div>
                </li>
                <li>
                    <span className="AddSupplyForm__data__title">
                        Статус
                    </span>
                    <div className="AddSupplyForm__data__input">
                        <input />
                        <img src={chevronDownImg} alt="chevron" />
                    </div>
                </li>
            </ul>
            <div className="AddSupplyForm__btns">
                <button className="AddSupplyForm__btns__create">
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