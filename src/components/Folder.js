import "./Folder.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import maximize from "../res/actions/Maximize.svg";
import minimize from "../res/actions/Minimize.svg";
import close from "../res/actions/Close.svg";
import folder from "../res/windows_components/Directory.svg";
import pc from "../res/windows_components/PC.svg";
import explorer from "../res/windows_components/Explorer.svg";
import trash from "../res/windows_components/Trash.svg";
import AlertDialog from "../components/AlertDialog";

export default function Folder() {
    const navigate = useNavigate();
    const [alertData, setAlertData] = useState({ message: "", icon: null });
    const [isAlertOpen, setIsAlertOpen] = useState(false);
    
    const showAlert = (message, icon) => {
        setAlertData({ message, icon });
        setIsAlertOpen(true);
    };
    
    const closeAlert = () => {
        setIsAlertOpen(false);
    };
    

    const lettersForDClick = () => {
        navigate("/koetry/letters_for_d");
    };
    const pcClick = () => {
        showAlert("Диск С: заполнен на 90%...", pc);
    };
    const explorerClick = () => {
        showAlert("Нет доступа к интернету...", explorer);
    };
    const trashClick = () => {
        showAlert("Корзина пока пуста, но скоро тут что-нибудь будет...", trash);
    };

    return (
        <div className="folder">
            <div className="folder-header">
                <span className="title">K</span>
                <div className="controls">
                <img className="btn" src={minimize} />
                <img className="btn" src={maximize} />
                <img className="btn" src={close} />
                </div>
            </div>
            <div className="folder-content">
                <button className="folder-item" onClick={pcClick}>
                    <img src={pc} alt="pc" />
                    <span>Мой компьютер</span>
                </button>
                <button className="folder-item" onClick={explorerClick}>
                    <img src={explorer} alt="explorer" />
                    <span>Internet Explorer</span>
                </button>
                <button className="folder-item" onClick={lettersForDClick}>
                    <img src={folder} alt="folder" />
                    <span>Письма для Д.</span>
                </button>
                
                <button className="folder-item" onClick={trashClick}>
                    <img src={trash} alt="trash" />
                    <span>Корзина</span>
                </button>
            </div>
            {isAlertOpen && (<AlertDialog message={alertData.message} icon={alertData.icon} onClose={closeAlert} />)}
        </div>
    );
}