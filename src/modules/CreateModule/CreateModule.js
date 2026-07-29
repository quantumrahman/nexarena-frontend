"use client";

import CreateForm from "@/components/ui/CreateForm/CreateForm";
import PageHeading from "@/components/ui/PageHeading/PageHeading";

export default function CreateModule() {
    return (
        <>
            <PageHeading
                title={"Create New Facility"}
                paragraph={"Add a new venue and start accepting bookings"}
            ></PageHeading>
            <section className="w-full px-5 pt-7 pb-20 md:px-6 lg:px-7">
                <div className="mx-auto w-full max-w-6xl rounded-lg">
                    <CreateForm />
                </div>
            </section>
        </>
    );
}
