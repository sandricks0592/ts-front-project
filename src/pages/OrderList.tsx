import React from "react";
import styled from "styled-components";
import Title from "../components/common/Title";
import Button from "../components/common/Button";
import { useOrders } from "../hooks/useOrders";
import { formatNumber } from "../utils/format";

function OrderList() {
  const { orders, selectedItemId, selectOrderItem } = useOrders();

  return (
    <>
      <Title size="large">주문 내역</Title>
      <OrderListStyle>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>주문일자</th>
              <th>주소</th>
              <th>수령인</th>
              <th>연락처</th>
              <th>대표상품</th>
              <th>수량</th>
              <th>금액</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <React.Fragment key={order.id}>
                <tr>
                  <td>{order.id}</td>
                  <td>{order.createdAt}</td>
                  <td>{order.address}</td>
                  <td>{order.receiver}</td>
                  <td>{order.contact}</td>
                  <td>{order.bookTitle}</td>
                  <td>{order.totalQuantity}권</td>
                  <td>{formatNumber(order.totalPrice)}원</td>
                  <td>
                    <Button
                      size="small"
                      schema="normal"
                      onClick={() => selectOrderItem(order.id)}
                    >
                      자세히
                    </Button>
                  </td>
                </tr>
                {selectedItemId === order.id && order.detail && (
                  <tr>
                    <td />
                    <td colSpan={8}>
                      <ul className="detail-list">
                        {order.detail.map((item) => (
                          <li key={item.bookId}>
                            <span>{item.title}</span>
                            <span>{item.author}</span>
                            <span>{item.quantity}권</span>
                            <span>{formatNumber(item.price)}원</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </OrderListStyle>
    </>
  );
}

const OrderListStyle = styled.div`
  overflow-x: auto;
  margin-top: 16px;

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    border-bottom: 1px solid #e8e8e8;
    padding: 10px 8px;
    text-align: left;
    white-space: nowrap;
  }

  .detail-list {
    margin: 8px 0;
    padding-left: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .detail-list li {
    display: flex;
    gap: 12px;
  }
`;

export default OrderList;
