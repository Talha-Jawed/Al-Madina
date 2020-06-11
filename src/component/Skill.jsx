import React, { Component } from 'react';
import webImg from '../assets/hardLogo.png'
import mobImg from '../assets/iceLogo.png'
import apiImg from '../assets/importer.png'
import databaseImg from '../assets/databas.png'
import cloudImg from '../assets/cloud.png'
import { Spring } from 'react-spring/renderprops'
import './Style.css';

class Skill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [
                {
                    image: webImg,
                    name: 'Hard Ice Cream Machine',
                    detail: 'Latest new style gelato batch freezer coming up with fast production and more smoothness.'
                },
                {
                    image: mobImg,
                    name: 'Soft Ice Cream Machine',
                    detail: 'Double flavor cone ice cream machine item make an excellent addition to any restaurant, diner, concession stand, or ice cream shop.'
                },
                {
                    image: apiImg,
                    name: 'Importer & Dealer',
                    detail: 'Deals in all ice cream equipments and import'
                },
                // {
                //     image: databaseImg,
                //     name: 'Database Design',
                //     detail: 'Database architectures in Firebase, MongoDB, always aiming for performance, scale and stability.'
                // },
                // {
                //     image: cloudImg,
                //     name: 'Cloud Integration',
                //     detail: 'Deployment of ReactJS & React-Native apps and databases to leading cloud platforms such as Heroku.'
                // }
            ]
        };
    }
    render() {
        const { arr } = this.state;
        return (
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
            >{props => (
                <div className='skill' style={props}>
                    <p className='skillHeading'>WHAT I DO</p>
                    <em className='skillEM'>Sale Purchase ice cream machinery and import</em>
                    <div className='skillCardMain' >
                        {arr && arr.map((item, index) => {
                            return (
                                <div className='skillCard' key={index} >
                                    <div className='skillCardImg'>
                                        <img src={item.image} className='skillImg' />
                                    </div>
                                    <p className='skillCardName'>{item.name}</p>
                                    <div>
                                        <p className='skillCardDetail'>{item.detail}</p>
                                    </div>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
            )}

            </Spring>
        );
    }
}

export default Skill;