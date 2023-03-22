import { baseURL } from "../../data/constants.js"
export function postJsonData(url, obj) {
    return fetch(baseURL + url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            token: localStorage.getItem('token')
        },
        body: JSON.stringify(obj)
    }).then(res => res.json())
}

export function getJsonData(url, obj) {
    return fetch(baseURL + url, {
        method: 'GET',
        headers: {
            token: localStorage.getItem('token')
        }
    }).then(res => res.json())
}

export function deleteJsonData(url) {
    return fetch(baseURL + url, {
        method: 'DELETE',
        headers: {
            token: localStorage.getItem('token')
        }
    }).then(res => res.json())
}