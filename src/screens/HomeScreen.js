import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Banner from '../assets/images/Banner.png';
import BannerMobile from '../assets/images/Banner-Mobile.png';
import CategoryCard from '../components/cards/CategoryCard';
import { getCategories } from "../redux/categories/operations";

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
						<Link to={{ pathname: "sign-in", search: 'type=female' }} className='brandw'>Shop Women's</Link>
						<Link to={{ pathname: "sign-in", search: 'type=male' }} className='brandw'>Shop Men's</Link>
					</div>
			</div>
            <div className='divcata'>
                <p className='cata'>Categories</p>
            <Row className='ilk' size={2}>
            {categories.slice( 0, 2 ).map((c, index) => (
                    <Col key={index}>
                        <CategoryCard data={c}/>
                    </Col>
                                ))}
            {categories.slice( 2, 4 ).map((c, index) => (
                    <Col key={index}>
                        <CategoryCard data={c}/>
                    </Col>
                                ))}
            </Row>
            </div>
                <div>
                    <p className='offer'>Offers</p>
                </div>
    </div>
    )
};

export default HomeScreen
