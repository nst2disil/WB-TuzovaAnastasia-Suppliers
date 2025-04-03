import './editDropDown.css';
import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { cancelSupply } from './../../store/suppliesSlice';
import ModalWindow from '../ModalWindow/ModalWindow';

interface EditDropDownProps {
    supplyData: {
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

const EditDropDown: FC<EditDropDownProps> = ({ supplyData }) => {
    const dispatch = useDispatch();
    const [isEditButtonPressed, setIsEditButtonPressed] = useState(false);

    function toggleEditSupplyButton() {
        setIsEditButtonPressed(prevState => !prevState);
    }

    return (
        <div className="dropDown">
            <div className="dropDown__list">
                <button className="dropDown__list__edit-btn" onClick={toggleEditSupplyButton}>
                    <span>Редактировать</span>
                </button>
                <button className="dropDown__list__cancel-btn" onClick={() =>
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    dispatch(cancelSupply(supplyData.id))}>
                    <span>Отменить поставку</span>
                </button>
            </div>
            {isEditButtonPressed && <ModalWindow closeModal={toggleEditSupplyButton} formType='edit' supplyId={supplyData.id} />}
        </div>
    );
}

export default EditDropDown;