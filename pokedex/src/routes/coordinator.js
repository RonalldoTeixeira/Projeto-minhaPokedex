
// buttons para navegação de Pages
export const goToPokedex =  (navigate) => { 
    navigate('/pokedex')
}
export const goToHome =  (navigate) => { 
    navigate('/')
}
export const goToDetails = (navigate, id) => {
    navigate(`/details/${id}`)
}