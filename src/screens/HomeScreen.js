import Background from '../components/Background';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Folder from '../components/Folder';

export default function HomeScreen() {
    return (
        <div style={{ height: "100vh", display: "flex", flexDirection: "column", overflow: "hidden" }}>
            <Header />
            <main style={{
                flexGrow: 1,
                position: "relative",
                zIndex: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
            }}>
                <Background />
                <Folder />
            </main>
            <Footer />
        </div>
    );
}
