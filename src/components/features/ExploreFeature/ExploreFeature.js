"use client";

import FacilityCard from "@/components/ui/FacilityCard/FacilityCard";

export default function ExploreFeature() {
    return (
        <section className="flex w-full flex-col items-center justify-center gap-10 px-5 py-20 md:px-6 md:pt-[156px] lg:gap-20 lg:px-7 lg:pt-[180px]">
            <div className="mx-auto w-full max-w-xl text-center">
                <h2 className="text-[32px] leading-tight font-semibold text-white md:text-5xl lg:text-[56px]">
                    Explore Featured Facility
                </h2>
            </div>
            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <FacilityCard />
                <FacilityCard />
                <FacilityCard />
                <FacilityCard />
                <FacilityCard />
                <FacilityCard />
            </div>
        </section>
    );
}
