import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getImgSrc } from "../utils/image";
import Title from "../components/common/Title";
import { useBook } from "../hooks/useBook";
import type { BookDetail as IBookDetail } from "../models/book.model";
import { formatDate, formatNumber } from "../utils/format";
import EllipsisBox from "../components/common/EllipsisBox";
import LikeButton from "../components/book/LikeButton";
import AddToCart from "../components/book/AddToCart";

const bookInfoList: {
    label: string;
    key: keyof IBookDetail;
    filter?: (book: IBookDetail) => string;
}[] = [
    { label: "카테고리", key: "categoryName" },
    { label: "포맷", key: "form" },
    { label: "페이지", key: "pages" },
    { label: "ISBN", key: "isbn" },
    {
        label: "출간일",
        key: "pubDate",
        filter: (book) => formatDate(book.pubDate),
    },
    {
        label: "가격",
        key: "price",
        filter: (book) => `${formatNumber(book.price)}원`,
    },
];

function BookDetail() {
    const { bookId } = useParams();
    const { book, likeToggle, addToCart, cartAdded } = useBook(bookId ?? "");

    if (!book) return null;

    return (
        <BookDetailStyle>
            <header className="header">
                <div className="img">
                    <img src={getImgSrc(book.img)} alt={book.title} />
                </div>
                <div className="info">
                    <Title size="large">{book.title}</Title>
                    {bookInfoList.map((item) => (
                        <dl key={String(item.key)}>
                            <dt>{item.label}</dt>
                            <dd>
                                {item.filter ? item.filter(book) : String(book[item.key])}
                            </dd>
                        </dl>
                    ))}
                    <p className="summary">{book.summary}</p>
                    <div className="like">
                        <LikeButton book={book} onClick={likeToggle} />
                    </div>
                    <div className="add-cart">
                        <AddToCart book={book} onAdd={addToCart} cartAdded={cartAdded} />
                    </div>
                </div>
            </header>
            <div className="content">
                <Title size="medium">상세 설명</Title>
                <EllipsisBox lineLimit={4}>{book.detail}</EllipsisBox>
                <Title size="medium">목차</Title>
                <p className="index">{book.contents}</p>
            </div>
        </BookDetailStyle>
    );
}

const BookDetailStyle = styled.div``;

export default BookDetail;
