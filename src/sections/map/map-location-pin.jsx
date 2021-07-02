import pin from '../../assets/pin.png';

export const LocationPin = ({ text }) => (
    <div className="pin">
        <p className="pin-text">{text}</p>
        <img src={pin} alt='pin' />
    </div>
)