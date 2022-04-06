import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Banner from '../assets/images/Banner.png';
import BannerMobile from '../assets/images/Banner-Mobile.png';
import Loader from '../components/default/Loader';
import Message from '../components/default/Message';
import CategoryCard from '../components/cards/CategoryCard';
import Empty from "../components/default/Empty";
import { getCategories } from "../redux/categories/operations";
import { fetchCategories } from "../redux/categories/selectors";

export function HomeScreen( loading, error ) {
	const dispatch = useDispatch();
	const selector = useSelector((state) => state);
	const categories = fetchCategories(selector);

	useEffect(() => {
		dispatch(getCategories());

	}, [dispatch]);
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
            <Row className='ilk'>
            {categories.results && categories.results.length > 0 ? (
				categories.results.map((c, index) => <CategoryCard key={index} data={c} />)
				) : (
					<Empty />
				)}
            </Row>
            </div>
                <div>
                    <p className='offer'>Offers</p>
                </div>
    </div>
    )
};

export default HomeScreen
