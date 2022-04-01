import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Banner from '../assets/images/Banner.png';
import BannerMobile from '../assets/images/Banner-Mobile.png';
import Ilk from '../components/cards/Ilk';
import Loader from '../components/default/Loader';
import Message from '../components/default/Message';
import kidneys from '../kidneys';

export function HomeScreen() {

    return (
        <div>
        <div className='Banner'>
            <img className='bannerimage' src={ Banner } alt='HiveBanner'/>
            <img className='bannermobile' src={BannerMobile} alt="MobileBanner" />
            <div className="bannertext">
                <div className='bannertxt1'>
				<p>Clothing Divine Getting</p>
				<p>Everyone's Favorite</p>
                </div>
                <div className='bannertxt2'>
				<p>This Season's most - loved Styles</p>
                </div>
			</div>
        </div>
            <div className="brand">
					<p>Get Up To 50% off </p>
					<p>On all products and brands</p>
					<div className='brandlink'>
						<Link to={{ pathname: "sign-in", search: 'type=female' }} className='brandw'>Shop Women's</Link>
						<Link to={{ pathname: "sign-in", search: 'type=male' }} className='brandw'>Shop Men's</Link>
					</div>
			</div>
            <div className='divcata'>
                <p className='cata'>Categories</p>
                <Row className='ilk' size={2}>
                {kidneys.slice(0,2).map ((kidney) => {
                    return (
                    <div>
                    <Col key={kidney._id} size={2}>
                      <Ilk kidney={kidney} />
                    </Col>
                    </div>
                )})};
                <br />
                {kidneys.slice(2,4).map ((kidney) => {
                    return (
                    <div>
                    <Col key={kidney._id}>
                      <Ilk kidney={kidney} />
                    </Col>
                    </div>
                )})};
                </Row>
            </div>
            <div>
                <p className='offer'>Offers</p>
            </div>
        </div>
        
                            
	);
}

export default HomeScreen
