import { styled } from "styled-components";
import logo from "../../assets/logo-book-store.svg";
import { Link } from "react-router-dom";
import { useCategory } from "../../hooks/useCategory";
import { useAuthStore } from "../../store/authStore";

function Header() {
    const { category } = useCategory();
    const { isloggedIn, storeLogout } = useAuthStore();

    return (
        <HeaderStyle>
            <h1 className="logo">
                <Link to="/">
                    <img src={logo} alt="book store" />
                </Link>
            </h1>
            <nav className="category">
                <ul>
                    {category.map((item) => (
                    <li key={item.id ?? "all"}>
                        <Link to={item.id === null ? '/books' : `/books?category_id=${item.id}`}>
                        {item.name}
                        </Link>
                    </li>
                    ))}
                </ul>
            </nav>
            <nav className="auth">
                {
                    isloggedIn && (
                        <ul>
                            <li>
                                <Link to="/cart">장바구니</Link>
                            </li>
                            <li>
                                <Link to="/orderlist">주문내역</Link>
                            </li>
                            <li>
                                <button type="button" onClick={storeLogout}>
                                    로그아웃
                                </button>
                            </li>
                        </ul>
                    )
                }
                {!isloggedIn && (
                    <ul>
                        <li>
                        <a href="/login">
                            로그인
                        </a>
                        </li>
                        <li>
                        <a href="/signup">
                            회원가입
                        </a>
                        </li>
                    </ul>
                )}
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
                a,
                button {
                    font-size: 0.95rem;
                    font-weight: 600;
                    text-decoration: none;
                    color: ${({ theme }) => theme.color.primary};
                    display: flex;
                    align-items: center;
                    line-height: 1;
                    background: none;
                    border: 0;
                    cursor: pointer;

                    svg {
                        margin-right: 6px;
                    }
                }
            }
        }
    }
`;

export default Header;