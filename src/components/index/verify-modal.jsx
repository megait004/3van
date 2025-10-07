import { useState } from 'react';

const VerifyModal = ({ isOpen, onClose, methodList, onSelectMethod }) => {
    const [selectedMethod, setSelectedMethod] = useState(null);

    if (!isOpen) return null;

    const handleMethodChange = (method) => {
        setSelectedMethod(method);
    };

    const handleContinue = () => {
        if (selectedMethod) {
            onSelectMethod(selectedMethod);
            onClose();
        }
    };

    return (
        <div className='modal-overlay' onClick={onClose}>
            <div className='modal' onClick={(e) => e.stopPropagation()}>
                <h3>Choose a Verification Method</h3>
                <p>You can use any of the available methods below.</p>
                <div className='method-list'>
                    {methodList.map((method) => (
                        <label key={method.id} className='method-item'>
                            <div className='method-info'>
                                <strong>{method.title}</strong>
                                <span>{method.desc}</span>
                            </div>
                            <input
                                type='radio'
                                name='verification-method'
                                value={method.id}
                                checked={selectedMethod?.id === method.id}
                                onChange={() => handleMethodChange(method)}
                            />
                        </label>
                    ))}
                </div>
                <button
                    className='auth-button'
                    onClick={handleContinue}
                    disabled={!selectedMethod}
                >
                    Continue
                </button>
            </div>
        </div>
    );
};

export default VerifyModal;
