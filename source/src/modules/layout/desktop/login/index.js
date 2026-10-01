import React from 'react';
import Button from '@components/common/elements/Button';
import Flex from '@components/common/elements/Flex';
import { Form } from '@components/common/elements/Form';
import { InputField } from '@components/common/elements/Input';
import { PasswordField } from '@components/common/elements/PasswordInput';

import styles from './index.module.scss';

function LoginPageDesktop({ onFinish, loading, form, mfaData }) {
    return (
        <div className={styles.loginPage}>
            <div className={styles.loginForm}>
                <div className={styles.headerForm}>
                    <div className={styles.headerTitle}>
                        {!mfaData ? 'Đăng nhập' : 'Xác thực OTP'}
                    </div>
                </div>
                <div className={styles.bodyForm}>
                    <Form className={styles.form} form={form} onFinish={onFinish}>
                        <Flex direction="column" rowGap="2rem">
                            {!mfaData ? (
                                <>
                                    <InputField
                                        name="phone"
                                        required
                                        label="Tài khoản"
                                        placeholder="Nhập số điện thoại"
                                    />
                                    <PasswordField
                                        name="password"
                                        label="Mật khẩu"
                                        required
                                        placeholder="Nhập mật khẩu"
                                    />
                                </>
                            ) : (
                                <>
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        <img
                                            src={mfaData.qrUrl}
                                            alt="QR MFA"
                                            style={{ width: 240 }}
                                        />
                                    </div>

                                    <InputField
                                        name="password"
                                        required
                                        label="Mã xác thực (OTP)"
                                        placeholder="Nhập mã OTP 6 số"
                                        autoFocus
                                    />
                                </>
                            )}
                            <Button loading={loading} className={styles.button} buttonType="submit">
                                {!mfaData ? 'Đăng nhập' : 'Tiếp tục'}
                            </Button>
                        </Flex>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default LoginPageDesktop;