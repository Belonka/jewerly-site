const API_KEY = process.env.NOVAPOSHTA_API_KEY;
const API_URL = "https://api.novaposhta.ua/v2.0/json/";

export async function getRegions() {
    const res = await fetch(API_URL, {
        method: "POST", 
        headers: {'Content-Type':'application/json'},
        body:JSON.stringify({
            apiKey: API_KEY,
            modelName: 'Address',
             calledMethod: 'getAreas',
        })
    })

    const data = await res.json();
    return data.data;
}

export async function getCities(areaRef){
    const res = await fetch(API_URL, {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
            apiKey: API_KEY,
            modelName: 'Address',
            calledMethod: 'getCities', 
            methodProperties: {
                AreaRef: areaRef,
            }
        })
    })

    const data = await res.json();
    return data.data
}

export async function getDepartments(cityRef){
    const res = await fetch(API_URL, {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
            apiKey: API_KEY,
            modelName: 'Address',
            calledMethod: 'getWarehouses', 
            methodProperties: {
                CityRef: cityRef,
            }
        })
    })

    const data = await res.json();
    return data.data
}