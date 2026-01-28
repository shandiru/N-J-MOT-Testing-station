import React from "react";
import TyreServices from "../components/Service/TyreServices";
import EmergencyCTA from "../components/Service/EmergencyCTA";
import WheelTyreHero from "../components/Service/ServiceHero";

export default function Service() {
    return (
        <div>
            <section >
                <WheelTyreHero />
            </section>
            <section >
                <TyreServices />
            </section>
            <section >
                <EmergencyCTA />
            </section>
        </div>
    );
}