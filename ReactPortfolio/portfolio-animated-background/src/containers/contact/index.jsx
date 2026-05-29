import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from '../../components/pageHeaderContent';
import { Animate } from 'react-simple-animate';
import './styles.scss';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <PageHeaderContent
                headerText="My Contact"
                icon={<BsInfoCircleFill size={40} />}
            />
                <div className="contact__content">
                    <Animate
                        play
                        duration={1}
                        delay={0}
                        start={{ transform: 'translateX(-200px)' }}
                        end={{ transform: 'translateX(0px)' }}
                    >
                        <h3 className="contact__content__header-text">Let's Connect</h3>
                    </Animate>
                    <Animate
                        play
                        duration={1}
                        delay={0}
                        start={{ transform: 'translateX(200px)' }}
                        end={{ transform: 'translateX(0px)' }}
                    >
                        <div className="contact__content__form">
                            <div className="contact__content__form__controlswrapper">
                                <div className="nameWrapper">
                                    <input required type="text" id="name" name="name" className="nameInput" />
                                    <label className="nameLabel" htmlFor="name">
                                        Name
                                    </label>
                                </div>
                                <div className="emailWrapper">
                                    <input required type="email" id="email" name="email" className="emailInput" />
                                    <label className="emailLabel" htmlFor="email">
                                        Email
                                    </label>
                                </div>
                                <div className="descriptionWrapper">
                                    <textarea required id="description" name="description" className="descriptionInput" rows="5"></textarea>
                                    <label className="descriptionLabel" htmlFor="description">
                                        description
                                    </label>
                                </div>
                            </div>
                            <button>Submit</button>
                        </div>
                    </Animate>
                </div>
        </section>
    );
};
export default Contact;