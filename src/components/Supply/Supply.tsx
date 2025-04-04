import { useState, FC } from 'react';
import './supply.css';
import kebabImg from './icon-kebab.svg';
import EditDropDown from '../EditDropDown/EditDropDown';

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
        "status": string
    };
}

const Supply: FC<SupplyProps> = ({ rowData }) => {
    const [isEditButtonPressed, setIsEditButtonPressed] = useState(false);

    function toggleEdit() {
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
                        key === 'status' ? (
                            <div className="supply__str-item_mini">
                                <div className={val === 'in_way' ? 'green' : 'red'}>
                                    {val === 'in_way' ? "В пути" : "Задерживается"}
                                </div>
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
                <button
                    className={`supply__edit-btn ${isEditButtonPressed ? 'supply__edit-btn_pressed' : ''}`}
                    onClick={toggleEdit}
                >
                    <img src={kebabImg} alt="kebab" />
                </button>
            </td>
            {isEditButtonPressed && (
                <EditDropDown supplyData={rowData} />
            )}
        </tr>
    );
}

export default Supply;