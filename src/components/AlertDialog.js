import "./AlertDialog.css";

export default function AlertDialog({ message, onClose, icon }) {
    return (
        <div className="alert-dialog-overlay" onClick={onClose}>
            <div className="alert-dialog" onClick={(e) => e.stopPropagation()}>
                <img className="alert-icon" src={icon}></img>
                <p>{message}</p>
                <button className="alert-button" onClick={onClose}>OK</button>
            </div>
        </div>
    );
}