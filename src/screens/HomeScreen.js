import Background from '../components/Background';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Computer from '../components/Computer';
import Folder from '../components/Folder';

export default function HomeScreen() {
    return (
        <div style={{ height: "100vh", display: "flex", flexDirection: "column", overflow: "hidden" }}>
            <Header />
            <main style={{
                flexGrow: 1,
                position: "relative",
                zIndex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                paddingTop: "4vh"
            }}>
                <Background />
                <Folder />
            </main>
            <Computer />
            <Footer />
        </div>
    );
}
