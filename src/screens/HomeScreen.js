import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Banner from '../assets/images/Banner.png';
import BannerMobile from '../assets/images/Banner-Mobile.png';
import CategoryCard from '../components/cards/CategoryCard';
import { getCategories } from "../redux/categories/operations";
import Deal1 from "../assets/images/offer001.png";
import Deal2 from "../assets/images/offer002.png";
import Deal3 from "../assets/images/offer003.png";
import Deal4 from "../assets/images/offer004.png";

export function HomeScreen() {
	const dispatch = useDispatch();
	const selector = useSelector((state) => state);
    const categories = selector.categories;


	useEffect(() => {
		dispatch(getCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
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
						<Link to="/female" className='brandw'>Shop Women's</Link>
						<Link to="/male" className='brandw'>Shop Men's</Link>
					</div>
			</div>
            <div className='divcata'>
                <p className='cata'>Categories</p>
            <Row className='ilk' >
				<div>
            {categories.slice( 0, 2 ).map((c, index) => (
                    <Col key={index} sm={50} md={20} lg={14} xl={15}>
                        <CategoryCard data={c}/>
                    </Col>
                                ))}
				</div>
				<div>
            {categories.slice( 2, 4 ).map((c, index) => (
                    <Col key={index} sm={13} md={13} lg={13} xl={13}>
                        <CategoryCard data={c}/>
                    </Col>
                                ))}
				</div>
            </Row>
            </div>
        <div className="divoff">
		<p className="offerT">Offers</p>
		<div className="offers">
			<div className="itemsO">
				<img className="imageO" src={Deal1} alt="" />
				<div className="offerTx">
					<p>UP TO 25% OFF</p>
					<p>On all the T-Shirt brands</p>
				</div>
				<button className="obtn o-001">GET NOW</button>
			</div>
			<div className="itemsO">
				<img className="imageO" src={Deal2} alt="" />
				<div className="offerTx">
					<p>UP TO 35% OFF</p>
					<p>On all the Hat brands</p>
				</div>
				<button className="obtn o-002">GET NOW</button>
			</div>
		<div className="itemsO">
				<img className="imageO" src={Deal3} alt="" />
				<div className="offerTx">
					<p>UP TO 50% OFF</p>
					<p>On all the Bottom brands</p>
				</div>
				<button className="obtn o-003">GET NOW</button>
			</div>
			<div className="itemsO">
				<img className="imageO" src={Deal4} alt="" />
				<div className="offerTx">
					<p>UP TO 75% OFF</p>
					<p>On all the Shirt brands</p>
				</div>
				<button className="obtn o-004">GET NOW</button>
    		</div>
		</div>
    </div>
    </div>
)
};

export default HomeScreen
