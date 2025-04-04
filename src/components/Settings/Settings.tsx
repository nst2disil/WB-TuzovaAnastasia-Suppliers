import { useState } from 'react';
import './settings.css';
import plusImg from './icon-plus.svg';
import Search from '../Search/Search';
import ModalWindow from '../ModalWindow/ModalWindow';
import { useDispatch } from 'react-redux';
import { resetSupplyForm } from '../../store/suppliesSlice';

const Settings = () => {
    const [isAddButtonPressed, setIsEditButtonPressed] = useState(false);
    const dispatch = useDispatch();

    function toggleAddSupplyButton() {
        dispatch(resetSupplyForm());
        setIsEditButtonPressed(prevState => !prevState);
    }

    return (
        <div className="settings">
            <h1 className="settings__title">Поставки</h1>
            <div className="settings__actions">
                <button
                    className={`settings__actions__add ${isAddButtonPressed ? 'settings__actions__add_pressed' : ''}`}
                    onClick={toggleAddSupplyButton}
                >
                    <img src={plusImg} alt="plus" />
                    <span>Добавить поставку</span>
                </button>
                {isAddButtonPressed && <ModalWindow closeModal={toggleAddSupplyButton} formType="add" supplyId='' />}
                <Search />
            </div>
        </div>
    );
}

export default Settings;