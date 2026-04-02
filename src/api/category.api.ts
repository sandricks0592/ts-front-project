import { Category } from "../models/category.model";
import { httpClient } from "./http";

const useMockApi = process.env.REACT_APP_MOCK_API === "true";

export const fetchCategory = async () => {
    if (useMockApi) {
        return [
            { id: 0, name: "동화" },
            { id: 1, name: "소설" },
            { id: 2, name: "사회" },
        ] satisfies Category[];
    }
    const response = await httpClient.get<Category[]>("/category");
    return response.data;
};