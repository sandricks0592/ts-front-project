import { useLocation } from "react-router-dom";
import { CartStyle } from "./Cart";
import Title from "../components/common/Title";
import CartSummary from "../components/cart/CartSummary";
import Button from "../components/common/Button";
import InputText from "../components/common/InputText";
import type { OrderSheet } from "../models/order.model";

function Order() {
    const location = useLocation();
    const orderDataFromCart = location.state as Omit<OrderSheet, "delivery"> | undefined;

    if (!orderDataFromCart) {
        return <p>주문 정보가 없습니다. 장바구니에서 다시 시도해 주세요.</p>;
    }

    const { totalQuantity, totalPrice, firstBookTitle } = orderDataFromCart;

    return (
        <>
            <Title size="large">주문서 작성</Title>
            <CartStyle>
                <div className="content">
                    <div className="order-info">
                        <Title size="medium" color="secondary">
                            배송 정보
                        </Title>
                        <form className="delivery">
                            <fieldset>
                                <label>상세 주소</label>
                                <div className="input">
                                    <InputText inputType="text" />
                                </div>
                            </fieldset>

                            <fieldset>
                                <label>수령인</label>
                                <div className="input">
                                    <InputText inputType="text" />
                                </div>
                            </fieldset>

                            <fieldset>
                                <label>전화번호</label>
                                <div className="input">
                                    <InputText inputType="text" />
                                </div>
                            </fieldset>
                        </form>
                    </div>
                    <div className="order-info">
                        <Title size="medium" color="secondary">
                            주문 상품
                        </Title>
                        <strong>
                            {firstBookTitle} 등 총 {totalQuantity} 권
                        </strong>
                    </div>
                </div>
                <div className="summary">
                    <CartSummary totalQuantity={totalQuantity} totalPrice={totalPrice} />
                    <Button size="large" scheme="primary">
                        결제하기
                    </Button>
                </div>
            </CartStyle>
        </>
    );
}

export default Order;
