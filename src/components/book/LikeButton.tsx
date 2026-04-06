import styled from "styled-components";
import type { BookDetail } from "../../models/book.model";
import Button from "../common/Button";

interface Props {
  book: BookDetail;
  onClick: () => void;
}

function LikeButton({ book, onClick }: Props) {
  return (
    <LikeButtonStyle size="medium" scheme="normal" onClick={onClick}>
      <span aria-hidden="true">♥</span>
      {book.likes}
    </LikeButtonStyle>
  );
}

const LikeButtonStyle = styled(Button)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;

export default LikeButton;
