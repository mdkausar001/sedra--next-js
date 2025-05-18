import React from 'react'
import CoreSolutions from '@/components/MobileAppDevelopment/CoreSolutions'
import Achievements from '@/components/MobileAppDevelopment/Achievements'
import Customers from '@/components/MobileAppDevelopment/Customers'
import MobileAppHero from '@/components/MobileAppDevelopment/MobileAppHero'
import MobileSection from '@/components/MobileAppDevelopment/MobileSection'

const page = () => {
    return (
        <div>
            <MobileAppHero />
            <MobileSection />
            <CoreSolutions />
            {/* <Achievements /> */}
            <Customers />
        </div>
    )
}

export default page
