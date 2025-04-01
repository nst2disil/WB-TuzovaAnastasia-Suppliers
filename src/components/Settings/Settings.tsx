import './settings.css';
import plusImg from './plus.svg';
import Search from '../Search/Search';

const Settings = () => {
    return (
        <div className="settings">
            <h1 className="settings__title">Поставки</h1>
            <div className="settings__actions">
                <button className="settings__actions__add">
                    <img src={plusImg} alt="plus" />
                    <span>Добавить поставку</span>
                </button>
                <Search />
            </div>
        </div>
    );
}

export default Settings;