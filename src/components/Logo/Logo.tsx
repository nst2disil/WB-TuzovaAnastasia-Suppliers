import LogoImg from './logo.svg';
import './logo.css';

const Logo = () => {
    return (
        <div className="logo">
            <img src={LogoImg} alt="logo" />
        </div>
    );
}
 
export default Logo;