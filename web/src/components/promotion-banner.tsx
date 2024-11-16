import React from 'react';
import promotionImage from '../../assets/promotion.png?preset=default';
import Image from './image.js';

const PromotionBanner: React.FC = () => {
	return (
		<label htmlFor="promotion-open" role="button">
			<Image
				className="block w-full max-w-[30rem] mx-auto"
				src={promotionImage}
				alt="친구 추천 이벤트"
			/>
		</label>
	);
};

export default PromotionBanner;
