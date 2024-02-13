//Login.jsx

import { useEffect } from 'react'
import { initOTPless } from '../utils/initOtpless'
import { useNavigate } from 'react-router-dom'

function Login() {
    useEffect(() => initOTPless(handleOtplessData), [])
    const navigate = useNavigate()

    const handleOtplessData = (otplessUser) => {
        localStorage.setItem('token', otplessUser.token);
        localStorage.setItem('name', otplessUser.email.name); // Assuming name and email are available
        localStorage.setItem('id', otplessUser.email.email);
        navigate('/Home')
        window.location.reload()
    }

    return (
        <div>
            <button type="button" class="btn btn-primary btn-lg px-4 mb-3" data-bs-toggle="modal"
                data-bs-target="#loginModal">
                JS Demo Login
            </button>

            <div class="modal fade" id="loginModal" data-bs-keyboard="false" tabindex="-1" aria-labelledby="loginModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content border-0 bg-transparent">
                        <div id="otpless-login-page">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login
