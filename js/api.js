const RESOURSE_URL = "http://127.0.0.1:8080/cheeses";


const baseRequest = async({ urlPath = "", method = "GET", body = null }) => {
    try {
        const request = {
            method,

            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        };

        if (body) {
            request.body = JSON.stringify(body);
        }

        return await fetch(`${RESOURSE_URL}${urlPath}`, request);
    } catch (error) {
        console.error("HTTP ERROR: ", error);
    }
};

export const getAllCheeses = async() => {

    const response = await baseRequest({ method: "GET" });
    return await response.json();
};

export const postCheese = (body) => baseRequest({ method: "POST", body });

export const updateCheese = (id, body) => {
    baseRequest({ urlPath: `/${id}`, method: "PUT", body });
}

export const deleteCheese = (id) =>
    baseRequest({ urlPath: `/${id}`, method: "DELETE" });