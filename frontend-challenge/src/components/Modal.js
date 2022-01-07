import React from 'react';
import {
	EmailShareButton,
	EmailIcon,
	FacebookShareButton,
	FacebookIcon,
	LinkedinShareButton,
	LinkedinIcon
} from 'react-share';

const Modal = ({ title, url }) => {
	let mar = '10px';
	let size = 64;
	return (
		<div className="item">
			<section>
				<EmailShareButton subject={title} url={url} body={(title, url)}>
					<EmailIcon size={size} round={true} style={{ margin: mar }} />
				</EmailShareButton>
			</section>
			<section>
				<FacebookShareButton quote={title} url={url} hashtag={title}>
					<FacebookIcon size={size} round={true} style={{ margin: mar }} />
				</FacebookShareButton>
			</section>
			<section>
				<LinkedinShareButton url={url} title={title} source={url} summary={title}>
					<LinkedinIcon size={size} round={true} style={{ margin: mar }} />
				</LinkedinShareButton>
			</section>
		</div>
	);
};

export default Modal;
