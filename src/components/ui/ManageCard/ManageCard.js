"use client";

import { FaRegCalendarAlt } from "react-icons/fa";
import { FiClock, FiEdit2, FiTrash2, FiUsers } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";

export default function ManageCard({ manage }) {
    return (
        <article className="w-full overflow-hidden rounded-xl border border-slate-900/50 transition-all duration-200 ease-linear hover:border-slate-900">
            <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                <div className="absolute inset-0 z-10 h-full bg-gradient-to-b from-transparent via-transparent to-[#010717]"></div>
                <div className="absolute top-2.5 z-10 flex w-full items-center justify-between px-2.5 md:top-4 md:px-4">
                    <span className="rounded-full bg-violet-600 px-2 py-0.5 text-sm text-white">
                        Football
                    </span>
                    <span className="rounded-full bg-green-600 px-2 py-0.5 text-sm text-white">
                        Active
                    </span>
                </div>
            </div>
            <div className="flex w-full flex-col justify-center p-5">
                <div className="flex w-full flex-wrap justify-between gap-2">
                    <h3 className="text-xl font-medium text-white">
                        Green arena football turf
                    </h3>
                    <p className="text-lg font-semibold text-white">
                        $500 <span className="text-sm text-slate-500">/hr</span>
                    </p>
                </div>
                <div className="mt-1.5 flex w-full items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                        <GrLocation className="text-violet-500" />
                        <span className="mt-0.5 text-base font-normal text-slate-500">
                            Gulshan, Dhaka
                        </span>
                    </div>
                </div>
                <div className="mt-4 flex w-full items-center justify-between">
                    <div className="flex flex-col justify-center">
                        <div className="flex w-fit items-center justify-center gap-2">
                            <FaRegCalendarAlt className="text-violet-500" />
                            <span className="mt-1 text-base font-normal text-white">
                                86
                            </span>
                        </div>
                        <p className="ml-1 flex items-center gap-2 text-sm font-normal text-slate-500">
                            <span className="block size-1.5 rounded-full bg-slate-500"></span>
                            Bookings
                        </p>
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="flex w-fit items-center justify-center gap-2">
                            <FiUsers className="text-lg text-violet-500" />
                            <span className="mt-1 text-base font-normal text-white">
                                22
                            </span>
                        </div>
                        <p className="ml-1 flex items-center gap-2 text-sm font-normal text-slate-500">
                            <span className="block size-1.5 rounded-full bg-slate-500"></span>
                            Capacity
                        </p>
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="flex w-fit items-center justify-center gap-2">
                            <FiClock className="text-lg text-violet-500" />
                            <span className="mt-1 text-base font-normal text-white">
                                5
                            </span>
                        </div>
                        <p className="ml-1 flex items-center gap-2 text-sm font-normal text-slate-500">
                            <span className="block size-1.5 rounded-full bg-slate-500"></span>
                            Available
                        </p>
                    </div>
                </div>
                <div className="mt-5 flex w-full items-center justify-between gap-3">
                    <button className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-slate-900 px-5 py-[11px] text-base font-medium text-violet-500 transition-colors duration-200 ease-linear hover:border-violet-500">
                        <FiEdit2 />
                        Edit
                    </button>
                    <button className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-slate-900 px-5 py-[11px] text-base font-medium text-red-500 transition-colors duration-200 ease-linear hover:border-red-500">
                        <FiTrash2 className="mb-1" />
                        Delete
                    </button>
                </div>
            </div>
        </article>
    );
}
