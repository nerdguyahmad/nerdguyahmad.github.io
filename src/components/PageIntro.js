import '../styles/PageIntro.css';

export default function PageIntro ({ title, subtitle, backgroundImage, style }) {
    if(!style) {
        style = {}
    }

    style.backgroundImage = `linear-gradient(rgba(255, 255, 255, 0.055),
                                             rgba(255, 255, 255, 0.048)),
                                            url(${backgroundImage})`

    return (
        <div className="PageIntro" style={style}>
            <h1 className="page-intro-title">{title}</h1>
            <h2 className="page-intro-subtitle">{subtitle}</h2>
        </div>
    )
}
