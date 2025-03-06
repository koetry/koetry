import Background from '../components/Background';
import Header from '../components/Header';
import Footer from '../components/Footer';
import File from '../components/File';

export default function Smile() {
    const sep = "\n";
    const p1 = "Ловлю твои зрачки своими в темноте.\nЛюблю, когда твоя улыбка сияет ярче всех других вдвойне";

    const text = p1 + sep;

    return (
        <div style={{ height: "100vh", display: "flex", flexDirection: "column", overflow: "hidden" }}>
            <Header word="Улыбка"/>
            <main style={{
                flexGrow: 1,
                position: "relative",
                zIndex: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
            }}>
                <Background />
                <File title="Улыбка.txt" text={text}/>
            </main>
            <Footer />
        </div>
    );
}