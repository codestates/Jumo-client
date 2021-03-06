import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import styled from 'styled-components';
import { FcGoogle } from 'react-icons/fc';
import { useSelector, useDispatch } from 'react-redux';
import { BiX } from 'react-icons/bi';
import { signIn } from '../actions';
import server, { clientURL } from '../apis/server';
import Inputs from '../atoms/Inputs';
import img from '../images/JustJ.PNG';

const SignIn = ({
  open,
  closeHandler,
  signupModalHandler,
  navHeader,
  setNavHeader,
}) => {
  // document.body.style.overflow = 'hidden';

  const history = useHistory();
  const dispatch = useDispatch();

  const inputInfo = [
    { subtitle: '', placeholder: 'abc@gmail.com', type: 'email' },
    { subtitle: '', placeholder: 'password', type: 'password' },
  ];

  const [info, setInfo] = useState({
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const inputHandler = e => {
    const target = e.target.value;
    const type = e.target.dataset.type;
    const userValue = { [type]: target };
    setInfo({ ...info, ...userValue });
  };

  const submitHandler = async () => {
    try {
      if (!info.email.length) {
        setErrorMessage('이메일을 입력해주세요');
      } else if (!info.password.length) {
        setErrorMessage('비밀번호를 입력해주세요');
      } else {
        const getLoginInfo = await server
          .post(
            '/user/login',
            { ...info },
            {
              headers: { 'Content-Type': 'application/json' },
              withCredentials: true,
            },
          )
          .then(res => {
            const { data } = res;

            dispatch(signIn(data.data.accessToken));

            localStorage.setItem('isLogin', JSON.stringify(true));
            localStorage.setItem('accessToken', data.data.accessToken);

            localStorage.setItem('oauth', 'local');
            closeHandler();
            history.push('/');
            if (navHeader) {
              setNavHeader(false);
            }
          });
      }
    } catch (err) {
      setErrorMessage('이메일 혹은 비밀번호가 일치하지 않습니다');
    }
  };
  const onKeyPress = e => {
    if (e.key === 'Enter') {
      submitHandler();
    }
  };

  const redirectUrl = `${clientURL}/user/login`;
  const clientIDForGoogle =
    '698453377731-fmpthr77bo88djpa1hpmv06d8u2ef0g5.apps.googleusercontent.com';
  const GOOGLE_LOGIN_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientIDForGoogle}&redirect_uri=${redirectUrl}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email+https://www.googleapis.com/auth/userinfo.profile`;

  const googleLoginHandler = () => {
    window.location.assign(GOOGLE_LOGIN_URL);
    localStorage.setItem('oauth', 'google');
  };

  const getAccessToken = async authorizationCode => {
    try {
      const oauth = localStorage.getItem('oauth');
      let res;
      if (oauth === 'google') {
        res = await server.post(`/users/google`, { authorizationCode });
      }
      const { data } = res;

      localStorage.setItem('isLogin', JSON.stringify(true));
      localStorage.setItem('accessToken', data.accessToken);
      history.push('/makgeolli/info');
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get('code');

    if (authorizationCode) {
      getAccessToken(authorizationCode);
    }
  });

  return (
    <>
      {open ? (
        <OutBox>
          <BoxWrapper>
            <BoxInner>
              <Title>
                <div>SIGN IN</div>
                <Image>
                  <img src={img} alt="icon" width="130px" height="80px" />
                  <X onClick={closeHandler}>
                    <BiX color="white" />
                  </X>
                </Image>
              </Title>
              <br />
              <Input>
                <Inputs
                  inputInfo={inputInfo}
                  inputHandler={inputHandler}
                  onKeyPress={onKeyPress}
                />
                <br />
                <Alert>{errorMessage}</Alert>
                <br />
              </Input>
              <br />
              <Buttons>
                <Button type="submit" onClick={() => submitHandler()}>
                  Sign in
                </Button>
              </Buttons>
              <br />
              <Line />
              <br />
              <Buttons>
                <Button type="submit" onClick={() => googleLoginHandler()}>
                  <FcGoogle size="18" /> Google로그인
                </Button>
                <br />
                <Link to="/">
                  <SkipButton type="submit" onClick={closeHandler}>
                    Skip
                  </SkipButton>
                </Link>
              </Buttons>
              <br />
              <Buttons>
                아직 회원이 아니신가요?
                <GoTo onClick={signupModalHandler}>회원가입하러가기</GoTo>
              </Buttons>
            </BoxInner>
          </BoxWrapper>
        </OutBox>
      ) : null}
    </>
  );
};

const BoxInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 360px;
  max-width: 480px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 0px 0px 10px 0px;
`;

const GoTo = styled.div`
  color: blue;
  &:hover {
    cursor: pointer;
  }
`;

const BoxWrapper = styled.div`
  box-sizing: border-box;
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const Input = styled.div`
  display: flex;
  justify-content: center;
`;

const OutBox = styled.div`
  box-sizing: border-box;
  /* display: none; */
  display: box;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;
const Title = styled.div`
  font-family: 'Sansation';
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 30px;
  margin-left: 40px;
`;
const Image = styled.div`
  background-color: #293848;
  padding: 0px 10px 0px 18px;
`;
const Alert = styled.div`
  color: red;
  text-align: center;
`;
const Button = styled.button`
  font-family: 'Sansation', 'Nanum Gothic';
  width: 200px;
  height: 20px;
  background-color: #c29b86;
  border-radius: 4px;
  border: 0px;
  cursor: pointer;
  padding: 15px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  &:active {
    transform: translateY(2px);
  }
`;
const SkipButton = styled.button`
  font-family: 'Sansation';
  width: 200px;
  height: 20px;
  background-color: #293848;
  border: 0px;
  padding: 15px;
  border-radius: 4px;
  cursor: pointer;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  &:active {
    transform: translateY(2px);
  }
`;
const Buttons = styled.div`
  font-family: 'Nanum Gothic';
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Line = styled.div`
  margin: 0px 20px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #c29b86;
`;

const X = styled.div`
  float: right;
  width: 20px;
  height: 20px;
`;

export default SignIn;
