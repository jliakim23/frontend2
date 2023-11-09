

// YOUR DEPLOYED API BASE URL
const URL = 'https://p4-backend-89fg.onrender.com';


export const indexLoader = async () => {
    const response = await fetch(URL + "/journal/")
    const journalEntrys = await response.json()
    return journalEntrys
}


export const showLoader = async ({params}) => {
    const response = await fetch(URL + `/journal/${params.id}/`)
    const journalEntry = await response.json()
    return journalEntry
}