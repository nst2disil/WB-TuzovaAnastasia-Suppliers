import { FC } from 'react';
import './modalWindow.css';
import CloseImg from './icon-close.svg';
import AddSupplyForm from '../AddSupplyForm/AddSupplyForm';
import EditSupplyForm from '../EditSupplyForm/EditSupplyForm';
interface ModalWindowProps {
    closeModal: () => void,
    formType: string,
    supplyId: string | ''
}

const ModalWindow: FC<ModalWindowProps> = ({ closeModal, formType, supplyId }) => {
    return (
        <>
            <div className="overlay"></div>
            <div className="ModalWindow">
                <button className="ModalWindow__close" onClick={closeModal}>
                    <img src={CloseImg} alt="close" />
                </button>
                <div className="ModalWindow__content">
                    {formType === 'add'
                        ? <AddSupplyForm closeModal={closeModal} />
                        : <EditSupplyForm closeModal={closeModal} supplyId={supplyId} />
                    }
                </div>
            </div>
        </>
    );
}

export default ModalWindow;