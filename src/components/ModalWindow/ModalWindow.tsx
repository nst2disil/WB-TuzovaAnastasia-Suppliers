import { FC } from 'react';
import './modalWindow.css';
import CloseImg from './icon-close.svg';
import AddSupplyForm from '../AddSupplyForm/AddSupplyForm';
interface ModalWindowProps {
    closeModal: () => void;
}

const ModalWindow: FC<ModalWindowProps> = ({ closeModal }) => {
    return (
        <div className="overlay">
            <div className="ModalWindow">
                <button className="ModalWindow__close" onClick={closeModal}>
                    <img src={CloseImg} alt="close" />
                </button>
                <div className="ModalWindow__content">
                    <AddSupplyForm closeModal={closeModal} />
                </div>
            </div>
        </div>
    );
}

export default ModalWindow;