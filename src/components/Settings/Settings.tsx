import { useState } from 'react';
import './settings.css';
import plusImg from './icon-plus.svg';
import Search from '../Search/Search';
import ModalWindow from '../ModalWindow/ModalWindow';

const Settings = () => {
    const [isAddButtonPressed, setIsEditButtonPressed] = useState(false);

    function toggleEditButton() {
        setIsEditButtonPressed(prevState => !prevState);
    }

    return (
        <div className="settings">
            <h1 className="settings__title">Поставки</h1>
            <div className="settings__actions">
                <button
                    className={`settings__actions__add ${isAddButtonPressed ? 'settings__actions__add_pressed' : ''}`}
                    onClick={toggleEditButton}
                >
                    <img src={plusImg} alt="plus" />
                    <span>Добавить поставку</span>
                </button>
                {isAddButtonPressed && <ModalWindow closeModal={toggleEditButton} />}
                <Search />
            </div>
        </div>
    );
}

export default Settings;