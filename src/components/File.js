import "./File.css";
import maximize from "../res/actions/Maximize.svg";
import minimize from "../res/actions/Minimize.svg";
import close from "../res/actions/Close.svg";
import { useNavigate } from "react-router-dom";

export default function File({title, text}) {

    const navigate = useNavigate();
    const backClick = () => {
        navigate(-1);
    };

    const textLines = text.split('\n');

    return (
        <div className="file">
            <div className="file-header">
                <span className="title">{title}</span>
                <div className="controls">
                    <img className="btn" src={minimize} />
                    <img className="btn" src={maximize} />
                    <img className="btn" src={close} onClick={backClick} />
                </div>
            </div>
            <div className="file-actions">
                <span>File</span>
                <span>Edit</span>
                <span>View</span>
                <span>Help</span>
            </div>
            <div className="text">
                {textLines.map((line, index) => (
                    <span key={index}>{line}</span>
                ))}
            </div>
        </div>
    );
}