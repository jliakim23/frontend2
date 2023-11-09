import { redirect } from "react-router-dom";

const URL = 'https://p4-backend-89fg.onrender.com'

export const createAction = async ({request}) => {
    
    const formData = await request.formData();

    const newJournal = {
        mood: formData.get("mood"),
        activities: formData.get("activities"),
        photo: formData.get("photo"),
        date: formData.get("date"),
    };

   await fetch(URL + "/journal/", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newJournal)
    });

        return redirect("/");

}
export const updateAction = async ({request, params}) => {

    const formData = await request.formData();

    const id = params.id

    const updatedJournal = {
        mood: formData.get("mood"),
        activities: formData.get("activities"),
        photo: formData.get("photo"),
        date: formData.get("date"),
    };


    const updateURL = `${URL}/planner/${id}/`; 
    await fetch(updateURL, {
      method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedJournal)
    });

        return redirect("/")
  
}
export const deleteAction = async({params}) => {
    const id = params.id
    await fetch(`${URL}/journal/${id}/`, {
        method: 'delete',
    } )
    return redirect('/')
}


