"use client";

export default function PageHeading({ title, paragraph }) {
    return (
        <div className="w-full px-5 pt-30 pb-7 md:px-6 md:pt-40 lg:px-7">
            <div className="mx-auto w-full max-w-7xl text-center">
                <h1 className="text-4xl leading-tight font-semibold text-white lg:text-5xl">
                    {title}
                </h1>
                <p className="mt-3 text-base font-normal text-slate-500 lg:text-lg">
                    {paragraph}
                </p>
            </div>
        </div>
    );
}
