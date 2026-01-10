import React from "react";
import WheelAlignmentServices from "../components/Service/Services";
import TyreServices from "../components/Service/TyreServices";
import EmergencyCTA from "../components/Service/EmergencyCTA";
import WheelTyreHero from "../components/Service/ServiceHero";

export default function Service() {
    return (
        <div>
            {/* Hero */}
            <section >
                <WheelTyreHero />
            </section>
            <section >
                <WheelAlignmentServices />
            </section>
            <section >
                <TyreServices />
            </section>
            <section >
            </section>
            <section >
                <EmergencyCTA />
            </section>
        </div>
    );
}