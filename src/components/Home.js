import ReactTypingEffect from 'react-typing-effect';
import PageIntro from "./PageIntro"
import backgroundImage from "../assets/home_pageintro_background.jpg"

export default function Home () {
    return (
        <>
            <PageIntro
                title='Izhar Ahmad'
                subtitle={
                    <ReactTypingEffect
                        text={["Student", "Developer", "Tech Enthuasist"]}
                        typingDelay={0}
                        eraseDelay={1000}
                        staticText="I'm a"
                        speed={100}
                        eraseSpeed={100}
                        displayTextRenderer={(text, i) => {
                            return <span className="page-intro-typer-text">{text}</span>
                        }}
                    />
                }
                backgroundImage={backgroundImage}
            />
        </>
    )
}