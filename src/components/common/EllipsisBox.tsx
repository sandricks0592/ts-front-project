import { useState } from "react";
import styled from "styled-components"
import Button from "./Button";

interface Props {
    children: React.ReactNode;
    lineLimit: number;
}

function EllipsisBox({children, lineLimit}: Props) {
    const [expanded, setExpanded] = useState(false);

    return (
        <EllipsisBoxStyle lineLimit={lineLimit} $expanded={expanded}>
            <p>{children}</p>
            <div className="toggle">
                <Button
                    size="small"
                    scheme="normal"
                    onClick={() => setExpanded(!expanded)}
                >
                    {expanded ? "접기 ▲" : "펼치기 ▼"}
                </Button>
            </div>
        </EllipsisBoxStyle>
    )
}

interface EllipsisBoxStyleProps {
    lineLimit: number;
    $expanded: boolean;
}

const EllipsisBoxStyle = styled.div<EllipsisBoxStyleProps>`
p { /* 4줄까지 보여줌 */
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: ${({lineLimit, $expanded}) => $expanded ? 'none' : lineLimit};
    -webkit-box-orient: vertical;
}
.toggle {
}
`;

export default EllipsisBox;