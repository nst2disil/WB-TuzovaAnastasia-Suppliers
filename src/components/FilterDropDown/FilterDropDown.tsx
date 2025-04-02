import './filterDropDown.css';

const FilterDropDown = () => {
    return (
        <div className="dropDown">
            <div className="dropDown__list">
                <button>
                    <span>По номеру</span>
                </button>
                <button>
                    <span>По городу</span>
                </button>
                <button>
                    <span>По типу поставки</span>
                </button>
                <button>
                    <span>По статусу</span>
                </button>
            </div>
        </div>
    );
}

export default FilterDropDown;