import {styled} from "styled-components";
import { ColorKey, HeadingSize } from "../../style/theme";

interface Props {
    children: React.ReactNode;
    size: HeadingSize ;
    color ?: ColorKey;
}

function Title({children, size, color}: Props) {
    return <TitleStyle $size={size} $color={color}>
        {children}
        </TitleStyle>;
}

interface TitleStyleProps {
    $size: HeadingSize;
    $color?: ColorKey;
}

const TitleStyle = styled.h1<TitleStyleProps>`
    font-size: ${({ theme, $size }) => theme.heading[$size as HeadingSize].fontSize};
    color: ${({ theme, $color }) =>
        $color ? theme.color[$color] : theme.color.primary};
`;

export default Title;