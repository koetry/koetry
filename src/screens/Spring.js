import Background from '../components/Background';
import Header from '../components/Header';
import Footer from '../components/Footer';
import File from '../components/File';

export default function Spring() {
    const sep = "\n"
    const p1 = "Одна только ты знаешь,\nКогда приходит весна,\nКогда тает снег, когда солнце\nТеплым светом наполняет глаза.\n";
    const p2 = "Когда город отпустит зиму,\nКак блестящий растает снег,\nКогда краски наполнят палитру\nИ цветной напишут портрет.\n";
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