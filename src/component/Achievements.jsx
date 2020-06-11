import React, { Component } from 'react';
import pwa from '../assets/carpigiani.jpeg';
import cssJs from '../assets/ice2.jpg';
import mongoDB from '../assets/freezer300.jpeg';
import HackathonImg from '../assets/batch.jpeg';
import piaicLogo from '../assets/homog.jpeg';
import mernStack from '../assets/fruit.jpeg';
import './Style.css';


class Achievements extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [
                // { img: cssJs, cardName: 'Soft Ice Cream Machine', cardDetail: 'Completed Certification from SoloLearn Online Certificates.', url: 'https://docs.google.com/document/d/1M4eizHf59opxN_nI9eFGvrb7PtK6RB1rjSvOh0UT9fI/edit' },
                { img: pwa, cardName: 'Soft Ice Cream Machine', cardDetail: 'Cone ice cream machine with gear air pump softener And harder options auto clean system low mixer alert cone counter night mode etc' },
                { img: mongoDB, cardName: 'Continuous Freezer Machine', cardDetail: 'Material and components of the highest quality design to grant relaible and long lasting operations, easy access to components for maintance', url: 'http://university.mongodb.com/course_completion/9d58d436-974e-47ef-bf01-d3ce51df6634' },
                { img: mernStack, cardName: 'Fruit Feeder Machine', cardDetail: 'Fruit mix in ice cream, like dry fruit, nuts etc', url: 'https://drive.google.com/file/d/1zG9-32rYGH_UyxlZEPp9zopQXIqykzte/view' },
                { img: HackathonImg, cardName: 'Batch Freezer Machine', cardDetail: 'Carpigiani Labotronic machine is simple to operate, clean, and reassemble and rival free-standing floor models for their output, product quality, and efficiency. in Pakistan', url: 'https://drive.google.com/file/d/1cSGXj2jSmhzGkx2oRFgfeTBM9pCeXU9f/view' },
                { img: piaicLogo, cardName: 'Homogenizer Machine', cardDetail: 'Milk processing machine, use in milk, syrup, bevarage etc', url: 'https://drive.google.com/file/d/1sj-Wyzwr1KZVFa1-Shclnd7dJ6TJY1zt/view' },

            ]
        };
    }

    clickHandle(url) {
        var win = window.open(url, "_blank");
        win.focus();
    }

    render() {
        const { arr } = this.state
        return (
            <div className='Achievements' >
                <p className='AchievementsHeading'>Gelato and Soft ice cream machine</p>
                <div className='AchievementsMain'>
                    {
                        arr && arr.map((item, index) => {
                            return (

                                <div className='AchievementsCard' key={index}>
                                    <div>
                                        <img src={item.img} className='AchievementsImages' />
                                    </div>
                                    <p className='skillCardName'>{item.cardName}</p>
                                    <span className='skillEM'>{item.cardDetail}</span>
                                    {/* <div className='AchievementsCardBtn'>
                                        <p className='viewBtn' onClick={() => this.clickHandle(item.url)}>VIEW</p>
                                    </div> */}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Achievements;