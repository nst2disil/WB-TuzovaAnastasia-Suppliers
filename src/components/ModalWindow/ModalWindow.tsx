// import { useState } from 'react';
import './modalWindow.css';
import CloseImg from './icon-close.svg';
import AddSupplyForm from '../AddSupplyForm/AddSupplyForm';

const ModalWindow = () => {
    // const [isCloseButtonPressed, setIsCloseButtonPressed] = useState(false);

    // function toggleCloseButton() {
    //     setIsCloseButtonPressed(prevState => !prevState);
    // }

    return (
        <div className="overlay">
            <div className="ModalWindow">
                <button className="ModalWindow__close">
                    <img src={CloseImg} alt="close" />
                </button>
                <div className="ModalWindow__content">
                    <AddSupplyForm />
                </div>
            </div>
        </div>
    );
}

export default ModalWindow;