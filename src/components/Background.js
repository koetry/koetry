export default function Background() {
    function Line({ colorFrom, colorTo }) {
        return (
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    flex: 1,
                    position: 'relative',
                    background: `linear-gradient(135deg, ${colorFrom} 0%, ${colorTo} 50%, ${colorFrom} 100%)`, 
                    filter: "contrast(150%) brightness(200%)",
                }}
            >
                <div
                    style={{
                        width: "100%",
                        position: 'relative',
                    }}>
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
            <Line colorFrom="black" colorTo="white" />
            <Line colorFrom="gray" colorTo="black" />
            <Line colorFrom="black" colorTo="white" />
            <Line colorFrom="gray" colorTo="black" />
            <Line colorFrom="black" colorTo="white" />
            <Line colorFrom="gray" colorTo="black" />
            <Line colorFrom="black" colorTo="white" />
            <Line colorFrom="gray" colorTo="black" />
        </div>
    );
}