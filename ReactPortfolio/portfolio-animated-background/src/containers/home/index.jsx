import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Animate } from 'react-simple-animate';
import './styles.scss';

const Home = () => {

    const navigate = useNavigate();

    const handleNavigateToContactMePage = () => {
        navigate('/contact');
    }
    return (
        <section id="home" className="home">
            <div className="home__text-wrapper">
                <h1>
                    Hello, I'm Adnan. <br />
                    I'm a Full Stack Developer. <br />
                </h1>
            </div>
            <Animate
                play
                duration={1.5}
                delay={1}
                start={{ transform: 'translateY(100px)', opacity: 0 }}
                end={{ transform: 'translateY(0px)', opacity: 1 }}
            >
                <div className="home__contact-me">
                    <button onClick={handleNavigateToContactMePage}>Hire me</button>
                </div>
            </Animate>
        </section>
    )
}

export default Home;