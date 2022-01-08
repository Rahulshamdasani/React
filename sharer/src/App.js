import './App.css';
import React, { useState } from 'react';
import {
	EmailShareButton,
	FacebookIcon,
	FacebookShareButton,
	LinkedinShareButton,
	RedditShareButton,
	TelegramShareButton,
	TwitterShareButton,
	WhatsappShareButton
} from 'react-share';

function App() {
	const [ show, setShow ] = useState(false);
	const handleShare = () => {
		console.log('share');
		setShow(!show);
	};
	return (
		<div className="App">
			<div>
				<FacebookShareButton
					quote="Rahul"
					url="https://github.com/Rahulshamdasani/Java-Learnings"
					hashtag="https://github.com/Rahulshamdasani/Java-Learnings"
				>
					<FacebookIcon size={32} round />
				</FacebookShareButton>
			</div>
		</div>
	);
}

export default App;
