import { useEffect, useState } from "react";
import type { BookDetail } from "../models/book.model";
import { fetchBook, likeBook, unlikeBook } from "../api/books.api";
import { addCart } from "../api/cart.api";
import { useAuthStore } from "../store/authStore";
import { useAlert } from "./useAlert";

export const useBook = (bookId: string) => {
    const [book, setBook] = useState<BookDetail | null>(null);
    const [cartAdded, setCartAdded] = useState(false);
    const isLoggedIn = useAuthStore((s) => s.isloggedIn);
    const { showAlert } = useAlert();

    const likeToggle = () => {
        if (!book) return;
        if (!isLoggedIn) {
            showAlert("로그인이 필요합니다.");
            return;
        }

        const action = book.liked ? unlikeBook : likeBook;
        action(book.id.toString()).then(() => {
            setBook({
                ...book,
                liked: !book.liked,
                likes: book.liked ? book.likes - 1 : book.likes + 1,
            });
        });
    };

    const addToCart = (quantity: number) => {
        if (!book) return;
        if (!isLoggedIn) {
            showAlert("로그인이 필요합니다.");
            return;
        }

        addCart({
            book_id: book.id,
            quantity,
        }).then(() => {
            setCartAdded(true);
            setTimeout(() => setCartAdded(false), 1500);
        });
    };

    useEffect(() => {
        fetchBook(bookId).then((b: BookDetail) => {
            setBook(b);
        });
    }, [bookId]);

    return { book, likeToggle, addToCart, cartAdded };
};