import { useState } from 'react';
import './search.css';
import chevronDownImg from './../../icon-chevron-down.svg';
import chevronTopImg from './../../icon-chevron-top.svg';
import searchImg from './icon-search.svg';
import FilterDropDown from '../FilterDropDown/FilterDropDown';
import { useDispatch, useSelector } from 'react-redux';
import { filterSupplies, updateSearchVal } from './../../store/suppliesSlice';

const Search = () => {
    const dispatch = useDispatch()
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const searchVal = useSelector(state => state.supplies.filter.searchVal);

    function toggleDropDown() {
        setIsDropDownOpen(prevState => !prevState);
    }

    function searchClick() {
        dispatch(filterSupplies());
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    function handleSearchChange(event) {
        dispatch(updateSearchVal(event.target.value))
    }

    return (
        <>
            <div className="search">
                <button
                    className={`search__filter ${isDropDownOpen ? 'search__filter_active' : ''}`}
                    onClick={toggleDropDown}
                >
                    <span>По номеру</span>
                    <img
                        src={isDropDownOpen ? chevronTopImg : chevronDownImg}
                        alt="chevron"
                    />
                </button>
                <input
                    className="search__input"
                    placeholder="Поиск..."
                    value={searchVal}
                    onChange={handleSearchChange}
                />
                <button className="search__button" onClick={searchClick}>
                    <img src={searchImg} alt="search" />
                </button>
            </div>
            {isDropDownOpen && <FilterDropDown />}
        </>
    );
}

export default Search;