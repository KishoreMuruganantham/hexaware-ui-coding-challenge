import axios from "axios"

const apiUrl = 'https://api.restful-api.dev/objects'

export const getObjects = ()=>async(dispatch)=>{

    const response = await axios.get(apiUrl)

    dispatch({
        type: 'FETCH_OBJECTS',
        payload : response.data
    })
}

export const addObject = (obj)=>async(dispatch)=>{

    const response = await axios.post(apiUrl, obj)

    dispatch({
        type: 'ADD_OBJECT',
        payload : response.data
    })
}

export const deleteObject = (id)=>async(dispatch)=>{

    await axios.delete(`${apiUrl}/${id}`)

    dispatch({
        type: 'DELETE_OBJECT',
        payload : id
    })
}
