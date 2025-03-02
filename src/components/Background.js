export default function Background() {
    function Line({ beforeWidth, middleWidth, afterWidth, beforeColor, middleColor, afterColor }) {
        return (
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    flex: 1,
                }}
            >
                <div style={{ width: beforeWidth, backgroundColor: beforeColor }}></div>
                <div style={{ width: middleWidth, backgroundColor: middleColor }}></div>
                <div style={{ width: afterWidth, backgroundColor: afterColor }}></div>
            </div>
        );
    }

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "100vw",
                height: "100vh",
                position: "absolute", // добавляем абсолютное позиционирование
                top: 0, left: 0,
                zIndex: 0, // фон будет на заднем плане
            }}
        >
            <Line beforeWidth="10%" middleWidth="80%" afterWidth="10%" beforeColor="white" middleColor="black" afterColor="white" />
            <Line beforeWidth="10%" middleWidth="80%" afterWidth="10%" beforeColor="white" middleColor="black" afterColor="black" />
            <Line beforeWidth="10%" middleWidth="80%" afterWidth="10%" beforeColor="white" middleColor="black" afterColor="black" />
            <Line beforeWidth="30%" middleWidth="20%" afterWidth="50%" beforeColor="black" middleColor="white" afterColor="black" />
            <Line beforeWidth="30%" middleWidth="40%" afterWidth="30%" beforeColor="white" middleColor="white" afterColor="black" />
            <Line beforeWidth="50%" middleWidth="30%" afterWidth="20%" beforeColor="black" middleColor="white" afterColor="black" />
            <Line beforeWidth="50%" middleWidth="10%" afterWidth="40%" beforeColor="black" middleColor="black" afterColor="black" />
            <Line beforeWidth="50%" middleWidth="20%" afterWidth="30%" beforeColor="black" middleColor="black" afterColor="black" />
        </div>
    );
}