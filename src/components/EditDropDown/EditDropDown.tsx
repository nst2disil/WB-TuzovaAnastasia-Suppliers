import './editDropDown.css';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { cancelSupply } from './../../store/suppliesSlice';

interface EditDropDownProps {
    supplyId: string;
}

const EditDropDown: FC<EditDropDownProps> = ({ supplyId }) => {
    const dispatch = useDispatch();

    return (
        <div className="editDropDown">
            <div className="editDropDown__list">
                <button className="editDropDown__list__edit-btn">
                    <span>Редактировать</span>
                </button>
                <button className="editDropDown__list__cancel-btn" onClick={() =>
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    dispatch(cancelSupply(supplyId))}>
                    <span>Отменить</span>
                </button>
            </div>
        </div>
    );
}

export default EditDropDown;