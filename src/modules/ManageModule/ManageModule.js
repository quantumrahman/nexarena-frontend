"use client";

import PageHeading from "@/components/ui/PageHeading/PageHeading";
import ManageFeature from "@/components/features/ManageFeature/ManageFeature";

export default function ManageModule() {
    return (
        <>
            <PageHeading
                title={"Control Your Arenas"}
                paragraph={"Keep every arena updated and booking-ready"}
            ></PageHeading>
            <ManageFeature />
        </>
    );
}
