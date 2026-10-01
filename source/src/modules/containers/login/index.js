import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import RenderContext from '@components/common/elements/RenderContext';
import useTranslate from '@hooks/useTranslate';
import LoginPageDesktop from '@modules/layout/desktop/login';
import LoginMobileComponent from '@modules/layout/mobile/login';
import { appActions } from '@store/actions';
import useForm from 'rc-field-form/lib/useForm';


const LoginPageContainer = () => {
    const translate = useTranslate();
    const dispatch = useDispatch();
    const [ form ] = useForm();
    const [ mfaData, setMfaData ] = useState(null);

    const onFinish = (values) => {

    };

    useEffect(() => {
        dispatch(appActions.changeLanguage('vi'));
    }, [ dispatch ]);

    return (
        <RenderContext
            components={{
                desktop: { defaultTheme: LoginPageDesktop },
                mobile: { defaultTheme: LoginMobileComponent },
            }}
            onFinish={onFinish}
            form={form}
            mfaData={mfaData}
            loading={false}
        />
    );
};

export default LoginPageContainer;