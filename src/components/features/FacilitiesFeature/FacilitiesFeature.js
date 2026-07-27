"use client";

import { GrLocation, GrSearch } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
import { IoFilter } from "react-icons/io5";
import { MdOutlineSportsBaseball } from "react-icons/md";

import FacilityCard from "@/components/ui/FacilityCard/FacilityCard";

export default function FacilitiesFeature() {
    return (
        <div className="w-full px-5 pt-7 pb-20 md:px-6 lg:px-7">
            <div className="mx-auto w-full max-w-7xl">
                <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-4 lg:grid-cols-5">
                    <div className="flex w-full items-center gap-3 rounded-lg border border-slate-900 bg-slate-900/50 px-4 py-[11px] lg:col-span-2">
                        <GrSearch className="text-lg text-slate-500" />
                        <span className="text-base text-slate-500">
                            Search by title
                        </span>
                    </div>
                    <div className="flex w-full items-center justify-between gap-3 rounded-lg border border-slate-900 bg-slate-900/50 px-4 py-[11px]">
                        <div className="flex items-center justify-center gap-3">
                            <MdOutlineSportsBaseball className="text-xl text-slate-500" />
                            <span className="text-base text-slate-500">
                                All Sports
                            </span>
                        </div>
                        <IoIosArrowDown className="text-slate-500" />
                    </div>
                    <div className="flex w-full items-center justify-between gap-3 rounded-lg border border-slate-900 bg-slate-900/50 px-4 py-[11px]">
                        <div className="flex items-center justify-center gap-3">
                            <GrLocation className="text-xl text-slate-500" />
                            <span className="text-base text-slate-500">
                                Location
                            </span>
                        </div>
                        <IoIosArrowDown className="text-slate-500" />
                    </div>
                    <div className="flex w-full items-center justify-between gap-3 rounded-lg border border-slate-900 bg-slate-900/50 px-4 py-[11px]">
                        <div className="flex items-center justify-center gap-3">
                            <IoFilter className="text-xl text-slate-500" />
                            <span className="text-base text-slate-500">
                                Filter
                            </span>
                        </div>
                        <IoIosArrowDown className="text-slate-500" />
                    </div>
                </div>
            </div>
            <div className="mt-10 w-full">
                <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-4 md:flex-row">
                    <p className="text-base font-normal text-slate-500">
                        Showing 12 of 200+ arenas
                    </p>
                    <div className="flex w-fit items-center justify-between gap-3 rounded-lg border border-slate-900 bg-slate-900/50 px-4 py-2">
                        <p className="text-base font-normal text-slate-500">
                            Sort by:
                            <span className="text-white">Popular</span>
                        </p>
                        <IoIosArrowDown className="text-slate-500" />
                    </div>
                </div>
            </div>
            <div className="mx-auto mt-5 grid w-full max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <FacilityCard />
                <FacilityCard />
                <FacilityCard />
                <FacilityCard />
                <FacilityCard />
                <FacilityCard />
            </div>
            <div className="mx-auto mt-10 flex w-full max-w-7xl items-center justify-center">
                <button className="cursor-pointer rounded-lg bg-violet-600 px-5 py-[11px] text-base font-medium text-white transition-all duration-200 ease-linear hover:bg-violet-500">
                    See More
                </button>
            </div>
        </div>
    );
}
