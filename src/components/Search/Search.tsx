import { useState } from 'react';
import './search.css';
import chevronDownImg from './chevron-down.svg';
import chevronTopImg from './chevron-top.svg';
import searchImg from './search.svg';
import ModalMenu from '../DropDownMenu/DropDownMenu';

const Search = () => {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const itemsArray = ['По номеру', 'По городу', 'По типу поставки', 'По статусу'];

    function toggleDropDown() {
        setIsDropDownOpen(prevState => !prevState);
    }

    return (
        <>
            <div className="search">
                <button className={`search__filter ${isDropDownOpen ? 'search__filter_active' : ''}`} onClick={toggleDropDown}>
                    <span>По номеру</span>
                    <img src={isDropDownOpen ? chevronTopImg : chevronDownImg} alt="chevron" />
                </button>
                <input className="search__input" placeholder="Поиск..." />
                <button className="search__button">
                    <img src={searchImg} alt="search" />
                </button>
            </div>
            {isDropDownOpen && <ModalMenu items={itemsArray} />}
        </>
    );
}

export default Search;