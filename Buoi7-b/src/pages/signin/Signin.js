import CustomInput from "../../components/custominput/CustomInput";
import './Signin.css';
import { MdLockOutline } from 'react-icons/md'
import FormGroup from "../../components/formgroup/FromGroup";
import CustomButton from "../../components/custombutton/CustomButton";
import CustomCheckbox from "../../components/customcheckbox/CustomCheckbox";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SigninContainer = styled.div `
    width: 400px;
    margin: auto;
    margin-top: 1.5rem;
    position: relative;
    z-index: 0;

    .signin-header h1 {
        text-align: center;
        font-weight: 400;
        font-size: 1.6rem;
    }

    .signin-avatar {
        width: 40px;
        height: 40px;
        background-color: #9c27b0;
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
    }

    .remember-me {
        margin-top: 1rem;
    }

    .btn-submit {
        margin-top: 2rem;
    }

    .group-link {
        display: flex;
        justify-content: space-between;
        margin-top: 1.35rem;
    }

    .group-link a{
        color: #1976d2;
        font-weight: 400;
        letter-spacing: 0.01em;
        font-size: 0.875rem;
    }

    .copy-right {
        color: rgba(0, 0, 0, .6);
        font-weight: 400;
        letter-spacing: 0.01071em;
        font-size: 0.875rem;
        margin-top: 4rem;
        text-align: center;
    }

    .copy-right a {
        color: rgba(0, 0, 0, .6);
    }
`

const Signin = props => {
    console.log(props)

    const handleSubmitForm = (e) => {
        e.preventDefault();
        props.showLoading(true);
    }

    return (
        <SigninContainer className="signin-container">
            <div className="signin-header">
                <div className="signin-avatar">
                    <MdLockOutline size='1.36rem'/>
                </div>
                <h1>Sign in</h1>
            </div>
            <form className="signin-amin">
                <FormGroup>
                    <CustomInput 
                        label="Username *"
                        type="text"
                        name="username"
                        value=""
                    />
                </FormGroup>

                <FormGroup>
                    <CustomInput 
                        label="Password *"
                        type="password"
                        name="password"
                        value=""
                    />
                </FormGroup>

                <div className="remember-me">
                    <CustomCheckbox 
                        fontSize="24px" 
                        label="Remember me"
                    />
                </div>

                <div className="btn-submit">
                    <CustomButton 
                        type="submit"
                        uppercase
                        width="100%"
                        color="white"
                        onClick={handleSubmitForm}
                    >
                        Sign In
                    </CustomButton>
                </div>

                <div className='group-link'>
                    <Link to="/forgot-password">Forgot password?</Link>
                    <Link to="/sign-up">Don't have an account? Sign Up</Link>
                </div>
                <p className="copy-right"> Copyright &copy; &nbsp;
                    <Link to="/">Your Wbsite</Link>&nbsp;2022
                </p>
            </form>
        </SigninContainer>
    )
}

export default Signin;