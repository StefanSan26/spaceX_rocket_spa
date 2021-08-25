import getData from "../utils/getData";
import getHash from "../utils/getHash";

const Rocket = async ()=>{
	const id = getHash()
	const rockets = await getData()
	function oneRocket(rockets){
		return rockets.id===id
	}
	const rocket=rockets.find(oneRocket)
	const view= `
	<div class="rockets-inner">
	<h2>${rocket.name}</h2>
		<article class="rockets-card__images"> 
		${rocket.flickr_images.map(img =>`        
				<img src="${img}" alt="${rocket.name}" class="rockets-image">
		`).join("")}
		</article>
		<article class="rockets-card__text">
		<h3>Stages: <span>${rocket.stages}</span></h3>
		<h3>Boosters: <span>${rocket.boosters}</span></h3>
		<h3>Cost per Launch: <span>${rocket.cost_per_launch}$</span></h3>
		<h3>Success rate: <span>${rocket.success_rate_pct}%</span></h3>
		<p><strong>Description:</strong> ${rocket.description}</p>
		</article>
	</div>
	`;
	return view
}


export default Rocket