import './dropDownMenu.css';
import { FC } from 'react';

interface dropDownMenuProps {
    items: string[]
}

const dropDownMenu: FC<dropDownMenuProps> = ({ items }) => {
    return (
        <div className="dropDownMenu">
            <ul className="dropDownMenu__list">
                {items.map((val, index) => (
                    <li key={index}>{val}</li>
                ))}
            </ul>
        </div>
    );
}

export default dropDownMenu;