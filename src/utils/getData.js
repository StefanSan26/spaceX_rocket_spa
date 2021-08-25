const API = 'https://api.spacexdata.com/v4/rockets/'

const getData = async (id)=>{
	const apiURL = id?`${API}:${id}`:API   //en caso de que el id exista concatenalo a la URL, caso contrario cargue todos los personajes
	try{
		const response = await fetch(apiURL)
		const data = await response.json()
		return data
	} catch (error){
		console.log('Fetch error', error)
	}
}

export default getData