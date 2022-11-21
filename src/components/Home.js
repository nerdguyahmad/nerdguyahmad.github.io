import ReactTypingEffect from 'react-typing-effect';
import PageIntro from "./PageIntro"
import Section from './Section';
import backgroundImage from "../assets/home_pageintro_background.jpg";
import logo from '../assets/logo.png';

export default function Home () {
    return (
        <>
            <PageIntro
                title='Izhar Ahmad'
                subtitle={
                    <ReactTypingEffect
                        text={["Student", "Developer", "Tech Enthusiast"]}
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
            <Section
                title="About Me"
                body={
                    `Hi! I'm Izhar Ahmad often known as "Izxxr" on the internet. I'm a student who `+
                    `is also a passionate developer. My interests are networking, backend web development`+
                    `and automation. I'm a proficient in Python and JavaScript with some experience `+
                    `in various languages such as Rust and Go. I like spending hours automating tasks `+
                    `that could've been achieved in matter of minutes.\n\n`+
                    `Due to my interest in automation, I also create bots on Discord and various other `+
                    `platforms to automate basic tasks. I have created many bots on Discord for community and personal `+
                    `servers that are serving thousands of users.\n\n`+
                    `I'm also a freelancer who is open for commissions and will be glad to work on any projects `+
                    `related to backend web development, automation or bot development. Feel free to contact me to discuss regarding this.`
                }
                image={logo}
            />
        </>
    )
}