import "./Folder.css";
import maximize from "../res/Maximize.svg";
import minimize from "../res/Minimize.svg";
import close from "../res/Close.svg";
import folder from "../res/Folder.svg";
import { useNavigate } from "react-router-dom";

export default function Folder() {
    const navigate = useNavigate();
    const catchingYourEyesClick = () => {
        navigate("/koetry/catching_your_eyes");
    };

    return (
        <div className="folder">
            <div className="folder-header">
                <span className="title">Title</span>
                <div className="controls">
                <img src={minimize} />
                <img src={maximize} />
                <img src={close} />
                </div>
            </div>
            <div className="folder-content">
                <button className="folder-item" onClick={catchingYourEyesClick}>
                    <img src={folder} alt="folder" />
                    <span>Ловлю</span>
                </button>
            </div>
        </div>
    );
}