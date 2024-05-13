/* eslint-disable */
const MediaClient = {
    baseURL: process.env.NEXT_PUBLIC_MOVIEAPI + "?apikey=" + process.env.NEXT_PUBLIC_APIKEY,
    headers: {
        Accept: "application/json",
    },
    timeout: 30000,
    timeoutErrorMessage: "Request timed out",
};

const responseBody = async (response: Response) => {
    const data = await response.json();
    return data;
};

export const requests = {
    async request(
        method: "get" | "post" | "put" | "delete",
        url: string,
    ) {
        try {
            const options: RequestInit = {
                method,
                headers: MediaClient.headers,
            };

            const response = await fetch(MediaClient.baseURL + url, options);
            return responseBody(response);
        } catch (error: unknown) {
            console.log(error);
            throw new Error("Error");
        }
    },

    get: (url: string) => {
        return requests.request("get", url);
    },

};
