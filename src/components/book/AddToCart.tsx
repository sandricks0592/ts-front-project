import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import type { BookDetail } from "../../models/book.model";
import Button from "../common/Button";
import InputText from "../common/InputText";

interface Props {
  book: BookDetail;
  onAdd: (quantity: number) => void;
  cartAdded: boolean;
}

function AddToCart({ book, onAdd, cartAdded }: Props) {
  const [quantity, setQuantity] = useState<number>(1);

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => Math.max(1, prev - 1));
  const handleAdd = () => onAdd(quantity);

  return (
    <AddToCartStyle $added={cartAdded}>
      <div className="controls">
        <InputText
          inputType="number"
          min={1}
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, Number(e.target.value) || 1))}
        />
        <Button type="button" size="small" schema="normal" onClick={handleIncrease}>
          +
        </Button>
        <Button type="button" size="small" schema="normal" onClick={handleDecrease}>
          -
        </Button>
      </div>
      <Button type="button" size="medium" schema="normal" onClick={handleAdd}>
        {book.title} 장바구니 담기
      </Button>
      <div className="added">
        <p>장바구니에 추가되었습니다.</p>
        <Link to="/cart">장바구니로 이동</Link>
      </div>
    </AddToCartStyle>
  );
}

interface AddToCartStyleProps {
  $added: boolean;
}

const AddToCartStyle = styled.div<AddToCartStyleProps>`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .controls {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  .added {
    opacity: ${({ $added }) => ($added ? "1" : "0")};
    transition: opacity 0.2s ease;
    font-size: 0.875rem;
  }
`;

export default AddToCart;
