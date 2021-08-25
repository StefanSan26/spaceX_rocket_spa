const getHash=()=> location.hash.slice(1).toLocaleLowerCase().split('/')[1]||'/'   //con RegEx: location.hash.replace(/#\/(\d{1,2})\/?/, "$1").toLowerCase() || '/'

export default getHash