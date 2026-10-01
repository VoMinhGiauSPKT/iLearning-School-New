import React from 'react';
import OtpInput from 'react-otp-input';
import Button from '@components/common/elements/Button';
import Flex from '@components/common/elements/Flex';
import { Form } from '@components/common/elements/Form';
import { InputField } from '@components/common/elements/Input';
import { PasswordField } from '@components/common/elements/PasswordInput';

import styles from './index.module.scss';

const LoginMobileComponent = ({ onFinish, loading, form, mfaData }) => {
    const handleOtpChange = (otpValue) => {
        form.setFieldsValue({ password: otpValue });
    };

    return (
        <div className={styles.loginPage}>
            <div className={styles.loginForm}>
                <h2 className={styles.customTitle}>
                    {!mfaData ? 'Đăng nhập' : 'Xác thực OTP'}
                </h2>

                <Form form={form} onFinish={onFinish}>
                    {!mfaData ? (
                        <Flex direction="column" rowGap="24px">
                            <InputField
                                name="phone"
                                label="Tài khoản"
                                required
                                placeholder="Nhập số điện thoại"
                                className={styles.input}
                            />
                            <PasswordField
                                name="password"
                                label="Mật khẩu"
                                required
                                placeholder="Nhập mật khẩu"
                                className={styles.passwordInput}
                                iconStyle={{ marginRight: '20px' }}
                            />
                        </Flex>
                    ) : (
                        <div className={styles.confirmOTP}>
                            {mfaData.qrUrl && (
                                <div className={styles.qrSection} style={{ textAlign: 'center' }}>
                                    <img
                                        src={mfaData.qrUrl}
                                        style={{ width: 240, height: 'auto', margin: '0 auto', display: 'block' }}
                                        alt="MFA QR"
                                    />
                                </div>
                            )}

                            <div style={{ textAlign: 'center', justifyContent: 'center', display: 'flex', marginTop: '20px' }}>
                                <Form.Item
                                    name="password"
                                    label="Mã xác thực (OTP)"
                                    trigger="onChange" // Đảm bảo trigger đúng sự kiện
                                    getValueFromEvent={(val) => val} // Lấy giá trị trực tiếp từ OtpInput
                                >
                                    <OtpInput
                                        numInputs={6}
                                        inputType="number"
                                        inputStyle={styles.otpInput}
                                        renderInput={(props) => <input {...props} />}
                                    />
                                </Form.Item>
                            </div>
                        </div>
                    )}

                    <Flex gap={15} style={{ marginTop: '30px' }}>
                        <Button loading={loading} className={styles.btn} buttonType="submit">
                            {!mfaData ? 'Đăng nhập' : 'Tiếp tục'}
                        </Button>
                    </Flex>
                </Form>
            </div>
        </div>
    );
};

export default LoginMobileComponent;