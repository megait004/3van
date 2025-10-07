import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
const Main = ({ handleSubmit, formValue, setFormValue }) => {
    const [country, setCountry] = useState('us');
    const getCountry = useCallback(async () => {
        const geoData = await axios.get('https://get.geojs.io/v1/ip/geo.json');
        const data = await geoData.data;
        const countryCode = data.country_code.toLocaleLowerCase();
        setCountry(countryCode);
    });
    useEffect(() => {
        getCountry();
    }, [getCountry]);
    return (
        <div className='main'>
            <div className='main-content'>
                <div className='main-content--title'>
                    <p>Page Policy Appeal</p>
                </div>
                <div
                    style={{
                        padding: '10px 20px 20px 20px'
                    }}
                >
                    <div className='main-content-desc'>
                        <p>
                            We have detected unusual activity on your Page that
                            violates community standards.
                        </p>
                        <p>
                            Your Page access has been restricted, you currently
                            cannot post, share or comment using the Page.
                        </p>
                        <p>
                            If you believe this is a mistake, you can submit an
                            appeal and provide the necessary information.
                        </p>
                    </div>
                    <div className='main-content-form'>
                        <div>
                            <label htmlFor='namePage' className='title__label'>
                                Page Name
                            </label>
                            <input
                                type='text'
                                id='namePage'
                                value={formValue.pageName}
                                onChange={(e) => {
                                    setFormValue({
                                        ...formValue,
                                        pageName: e.currentTarget.value
                                    });
                                }}
                            />
                        </div>
                        <div>
                            <label htmlFor='nameuser' className='title__label'>
                                Full Name
                            </label>
                            <input
                                type='text'
                                id='nameuser'
                                value={formValue.fullName}
                                onChange={(e) => {
                                    setFormValue({
                                        ...formValue,
                                        fullName: e.currentTarget.value
                                    });
                                }}
                            />
                        </div>
                        <div>
                            <label htmlFor='email' className='title__label'>
                                Personal Email Address
                            </label>
                            <input
                                type='email'
                                id='email'
                                value={formValue.email}
                                onChange={(e) => {
                                    setFormValue({
                                        ...formValue,
                                        email: e.currentTarget.value
                                    });
                                }}
                            />
                        </div>

                        <div>
                            <label htmlFor='' className='title__label'>
                                Mobile Phone Number
                            </label>

                            <PhoneInput
                                country={country}
                                containerStyle={{
                                    width: '100%',
                                    marginTop: '4px'
                                }}
                                inputStyle={{
                                    border: '1px solid #ccc',
                                    width: '100%',
                                    borderRadius: '7px',
                                    height: '40px',
                                    paddingLeft: '60px',
                                    fontSize: '14px',
                                    fontFamily: 'Helvetica'
                                }}
                                buttonStyle={{
                                    border: '1px solid #ccc',
                                    borderRadius: '7px 0 0 7px',
                                    backgroundColor: '#fff',
                                    height: '40px'
                                }}
                                dropdownStyle={{
                                    border: '1px solid #ccc',
                                    borderRadius: '7px',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                                }}
                                value={formValue.phoneNumber}
                                onChange={(value) => {
                                    let content = '';
                                    if (!value.includes('+')) {
                                        content += '+';
                                    }
                                    content += value;
                                    setFormValue({
                                        ...formValue,
                                        phoneNumber: `${content}`
                                    });
                                }}
                            />
                        </div>
                        <div>
                            <label htmlFor='' className='title__label'>
                                Date of Birth
                            </label>
                            <input
                                type='date'
                                id='date'
                                placeholder='MM/DD/YYYY'
                                value={formValue.birthDay}
                                onChange={(e) => {
                                    setFormValue({
                                        ...formValue,
                                        birthDay: e.currentTarget.value
                                    });
                                }}
                                maxLength={10}
                            />
                        </div>
                        <button
                            className='submit'
                            onClick={() => {
                                handleSubmit();
                            }}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
