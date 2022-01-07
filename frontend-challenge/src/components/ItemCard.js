import React from 'react';
import '../App.css';
import Modal from './Modal';
import { useState } from 'react';

const ItemCard = ({ item, id }) => {
	console.log('*****', id);
	const [ showModal, setShowModal ] = useState(false);
	const [ isLiked, setIsLiked ] = useState(false);
	const handleLike = (e) => {
		e.preventDefault();
		setIsLiked(!isLiked);
		const like = document.getElementById(`${id}like`);
		if (isLiked) {
			like.style.backgroundColor = '#48A6E8';
			like.style.color = 'white';
		} else {
			like.style.backgroundColor = '#EE4B2B';
			like.style.color = 'white';
		}
	};
	const handleShare = (url) => {
		setShowModal(!showModal);
		console.log('*****', url);
	};

	return (
		<article className="item card">
			<section className="card-body">
				<img src={item.url} width={'100%'} alt={item.title} />

				<h4 style={{ marginTop: '6px' }}>{item.title}</h4>

				<p style={{ marginTop: '7px', fontSize: '10px', letterSpacing: '0px', fontWeight: 'normal' }}>
					{item.explanation}
				</p>
				<div className="row">
					<div className="col-md-6">
						<button
							id={`${id}like`}
							onClick={(e) => handleLike(e)}
							style={{ display: 'inline-block', color: 'white' }}
							className="btn btn-primary"
						>
							{!isLiked ? 'Like 👍🏻' : 'Undo Like 👎🏻'}
						</button>
					</div>
					<div className="col-md-6">
						<button
							id={`${id}share`}
							style={{ display: 'inline-block', color: 'white' }}
							className="btn btn-primary"
							onClick={() => {
								handleShare(item.url);
							}}
						>
							share
						</button>
					</div>
					{showModal && <Modal title={item.title} url={item.url} />}
				</div>
			</section>
		</article>
	);
};

export default ItemCard;
