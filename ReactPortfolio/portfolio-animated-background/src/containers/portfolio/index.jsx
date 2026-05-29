import React, { useState } from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from '../../components/pageHeaderContent';
import ImageOne from '../../images/image1.jpg';
import ImageTwo from '../../images/image2.jpg';
import ImageThree from '../../images/image3.jpg';
import ImageFour from '../../images/image4.jpg';
import ImageFive from '../../images/image5.jpg';
import './styles.scss';

const portfolioData = [
    {
        id: 1,
        name: 'Project Name 1',
        image: ImageOne,
        link: 'https://www.google.com',
    },
    {
        id: 2,
        name: 'Project Name 2',
        image: ImageTwo,
        link: 'https://www.google.com',
    },
    {
        id: 3,
        name: 'Project Name 3',
        image: ImageThree,
        link: 'https://www.google.com',
    },
    {
        id: 4,
        name: 'Project Name 4',
        image: ImageFour,
        link: 'https://www.google.com',
    },
    {
        id: 5,
        name: 'Project Name 5',
        image: ImageFive,
        link: 'https://www.google.com',
    },
    {
        id: 6,
        name: 'Project Name 6',
        image: ImageOne,
        link: 'https://www.google.com',
    }
]

const filterData = [
    {
        filterId: 1,
        label: 'All',
    },
    {
        filterId: 2,        
        label: 'Web Design',
    },
    {
        filterId: 3,
        label: 'Mobile App',
    },
]

const Portfolio = () => {
    const [filteredvalue, setFilteredValue] = useState(1);
    const [hoveredValue, setHoveredValue] = useState(null)
        
    function handleFilter(currentId) {
        setFilteredValue(currentId)
    };

    function handleHover(index) {
        setHoveredValue(index)
    }

    const filteredItems = filteredvalue === 1 ? portfolioData :
    portfolioData.filter(item => item.id === filteredvalue)



    return (
        <section id="portfolio" className="portfolio">
            <PageHeaderContent
                headerText="My Portfolio"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="portfolio__content">
                <ul className="portfolio__content__filter">
                    {
                        filterData.map(item => (
                            <li className={item.filterId === filteredvalue ? 'active' : ''} onClick={() =>handleFilter(item.filterId)} key={item.filterId}>
                                {item.label}
                            </li>
                        ))
                    }
                </ul>
                <div className="portfolio__content__cards">
                    {
                        filteredItems.map((item,index) => (
                            <div key={item.id} className="portfolio__content__cards__item"
                                onMouseEnter={() => handleHover(index)}
                                onMouseLeave={() => handleHover(null)}
                            >
                                <div className="portfolio__content__cards__item__img-wrapper">
                                    <a href={item.link} target="_blank" rel="noreferrer">
                                        <img src={item.image} alt={item.name} />
                                    </a>
                                </div>
                                <div className="overlay">
                                    {
                                        index === hoveredValue && (
                                            <div>
                                                <p>{item.name}</p>
                                                <button onClick={() => window.open(item.link, '_blank')}>Visit</button>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </section>
    );
};
export default Portfolio;