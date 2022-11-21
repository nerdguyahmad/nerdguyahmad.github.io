import '../styles/Section.css';

export default function Section ({title, body, image, imageAlt, backgroundImage, reversed}) {
    return (
        <div className="section" style={{backgroundImage: backgroundImage}}>
            <div className={`section-content ${reversed ? 'reversed' : ''}`}>
                <div>
                    <h1 className="section-title">{title}</h1>
                    <hr />
                    <p className="section-body">{body}</p>
                </div>
                <img className="section-image" src={image} alt={imageAlt ? imageAlt : ""} />
            </div>
        </div>
    )
}
