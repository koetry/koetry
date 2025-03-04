import "./Folder.css";
import { useNavigate } from "react-router-dom";
import maximize from "../res/actions/Maximize.svg";
import minimize from "../res/actions/Minimize.svg";
import close from "../res/actions/Close.svg";
import fileTxt from "../res/windows_components/File_txt.svg";
import pc from "../res/windows_components/PC.svg";
import explorer from "../res/windows_components/Explorer.svg";
import trash from "../res/windows_components/Trash.svg";

export default function Folder() {
    const navigate = useNavigate();
    const catchingYourEyesClick = () => {
        navigate("/koetry/catching_your_eyes");
    };
    const pcClick = () => {
        console.log("pc click");
    };
    const explorerClick = () => {
        console.log("explorer click");
    };
    const trashClick = () => {
        console.log("trash click");
    };

    return (
        <div className="folder">
            <div className="folder-header">
                <span className="title">Title</span>
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
                <button className="folder-item" onClick={catchingYourEyesClick}>
                    <img src={fileTxt} alt="folder" />
                    <span>Ловлю твои глаза.txt</span>
                </button>
                
                <button className="folder-item" onClick={trashClick}>
                    <img src={trash} alt="trash" />
                    <span>Корзина</span>
                </button>
            </div>
        </div>
    );
}