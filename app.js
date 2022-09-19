let btn = document.querySelector('#btn');
let parent = document.querySelector('#parent');
let photo_new = document.createElement('img');
parent.appendChild(photo_new);

setInterval(() => {
	fetch('https://api.thecatapi.com/v1/images/search')
		.then((result) => result.json())
		.then((data) => data.map((item) => photo_new.setAttribute('src', `${item.url}`)));
}, 2000);
