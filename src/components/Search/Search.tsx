import { useState } from 'react';
import './search.css';
import chevronDownImg from './../../icon-chevron-down.svg';
import chevronTopImg from './../../icon-chevron-top.svg';
import searchImg from './icon-search.svg';
import { useDispatch, useSelector } from 'react-redux';
import { filterSupplies, updateSearchVal, updateFilterKey } from './../../store/suppliesSlice';

const Search = () => {
    const dispatch = useDispatch()
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const { searchVal, key } = useSelector(state => state.supplies.filter);

    // const supplies = useSelector(state => state.supplies.value);

    const filters = [
        { key: 'number', label: 'По номеру' },
        { key: 'city', label: 'По городу' },
        { key: 'type', label: 'По типу поставки' },
        { key: 'status', label: 'По статусу' },
    ]


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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    function handleFilterSelect(filter) {
        dispatch(updateFilterKey(filter));
        setIsDropDownOpen(false);
    }

    return (
        <>
            <div className="search">
                <button
                    className={`search__filter ${isDropDownOpen ? 'search__filter_active' : ''}`}
                    onClick={toggleDropDown}
                >

                    <span>{key.label}</span>
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
                {isDropDownOpen &&
                    <div className="dropDown">
                        <div className="dropDown__list">
                            {filters.map((filter) => (
                                <button key={filter.key} onClick={() => handleFilterSelect(filter)}>
                                    <span>{filter.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                }
            </div>
        </>
    );
}

export default Search;