import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.yelp.com/v3/businesses',
	headers: {
		Authorization:
			'Bearer xVq_M34y88SI5rfYZATx4G6DEBL0_tfe426qNVjJdr-WEfH1KtL2-YqN9oXx3ym00NHELu0iptBV_tozJoqK-qxliXW3ANZ6i_1J3b3XK20g3jWzZ6xhAoTfhxE2XnYx'
	}
});
