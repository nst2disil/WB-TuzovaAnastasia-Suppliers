import './addSupplyForm.css';
import calImg from './icon-cal.svg';
import chevronDownImg from './../../icon-chevron-down.svg';

const AddSupplyForm = () => {
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
                        <input />
                        <img src={calImg} alt="cal" />
                    </div>
                </li>
                <li>
                    <span className="AddSupplyForm__data__title">
                        Город
                    </span>
                    <div className="AddSupplyForm__data__input">
                        <input />
                        <img src={chevronDownImg} alt="chevron" />
                    </div>
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
                <button className="AddSupplyForm__btns__cancel">
                    Отменить
                </button>
            </div>

        </div>

    );
}

export default AddSupplyForm;