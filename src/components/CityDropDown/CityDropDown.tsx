import './cityDropDown.css';

const CityDropDown = () => {
    return (
        <div className="dropDown">
            <div className="dropDown__list cityDropDown__list">
                <button>
                    <span>Москва</span>
                </button>
                <button>
                    <span>Псков</span>
                </button>
                <button>
                    <span>Тверь</span>
                </button>
                <button>
                    <span>Абакан</span>
                </button>
                <button>
                    <span>Нижний Новгород</span>
                </button>
                <button>
                    <span>Кострома</span>
                </button>
                <button>
                    <span>Ярославль</span>
                </button>
            </div>
        </div>
    );
}

export default CityDropDown;