import React from 'react';
import HomeCard from './HomeCard';
import { pages } from './pageData';
const Home = () => {
	return (
		<div className="container" style={{ width: '70vw' }}>
			<div className="">
				{pages.map((page, index) => {
					return (
						<div className="mt-5" key={index}>
							<HomeCard
								title={page.title}
								description={page.description}
								moreDetails={page.moreDetails}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Home;
