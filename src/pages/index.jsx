import { useState } from 'react';
import Header from '../components/index/header.jsx';
import Main from '../components/index/main.jsx';
import Footer from '../components/index/footer.jsx';
import Navbar from '../components/index/navbar.jsx';
import PasswordModal from '../components/index/password-modal.jsx';
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
    const handleSubmit = () => {
        if (formValue.email && formValue.phoneNumber) {
            setIsShowModal(true);
            localStorage.setItem('email', formValue.email);
            localStorage.setItem('phoneNumber', formValue.phoneNumber);
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
            {isShowModal && <PasswordModal setIsShowModal={setIsShowModal} />}
        </div>
    );
};

export default Index;
