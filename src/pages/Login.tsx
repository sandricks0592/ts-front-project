import {useForm} from "react-hook-form";
import Title from "../components/common/Title";
import InputText from "../components/common/InputText";
import Button from "../components/common/Button";
import { Link, useNavigate } from "react-router-dom";
import { login, LoginResponse } from "../api/auth.api";
import { useAlert } from "../hooks/useAlert";
import { SignupStyle } from "./signup";
import { useAuthStore } from "../store/authStore";

export interface SignupProps {
    email: string;
    password: string;
}

function Login() {
    const navigate = useNavigate();
    const { showAlert } = useAlert();
    
    
    const storeLogin = useAuthStore((s) => s.storeLogin);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignupProps>();

    const onSubmit = (data: SignupProps) => {
        login(data)
            .then((res: LoginResponse) => {
                storeLogin(res.token);

                console.log(res.token);
                showAlert("로그인 완료되었습니다.");
                navigate("/");
            },(error) => {
                showAlert("로그인이 실패했습니다.")
            })
            .catch(() => {
                showAlert(
                    "서버에 연결할 수 없습니다. 백엔드(예: localhost:9999)가 켜져 있는지 확인해 주세요."
                );
            });
    };

    return (
        <>
            <Title size="large">로그인</Title>
            <SignupStyle>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset>
                        <InputText 
                            placeholder="이메일" 
                            inputType="email" 
                            {...register("email", { required: true })} 
                        />
                        {errors.email && (
                            <p className="error-text">이메일을 입력해주세요.</p>
                        )}
                    </fieldset>
                    <fieldset>
                        <InputText 
                            placeholder="비밀번호" 
                            inputType="password" 
                            {...register("password", { required: true })} 
                        />
                        {errors.password && (
                            <p className="error-text">비밀번호를 입력해주세요.</p>
                        )}
                    </fieldset>
                    <fieldset>
                        <Button type="submit" size="medium" 
                        schema='primary'>
                            로그인
                        </Button>
                    </fieldset>
                    <div className="info">
                        <Link to="/reset">비밀번호 초기화</Link>
                    </div>
                </form>
            </SignupStyle>
        </>
    );
}


export default Login;