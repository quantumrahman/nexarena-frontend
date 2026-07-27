"use client";

import { FaArrowRight, FaRegStar } from "react-icons/fa6";
import { FiBookOpen, FiUsers } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";

export default function BannerFeature() {
    return (
        <section className="relative w-full bg-[url('/img/auth.webp')] bg-cover bg-no-repeat px-5 md:px-6 lg:px-7">
            <div className="absolute inset-0 h-full bg-gradient-to-t from-transparent via-transparent to-[#010717]"></div>
            <div className="relative z-10 pt-35 pb-15 md:pt-45 md:pb-30 lg:pt-50 lg:pb-30">
                <div className="mx-auto w-full max-w-7xl">
                    <div className="flex items-center gap-2">
                        <div className="size-2 rounded-full bg-violet-500"></div>
                        <span className="text-xs font-semibold tracking-tight text-slate-500 uppercase md:text-sm">
                            Premium sports facilities
                        </span>
                    </div>
                    <div className="mt-5 w-full max-w-[300px] md:max-w-[400px] lg:max-w-xl">
                        <h1 className="text-5xl leading-tight font-bold text-white capitalize md:text-6xl lg:text-7xl">
                            Play more.{" "}
                            <span className="bg-linear-to-l from-violet-500 to-white bg-clip-text text-transparent">
                                Worry less.
                            </span>
                        </h1>
                        <p className="mt-5 text-base font-medium text-slate-500 md:text-lg">
                            Book the best sports facilities near you. Anytime,
                            anywhere.
                        </p>
                    </div>
                    <div className="mt-10 flex items-center gap-4">
                        <button className="cursor-pointer rounded-lg bg-violet-600 px-5 py-[11px] text-sm font-medium text-white transition-colors duration-200 ease-linear hover:bg-violet-500 sm:text-base">
                            Join for free
                        </button>
                        <button className="font-me group flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-slate-800 bg-transparent px-5 py-[11px] text-sm text-white transition-colors duration-200 ease-linear hover:border-violet-500 sm:text-base">
                            Browse Facilities{" "}
                            <FaArrowRight className="transform transition-transform duration-200 ease-linear group-hover:translate-x-1" />
                        </button>
                    </div>
                </div>
                <div className="mx-auto mt-10 grid w-full max-w-7xl grid-cols-2 place-items-center gap-6 rounded-xl bg-[#010717]/50 p-5 backdrop-blur-sm md:mt-20 md:grid-cols-4 lg:mt-30">
                    <div className="flex w-full items-center justify-center gap-5">
                        <FiUsers className="text-2xl text-violet-500 md:text-2xl lg:text-3xl" />
                        <div className="space-y-0.5">
                            <h3 className="text-xl font-semibold text-white md:text-2xl lg:text-3xl">
                                15K+
                            </h3>
                            <p className="text-xs font-medium text-slate-500 md:text-sm lg:text-base">
                                Happy Players
                            </p>
                        </div>
                    </div>
                    <div className="flex w-full items-center justify-center gap-5">
                        <FiBookOpen className="text-2xl text-violet-500 md:text-2xl lg:text-3xl" />
                        <div className="space-y-0.5">
                            <h3 className="text-xl font-semibold text-white md:text-2xl lg:text-3xl">
                                200+
                            </h3>
                            <p className="text-xs font-medium text-slate-500 md:text-sm lg:text-base">
                                Facilities
                            </p>
                        </div>
                    </div>
                    <div className="flex w-full items-center justify-center gap-5">
                        <GrLocation className="text-2xl text-violet-500 md:text-2xl lg:text-3xl" />
                        <div className="space-y-0.5">
                            <h3 className="text-xl font-semibold text-white md:text-2xl lg:text-3xl">
                                50+
                            </h3>
                            <p className="text-xs font-medium text-slate-500 md:text-sm lg:text-base">
                                Covered Cities
                            </p>
                        </div>
                    </div>
                    <div className="flex w-full items-center justify-center gap-5">
                        <FaRegStar className="text-2xl text-violet-500 md:text-2xl lg:text-3xl" />
                        <div className="space-y-0.5">
                            <h3 className="text-xl font-semibold text-white md:text-2xl lg:text-3xl">
                                4.9
                            </h3>
                            <p className="text-xs font-medium text-slate-500 md:text-sm lg:text-base">
                                Ratings
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 h-full bg-gradient-to-b from-transparent via-transparent to-[#010717]"></div>
        </section>
    );
}
