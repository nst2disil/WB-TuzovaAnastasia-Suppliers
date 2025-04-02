import './editDropDown.css';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { cancelSupply, updateSupply } from './../../store/suppliesSlice';

interface EditDropDownProps {
    supplyData: {
        "id" : string,
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

const EditDropDown: FC<EditDropDownProps> = ({ supplyData }) => {
    const dispatch = useDispatch();

    // const d = {
    //     "id": "984153",
    //     "city": "111",
    //     "quantity": 111,
    //     "type": "111",
    //     "warehouse": {
    //         "name": "111",
    //         "address": "111"
    //     },
    //     "status": "111"
    // }

    return (
        <div className="dropDown">
            <div className="dropDown__list">
                <button className="dropDown__list__edit-btn" onClick={() =>
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    dispatch(updateSupply(supplyData))}>
                    <span>Редактировать</span>
                </button>
                <button className="dropDown__list__cancel-btn" onClick={() =>
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    dispatch(cancelSupply(supplyData.id))}>
                    <span>Отменить поставку</span>
                </button>
            </div>
        </div>
    );
}

export default EditDropDown;