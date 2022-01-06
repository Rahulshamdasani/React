import React from 'react';
import '../App.css';
import { useState, useEffect } from 'react';
const ItemCard = ({ item, id }) => {
	console.log('*****', id);
	const [ isLiked, setIsLiked ] = useState(false);
	const handleLike = () => {
		setIsLiked(!isLiked);
		const like = document.getElementById(`${id}like`);
		if (isLiked) {
			like.style.backgroundColor = 'blue';
			like.style.color = 'white';
		} else {
			like.style.backgroundColor = 'red';
			like.style.color = 'white';
		}
	};

	return (
		<article className="item card">
			<section className="card-body">
				<img src={item.url} width={'100%'} alt={item.title} />

				<h4 style={{ marginTop: '6px' }}>{item.title}</h4>

				<p style={{ marginTop: '7px', fontSize: '10px', letterSpacing: '0px', fontWeight: 'normal' }}>
					{item.explanation}
				</p>
				<button
					id={`${id}like`}
					onClick={handleLike}
					style={{ display: 'inline-block', color: 'white' }}
					className="btn btn-primary likeBtn"
				>
					{!isLiked ? 'Like 👍🏻' : 'Undo Like 👎🏻'}
				</button>
			</section>
		</article>
	);
};

export default ItemCard;
