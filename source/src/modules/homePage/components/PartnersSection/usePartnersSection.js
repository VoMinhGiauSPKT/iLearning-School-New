import { useCallback, useMemo, useState } from 'react';
import apiConfig from '@constants/apiConfig';
import useFetch from '@hooks/useFetch';
import { adaptPartners } from '@utils/ilearningAdapters';

import { FALLBACK_PARTNERS } from './constants';

export const usePartnersSection = (propsPartners) => {
    const { data: rawCompanies } = useFetch(apiConfig.company.getPublicList, {
        immediate: !propsPartners,
    });

    const partners = useMemo(() => {
        if (propsPartners && propsPartners.length > 0) return propsPartners;
        const adapted = adaptPartners(rawCompanies);
        return adapted.length > 0 ? adapted : FALLBACK_PARTNERS;
    }, [ propsPartners, rawCompanies ]);

    const [ partnerStartIndex, setPartnerStartIndex ] = useState(0);

    const visiblePartners = useMemo(() => {
        if (partners.length <= 5) return partners;
        const result = [];
        for (let i = 0; i < 5; i++) {
            result.push(partners[(partnerStartIndex + i) % partners.length]);
        }
        return result;
    }, [ partners, partnerStartIndex ]);

    const handlePrevPartner = useCallback(() => {
        setPartnerStartIndex((prev) => (prev === 0 ? partners.length - 1 : prev - 1));
    }, [ partners.length ]);

    const handleNextPartner = useCallback(() => {
        setPartnerStartIndex((prev) => (prev + 1) % partners.length);
    }, [ partners.length ]);

    return {
        partners,
        visiblePartners,
        hasPartnerNavigation: partners.length > 5,
        handlePrevPartner,
        handleNextPartner,
    };
};

export default usePartnersSection;
