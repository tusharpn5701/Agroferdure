/*import Carousel from 'react-material-ui-carousel';
import { bannerData } from './data';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
	image: {
		width: '100%',
		height: 500
	}
})

const Banner = () => {
	const classes = useStyle();
	return (
		<Carousel
			autoplay={true}
			animation='slide'
			navButtonsAlwaysVisible={true}
			cycleNavigation={true}
		>
		
		    {
			    bannerData.map(image  => (
			    	<img src={image} className={classes.image} /> 
			    ))
		    }
		</Carousel>

	)
}

export default Banner;*/