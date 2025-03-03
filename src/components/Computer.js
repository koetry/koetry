import pc from "../res/computer.svg";
export default function Computer() {
    return (
        <div style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            zIndex: 15,
        }}>
            <img src={pc} style={{ width: "max(16vw, 20vh)", height: "auto" }} />
        </div>
    );
}