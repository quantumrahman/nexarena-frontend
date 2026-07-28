"use client";

import PageHeading from "@/components/ui/PageHeading/PageHeading";
import BookingFeature from "@/components/features/BookingFeature/BookingFeature";

export default function BookingsModule() {
    return (
        <>
            <PageHeading
                title={"Booking Overview"}
                paragraph={"Track and manage all bookings in one place"}
            ></PageHeading>
            <BookingFeature />
        </>
    );
}
