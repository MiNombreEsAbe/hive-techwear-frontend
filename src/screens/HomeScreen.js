import React from 'react'
import { Container } from 'react-bootstrap'
import Banner from '../assets/images/Banner.png'
import BannerMobile from '../assets/images/Banner-Mobile.png'
import Header from '../components/default/Header'

export function HomeScreen() {

    return (
        <div>
            <Header />
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
            <Container>

            </Container>
        </div>
    )
}

export default HomeScreen
