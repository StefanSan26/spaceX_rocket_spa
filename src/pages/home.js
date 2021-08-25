import getData from "../utils/getData";

const home = async ()=>{
	const rockets = await getData()
	const view= `
	<div class="rockets">  
		${rockets.map(rocket =>`
		<article class="rocket-item">	        
			<a href="#/${rocket.id}/">
				<img src="${rocket.flickr_images[0]}" alt="${rocket.name}" class="rockets-image">
				<h2>${rocket.name}</h2>
			</a>
		</article>
		`).join('')}
	</div>
	`;
	return view;
}

export default home