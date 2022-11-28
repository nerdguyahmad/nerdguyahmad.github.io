import { useState, useEffect } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import PageIntro from "./PageIntro"
import Section from './Section';
import backgroundImage from "../assets/home_pageintro_background.jpg";
import logo from '../assets/logo.png';
import rawAbout from '../consts/about.txt';

export default function Home () {
    let [about, setAbout] = useState(null);

    useEffect(() => {
        async function getAbout() {
            const aboutContent = await (await fetch(rawAbout)).text();
            setAbout(aboutContent);
        }
        getAbout();
    }, [])

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
                body={about}
                image={logo}
            />
        </>
    )
}