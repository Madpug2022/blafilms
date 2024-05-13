/* eslint-disable */
import { requests } from "../api";

export const MEDIA = {
    searchMedia: async (term: string, page: number) => {
        try {
            const response = await requests.get(`&s=${term}&page=${page}`)
            if (!response) throw new Error("Error de servidor");
            return response
        } catch (error: unknown) {
            console.error("Error:", error);
            return error
        }
    }
};
