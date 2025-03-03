import "./Folder.css";
import maximize from "../res/Maximize.svg";
import minimize from "../res/Minimize.svg";
import close from "../res/Close.svg";
import folder from "../res/Folder.svg";

export default function Folder() {
    const handleClick = () => {
        
        console.log("Navigating to folder...");
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
                <button className="folder-item" onClick={handleClick}>
                    <img src={folder} alt="folder" />
                    <span>08.03.2025</span>
                </button>
            </div>
        </div>
    );
}