"use client";

import { FaStar } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";

import Link from "next/link";

export default function FacilityCard({ facility }) {
    return (
        <article className="w-full overflow-hidden rounded-xl border border-slate-900/50 transition-all duration-200 ease-linear hover:border-slate-900">
            <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                <div className="absolute inset-0 z-10 h-full bg-gradient-to-b from-transparent via-transparent to-[#010717]"></div>
                <span className="absolute top-2.5 right-2.5 z-10 rounded-full bg-violet-600 px-2 py-0.5 text-sm text-white md:top-4 md:right-4">
                    Football
                </span>
            </div>
            <div className="flex w-full flex-col justify-center p-5">
                <h3 className="text-xl font-medium text-white">
                    Green arena football turf
                </h3>
                <div className="mt-1.5 flex w-full items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                        <GrLocation className="text-violet-500" />
                        <span className="mt-0.5 text-base font-normal text-slate-500">
                            Gulshan, Dhaka
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaStar className="text-yellow-500" />
                        <p className="text-sm font-normal text-white">
                            4.9 <span className="text-slate-500">(75)</span>
                        </p>
                    </div>
                </div>
                <div className="mt-5 flex w-full items-center justify-between">
                    <p className="text-lg font-semibold text-white">
                        $500 <span className="text-sm text-slate-500">/hr</span>
                    </p>
                    <Link
                        href={"/facilities/details"}
                        className="rounded-lg bg-violet-600 px-5 py-[11px] text-sm font-medium text-white transition-all duration-200 ease-linear hover:bg-violet-500 sm:text-base"
                    >
                        Book Now
                    </Link>
                </div>
            </div>
        </article>
    );
}
