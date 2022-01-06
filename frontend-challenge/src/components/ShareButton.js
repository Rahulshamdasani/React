import React from 'react';

const ShareButton = () => {
	return (
		<div className="container">
			<div class="share-dialog">
				<header>
					<h3 class="dialog-title">Share this pen</h3>
					<button class="close-button">
						<svg>
							<use href="#close" />
						</svg>
					</button>
				</header>
				<div class="targets">
					<a class="button">
						<svg>
							<use href="#facebook" />
						</svg>
						<span>Facebook</span>
					</a>

					<a class="button">
						<svg>
							<use href="#twitter" />
						</svg>
						<span>Twitter</span>
					</a>

					<a class="button">
						<svg>
							<use href="#linkedin" />
						</svg>
						<span>LinkedIn</span>
					</a>

					<a class="button">
						<svg>
							<use href="#email" />
						</svg>
						<span>Email</span>
					</a>
				</div>
				<div class="link">
					<div class="pen-url">https://codepen.io/ayoisaiah/pen/YbNazJ</div>
					<button class="copy-link">Copy Link</button>
				</div>
			</div>

			<button class="share-button" type="button" title="Share this article">
				<svg>
					<use href="#share-icon" />
				</svg>
				<span>Share</span>
			</button>

			<svg class="hidden">
				<defs>
					<symbol
						id="share-icon"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-share"
					>
						<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
						<polyline points="16 6 12 2 8 6" />
						<line x1="12" y1="2" x2="12" y2="15" />
					</symbol>

					<symbol
						id="facebook"
						viewBox="0 0 24 24"
						fill="#3b5998"
						stroke="#3b5998"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-facebook"
					>
						<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
					</symbol>

					<symbol
						id="twitter"
						viewBox="0 0 24 24"
						fill="#1da1f2"
						stroke="#1da1f2"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-twitter"
					>
						<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
					</symbol>

					<symbol
						id="email"
						viewBox="0 0 24 24"
						fill="#777"
						stroke="#fafafa"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-mail"
					>
						<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
						<polyline points="22,6 12,13 2,6" />
					</symbol>

					<symbol
						id="linkedin"
						viewBox="0 0 24 24"
						fill="#0077B5"
						stroke="#0077B5"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-linkedin"
					>
						<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
						<rect x="2" y="9" width="4" height="12" />
						<circle cx="4" cy="4" r="2" />
					</symbol>

					<symbol
						id="close"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-x-square"
					>
						<rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
						<line x1="9" y1="9" x2="15" y2="15" />
						<line x1="15" y1="9" x2="9" y2="15" />
					</symbol>
				</defs>
			</svg>
		</div>
	);
};

export default ShareButton;
