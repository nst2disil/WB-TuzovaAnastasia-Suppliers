// import { useState } from 'react';
import './modalEditWindow.css';
import CloseImg from './close.svg';

const ModalEditWindow = () => {
    // const [isCloseButtonPressed, setIsCloseButtonPressed] = useState(false);

    // function toggleCloseButton() {
    //     setIsCloseButtonPressed(prevState => !prevState);
    // }

    return (
        <div className="modalEditWindow">
            <button className="modalEditWindow__close">
                <img src={CloseImg} alt="close" />
            </button>
            <div className="modalEditWindow__content">
                <div>
                    <div className="modalEditWindow__content__title">Новая поставка</div>
                    <div>#02387</div>
                </div>
                <div>
                   Поля ввода
                </div>
                <div>
                    <div>Создать</div>
                    <div>Отменить</div>
                </div>
            </div>
        </div>
    );
}

export default ModalEditWindow;