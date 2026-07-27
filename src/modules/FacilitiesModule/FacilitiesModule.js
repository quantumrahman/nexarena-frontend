"use client";

import PageHeading from "@/components/ui/PageHeading/PageHeading";
import FacilitiesFeature from "@/components/features/FacilitiesFeature/FacilitiesFeature";

export default function FacilitiesModule() {
    return (
        <>
            <PageHeading
                title={"Find Your Perfect Arena"}
                paragraph={
                    "Search and book from 200+ premium sports facilities"
                }
            />
            <FacilitiesFeature />
        </>
    );
}
