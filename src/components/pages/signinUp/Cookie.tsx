import reportWebVitals from "../../../reportWebVitals";

let decoded = decodeURIComponent(document.cookie);
let cookie = decoded.split(";");

export const name = () => {
    return cookie.find(row => row.startsWith('name='))?.split("=")[1]
}

export const school = () => {
    return cookie.find(row => row.startsWith('school='))?.split("=")[1]  
}

export const standard = () => {
    return cookie.find(row => row.startsWith('standard='))?.split("=")[1]  
}

export const role = () => {
    return cookie.find(row => row.startsWith('role='))?.split("=")[1]  
}

export const sjid = () => {
    return cookie.find(row => row.startsWith("id="))?.split("=")[1]
}
console.log(decoded)