import { useNavigate } from "react-router-dom";
import Background from '../components/Background';
import Header from '../components/Header';
import Footer from '../components/Footer';
import File from '../components/File';
import maximize from "../res/actions/Maximize.svg";
import minimize from "../res/actions/Minimize.svg";
import close from "../res/actions/Close.svg";
import fileTxt from "../res/windows_components/File_txt.svg";

export default function LettersForD() {
    const navigate = useNavigate();
    const smileClick = () => {
        navigate("/koetry/letters_for_d/smile");
    };
    const springClick = () => {
        navigate("/koetry/letters_for_d/spring");
    };
    const backClick = () => {
        navigate(-1);
    };

    return (
        <div style={{ height: "100vh", display: "flex", flexDirection: "column", overflow: "hidden" }}>
            <Header word="Письма для Д."/>
            <main style={{
                flexGrow: 1,
                position: "relative",
                zIndex: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
            }}>
                <Background />
                <div className="folder">
                    <div className="folder-header">
                        <span className="title"> Письма для Д.</span>
                        <div className="controls">
                        <img className="btn" src={minimize} />
                        <img className="btn" src={maximize} />
                        <img className="btn" src={close} onClick={backClick} />
                        </div>
                    </div>
                    <div className="folder-content">
                        <button className="folder-item" onClick={smileClick}>
                            <img src={fileTxt} />
                            <span>Улыбка.txt</span>
                        </button>
                        <button className="folder-item" onClick={springClick}>
                            <img src={fileTxt} />
                            <span>Весна.txt</span>
                        </button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}