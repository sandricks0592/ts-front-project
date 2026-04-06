import styled from "styled-components";

function Loading() {
    return (
        <LoadingStyle aria-label="로딩 중">
            <span className="spinner" />
        </LoadingStyle>
    );
}

const LoadingStyle = styled.div`
    padding: 40px 0;
    text-align: center;

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }

    .spinner {
        display: inline-block;
        width: 40px;
        height: 40px;
        border: 3px solid #ddd;
        border-top-color: #888;
        border-radius: 50%;
        animation: spin 0.9s linear infinite;
    }
`;

export default Loading;
