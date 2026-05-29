import React, { useState, useEffect } from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from '../../components/pageHeaderContent';
import { Line } from 'rc-progress';
import { Animate } from 'react-simple-animate';
import { skillsData } from './utils';
import './styles.scss';

const Skills = () => {
    const [animateBars, setAnimateBars] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setAnimateBars(true), 800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="skills" className="skills">
            <PageHeaderContent
                headerText="My Skills"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="skills__content-wrapper">
                {
                    skillsData.map((item,i)=> (
                    <div key={i} className="skills__content-wrapper__inner-content">
                        <Animate
                            play
                            duration={1}
                            delay={0.3}
                            start={{ opacity: 0 }}
                            end={{ opacity: 1 }}
                        >
                            <h3 className="skills__content-wrapper__inner-content__category-text">{item.label}</h3>
                            <div className="skills__content-wrapper__inner-content__progressbar-container">
                                {
                                    item.data.map((skillItem ,j) => (
                                        <div key={j} className="progressbar-wrapper">
                                            <p>{skillItem.skillName}</p>
                                            <Line 
                                            percentage={animateBars ? skillItem.percentage : 0}
                                            strokeWidth={8}
                                            strokeColor="var(--yellow-theme-main-color)"
                                            trailWidth={8}
                                            strokeLinecap="square"
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                        </Animate>
                    </div>
                    ))
                }
            </div>
        </section>
    );
};
export default Skills;