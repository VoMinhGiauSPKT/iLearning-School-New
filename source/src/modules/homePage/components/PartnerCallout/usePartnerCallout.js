import apiConfig from '@constants/apiConfig';
import useFetch from '@hooks/useFetch';
import { adaptPublicSettings } from '@utils/ilearningAdapters';

export const usePartnerCallout = (propsDescription) => {
    const { data: rawSettings } = useFetch(apiConfig.setting.getPublic, {
        immediate: !propsDescription,
    });

    const description = propsDescription || adaptPublicSettings(rawSettings)?.description || null;

    return {
        description,
    };
};

export default usePartnerCallout;
