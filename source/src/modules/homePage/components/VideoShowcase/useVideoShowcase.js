import apiConfig from '@constants/apiConfig';
import useFetch from '@hooks/useFetch';
import { adaptPublicSettings } from '@utils/ilearningAdapters';

export const useVideoShowcase = (propsVideoUrl) => {
    const { data: rawSettings } = useFetch(apiConfig.setting.getPublic, {
        immediate: !propsVideoUrl,
    });

    const videoUrl = propsVideoUrl || adaptPublicSettings(rawSettings)?.video || '';

    return {
        videoUrl,
    };
};

export default useVideoShowcase;
