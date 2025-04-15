import Background from '../components/Background';
import Header from '../components/Header';
import Footer from '../components/Footer';
import File from '../components/File';

export default function Spring() {
    const sep = "\n"
    const p1 = "@(*$0972=12*^(-12=-42e98162\n";
    const p2 = "***;:(?7)(?%!_+_+_@###\n";
    const text = p1 + sep + p2;

    return (
        <div style={{ height: "100vh", display: "flex", flexDirection: "column", overflow: "hidden" }}>
            <Header word="Весна"/>
            <main style={{
                flexGrow: 1,
                position: "relative",
                zIndex: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
            }}>
                <Background />
                <File title="Весна.txt" text={text}/>
            </main>
            <Footer />
        </div>
    );
}
