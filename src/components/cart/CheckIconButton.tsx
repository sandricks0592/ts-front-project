import styled from "styled-components";

interface Props {
    isChecked: boolean;
    onCheck: () => void
}

function CheckIconButton ({isChecked, onCheck}: Props) {
    return (
        <CheckIconButtonStyle type="button" onClick={onCheck}>
            {isChecked ? "☑" : "☐"}
        </CheckIconButtonStyle>
    );
}

const CheckIconButtonStyle = styled.button`

`;

export default CheckIconButton;