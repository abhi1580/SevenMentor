//Business logic function
export default function searchPlaces(places,searchQuery){
    searchQuery=searchQuery.toLowerCase()
    const searchResult=places.filter(p=>p.name.toLowerCase().startsWith(searchQuery))
    return searchResult
}