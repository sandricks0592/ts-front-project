import { styled } from "styled-components";
import logo from "../../assets/logo-book-store.svg";
import { FasignInAi}

const CATEGORY = [
    {
        id: null,
        name: "전체",
    },
    {
        id: 0,
        name: "동화",
    },
    {
        id: 1,
        name: "소설",
    },
    {
        id: 2,
        name: "사회",
    },
    ];

function Header() {
    return (
        <HeaderStyle>
            <h1 className="logo">
                <img src={logo} alt="book store" />
            </h1>
            <nav className="category">
                <ul>
                    {CATEGORY.map((item) => (
                    <li key={item.id ?? "all"}>
                        <a href={item.id === null ? '/books' : `/books?category_id=${item.id}`}>
                        {item.name}
                        </a>
                    </li>
                    ))}
                </ul>
            </nav>
            <nav className="auth">
                <ul>
                    <li>
                    <a href="/login">
                        로그인
                    </a>
                    </li>
                    <li>
                    <a href="/login">
                        회원가입
                    </a>
                    </li>
                </ul>
            </nav>
        </HeaderStyle>
    );
}

const HeaderStyle = styled.header`
    width: 100%;
    margin: 0 auto;
    max-width: ${({ theme }) => theme.layout.width.large};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 0;
    border-bottom: 1px solid #d9d9d9;

    .logo {
        margin: 0;

        img {
            display: block;
            width: 200px;
            height: auto;
        }
    }

    .category {
        ul {
            display: flex;
            gap: 32px;
            margin: 0;
            padding: 0;
            list-style: none;

            li {
                a {
                    font-size: 1.25rem;
                    font-weight: 600;
                    text-decoration: none;
                    color: ${({ theme }) => theme.color.primary};
                }
            }
        }
    }

    .auth {
        ul {
            display: flex;
            gap: 16px;
            margin: 0;
            padding: 0;
            list-style: none;

            li {
                a {
                    font-size: 0.95rem;
                    font-weight: 600;
                    text-decoration: none;
                    color: ${({ theme }) => theme.color.primary};
                }
            }
        }
    }
`;

export default Header;