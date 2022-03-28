import React from 'react'
import { Container } from 'react-bootstrap'
import Banner from '../assets/images/Banner.png'
import BannerMobile from '../assets/images/Banner-Mobile.png'

export function HomeScreen() {

    return (
        <div>
            <div className='Banner'>
            <img className='bannerimage' src={ Banner } alt='HiveBanner'/>
            <img className='bannermobile' src={BannerMobile} alt="MobileBanner" />
            <div className="bannertext">
				<p>Clothing Divine Getting</p>
				<p>Everyone's Favorite</p>
				<p>This Season's most - loved Styles</p>
			</div>
            </div>
            <Container>

            </Container>
        </div>
    )
}

export default HomeScreen
