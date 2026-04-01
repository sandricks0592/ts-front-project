import { useEffect, useState } from "react";
import { fetchCategory } from "../api/category.api";
import { Category } from "../models/category.model";

export const useCategory = () => {
    const [category, setCategory] = useState<Category[]>([]);

    useEffect(() => {
        let isMounted = true;

        const loadCategory = async () => {
            const fallback = [{ id: null, name: "전체" }];

            try {
                const list = await fetchCategory();
                const rows = Array.isArray(list) ? list : [];
                if (isMounted) {
                    setCategory([...fallback, ...rows]);
                }
            } catch {
                if (isMounted) {
                    setCategory(fallback);
                }
            }
        };

        loadCategory();

        return () => {
            isMounted = false;
        };
    }, []);

    return { category };
};