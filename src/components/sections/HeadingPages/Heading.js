import {Link} from 'react-router-dom';

export default function Heading() {
    return (
        <header>
            <article className="call-to-action">
                <section className="hero-text">
                    <h1>Little Lemon</h1>
                    <h2>Foz do Iguaçu</h2>
                    <p className="subsection">We are a family owned Mediterranean restaurant, located on Pedro Basso Street in Foz do Iguçu, Paraná. We focus
                    on traditional recipes served with a modern twist.</p>
                    <br></br>
                    <Link className="action-button" to="/reservations">Reserve a table</Link>
                </section>
                <section className="hero-image">
                    <img src={require('../../../assets/food/food1.png')} alt="Little Lemon restaurant cuisine"></img>
                </section>
            </article>
        </header>
    );
}