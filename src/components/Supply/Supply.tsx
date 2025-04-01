import { useState, FC } from 'react';
import './supply.css';
import kebabImg from './kebab.svg';
import ModalMenu from '../DropDownMenu/DropDownMenu';

interface SupplyProps {
    rowData: {
        "id": string,
        "date": string,
        "city": string,
        "quantity": number,
        "type": string,
        "warehouse": {
            "name": string,
            "address": string
        },
        "status": boolean
    };
}

const Supply: FC<SupplyProps> = ({ rowData }) => {
    const [isEditButtonPressed, setIsEditButtonPressed] = useState(false);
    const itemsArray = ['Редактировать', 'Отменить поставку'];

    function ToggleEdit() {
        setIsEditButtonPressed(prevState => !prevState);
    }

    return (
        <tr className="supply">
            {Object.entries(rowData).map(([key, val]) => (
                <td key={key}>
                    {typeof val === 'object' && !Array.isArray(val) ? (
                        <div className="supply__obj-item">
                            <div className="supply__obj-item__name">
                                {val.name}
                            </div>
                            <div className="supply__obj-item__address">
                                {val.address}
                            </div>
                        </div>
                    ) : (
                        typeof val === 'boolean' ? (
                            <div className="supply__str-item_mini">
                                {val ?
                                    <div className="green">В пути</div>
                                    :
                                    <div className="red">Задерживается</div>
                                }
                            </div>
                        ) : (
                            <div className="supply__str-item">
                                {val}
                                {typeof val === 'number' && ' шт.'}
                            </div>
                        ))}
                </td>
            ))
            }
            <td>
                <button className={`supply__edit-btn ${isEditButtonPressed ? 'supply__edit-btn_pressed' : ''}`} onClick={ToggleEdit}>
                    <img src={kebabImg} alt="kebab" />
                    {isEditButtonPressed && (
                        <ModalMenu items={itemsArray} />
                    )}
                </button>
            </td>
        </tr>
    );
}

export default Supply;