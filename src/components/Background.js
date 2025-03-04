export default function Background() {
    function Line({ beforeWidth, middleWidth, afterWidth, beforeColor, middleColor, afterColor }) {
        return (
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    flex: 1,
                    position: 'relative',
                    background: `
                        linear-gradient(0deg, ${beforeColor} 50%, ${middleColor} 100%),
                        url(/noise.svg)`, 
                    filter: "contrast(200%) brightness(200%)",
                }}
            >
                <div
                    style={{
                        width: beforeWidth,
                        background: `linear-gradient(to right, ${beforeColor} 50%, ${middleColor} 100%)`,
                        filter: "url(#noiseFilter)",
                        position: 'relative',
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'transparent',
                            filter: 'url(#noiseFilter)',
                        }}
                    />
                </div>
                <div
                    style={{
                        width: middleWidth,
                        background: `linear-gradient(to right, ${middleColor} 50%, ${afterColor} 100%)`,
                        filter: "url(#noiseFilter)",
                        position: 'relative',
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'transparent',
                            filter: 'url(#noiseFilter)',
                        }}
                    />
                </div>
                <div
                    style={{
                        width: afterWidth,
                        background: `linear-gradient(to right, ${afterColor} 70%, ${beforeColor} 100%)`,
                        filter: "url(#noiseFilter)",
                        position: 'relative',
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'transparent',
                            filter: 'url(#noiseFilter)',
                        }}
                    />
                </div>
                <svg style={{ display: 'none' }}>
                    <filter id="noiseFilter">
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.75"
                            numOctaves="5"
                            stitchTiles="stitch"
                        />
                    </filter>
                </svg>
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
                position: "absolute",
                zIndex: 0, 
            }}
        >
            <Line beforeWidth="10%" middleWidth="80%" afterWidth="10%" beforeColor="white" middleColor="black" afterColor="white" />
            <Line beforeWidth="30%" middleWidth="50%" afterWidth="20%" beforeColor="white" middleColor="black" afterColor="black" />
            <Line beforeWidth="10%" middleWidth="80%" afterWidth="10%" beforeColor="white" middleColor="black" afterColor="black" />
            <Line beforeWidth="30%" middleWidth="20%" afterWidth="50%" beforeColor="black" middleColor="white" afterColor="black" />
            <Line beforeWidth="30%" middleWidth="40%" afterWidth="30%" beforeColor="white" middleColor="white" afterColor="black" />
            <Line beforeWidth="50%" middleWidth="30%" afterWidth="20%" beforeColor="black" middleColor="white" afterColor="black" />
            <Line beforeWidth="50%" middleWidth="10%" afterWidth="40%" beforeColor="black" middleColor="black" afterColor="black" />
            <Line beforeWidth="50%" middleWidth="20%" afterWidth="30%" beforeColor="black" middleColor="black" afterColor="black" />
            <Line beforeWidth="10%" middleWidth="80%" afterWidth="10%" beforeColor="white" middleColor="black" afterColor="white" />
            <Line beforeWidth="30%" middleWidth="50%" afterWidth="20%" beforeColor="white" middleColor="black" afterColor="black" />
            <Line beforeWidth="50%" middleWidth="30%" afterWidth="20%" beforeColor="black" middleColor="white" afterColor="black" />
            <Line beforeWidth="50%" middleWidth="10%" afterWidth="40%" beforeColor="black" middleColor="black" afterColor="black" />
            <Line beforeWidth="50%" middleWidth="20%" afterWidth="30%" beforeColor="black" middleColor="black" afterColor="black" />
            <Line beforeWidth="10%" middleWidth="80%" afterWidth="10%" beforeColor="white" middleColor="black" afterColor="black" />
            <Line beforeWidth="30%" middleWidth="20%" afterWidth="50%" beforeColor="black" middleColor="white" afterColor="black" />
            <Line beforeWidth="30%" middleWidth="40%" afterWidth="30%" beforeColor="white" middleColor="white" afterColor="black" />
        </div>
    );
}