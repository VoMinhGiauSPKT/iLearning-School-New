import React from 'react';
import useDevices from '@hooks/useDevices';
import DefaultLayout from '@modules/layout/common/DefaultLayout';

import CoursesSection from './components/CoursesSection';
import HeroSection from './components/HeroSection';
import InstructorSection from './components/InstructorSection';
import PartnerCallout from './components/PartnerCallout';
import PartnersSection from './components/PartnersSection';
import TestimonialsSection from './components/TestimonialsSection';
import VideoShowcase from './components/VideoShowcase';

import styles from './HomePage.module.scss';

const HomePage = () => {
    const { isMobile } = useDevices();

    return (
        <DefaultLayout>
            <div className={styles.homePage}>
                {/* 1. Hero Banner (Desktop only) */}
                {!isMobile && <HeroSection />}

                {/* 2. Video Showcase (Desktop & Mobile) */}
                <VideoShowcase />

                {/* 3. Partner Callout (Desktop & Mobile) */}
                <PartnerCallout />

                {/* 4. Courses & Curriculum Accordion (Desktop & Mobile) */}
                <CoursesSection />

                {/* 5. Student Testimonials (Desktop only) */}
                {!isMobile && <TestimonialsSection />}

                {/* 6. Instructors / Faculty (Desktop only) */}
                {!isMobile && <InstructorSection />}

                {/* 7. Enterprise Partners Carousel (Desktop only) */}
                {!isMobile && <PartnersSection />}
            </div>
        </DefaultLayout>
    );
};

export default HomePage;
