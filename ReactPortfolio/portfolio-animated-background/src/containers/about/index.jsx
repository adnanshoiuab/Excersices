import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import './styles.scss';
import PageHeaderContent from '../../components/pageHeaderContent';
import { Animate } from 'react-simple-animate';
import { DiJavascript1, DiReact } from 'react-icons/di';
import { FaDev, FaDatabase } from 'react-icons/fa';


const personalDetails = [
    {
        label: 'Name',
        value: 'Adnan Shouiab'
    },
    {
        label: 'Age',
        value: '23',
    },
    {
        label: 'Address',
        value: 'Damascus, Syria',
    },
    {
        label: 'Email',
        value: 'adnanshouiab0081@gmail.com',
    },
    {
        label: 'Phone',
        value: '+963 954 538 025',
    }
];

const jobSummary = "I am a Full Stack Web Developer with a passion for creating dynamic and responsive web applications. With a strong foundation in both front-end and back-end technologies, I enjoy crafting seamless user experiences and efficient server-side solutions. My goal is to continuously learn and grow in the ever-evolving world of web development, while contributing to innovative projects that make a positive impact.";



const About = () => {
    return (
        <section id="about" className="about">
            <PageHeaderContent
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="about__content">
                <div className="about__content__personalWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{ transform: 'translateX(100px)', opacity: 0 }}
                        end={{ transform: 'translateX(0px)', opacity: 1 }}
                    >
                        <h3>full stack web developer</h3>
                        <p>{jobSummary}</p>

                        <h3 className="personalInformationHeaderText">Personal Details</h3>
                        <ul>
                            {personalDetails.map((item, i) => (
                                <li key={i}>
                                    <span className="title">{item.label}:</span>
                                    <span className="value">{item.value}</span>
                                </li>
                            ))}
                        </ul>
                    </Animate>
                </div>
                <div className="about__content__servicesWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(500px)',
                        }}
                        end={{
                            transform: 'translateX(0px)',
                        }}
                    >
                        <div className="about__content__servicesWrapper__innerContent">
                            <div><FaDev size={60} color="var(--yellow-theme-main-color)" /></div>
                            <div><FaDatabase size={60} color="var(--yellow-theme-main-color)" /></div>
                            <div><DiJavascript1 size={60} color="var(--yellow-theme-main-color)" /></div>
                            <div><DiReact size={60} color="var(--yellow-theme-main-color)" /></div>
                        </div>
                    </Animate>
                </div>
            </div>
        </section>
    );
}
export default About;