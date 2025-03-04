import Background from '../components/Background';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CatchingYourEyes() {
    return (
        <div style={{ height: "100vh", display: "flex", flexDirection: "column", overflow: "hidden" }}>
            <Header word="Ловлю"/>
            <main style={{
                flexGrow: 1,
                position: "relative",
                zIndex: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
            }}>
                {/* <Background /> */}
            </main>
            <Footer />
        </div>
    );
}