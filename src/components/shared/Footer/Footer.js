"use client";

import { FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full px-5 md:px-6 lg:px-7">
            <div className="mx-auto w-full max-w-7xl border-y border-slate-900 py-10">
                <div className="w-full text-center">
                    <h1 className="text-2xl leading-tight font-bold text-white uppercase">
                        <span className="text-violet-500">Nex</span>Arena
                    </h1>
                </div>
                <nav className="mt-5 w-full md:mt-10">
                    <ul className="flex flex-wrap items-center justify-center gap-5">
                        <li className="text-base font-normal">
                            <Link
                                href={"/"}
                                className="text-slate-500 transition-all duration-200 ease-linear hover:text-slate-400"
                            >
                                Privacy policy
                            </Link>
                        </li>
                        <li className="text-base font-normal">
                            <Link
                                href={"/"}
                                className="text-slate-500 transition-all duration-200 ease-linear hover:text-slate-400"
                            >
                                Terms & condition
                            </Link>
                        </li>
                        <li className="text-base font-normal">
                            <Link
                                href={"/"}
                                className="text-slate-500 transition-all duration-200 ease-linear hover:text-slate-400"
                            >
                                About us
                            </Link>
                        </li>
                        <li className="text-base font-normal">
                            <Link
                                href={"/"}
                                className="text-slate-500 transition-all duration-200 ease-linear hover:text-slate-400"
                            >
                                How it works
                            </Link>
                        </li>
                        <li className="text-base font-normal">
                            <Link
                                href={"/"}
                                className="text-slate-500 transition-all duration-200 ease-linear hover:text-slate-400"
                            >
                                Support
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between py-4">
                <span className="text-sm font-medium text-slate-600">
                    @ {new Date().getFullYear()} NexArena.
                </span>
                <div className="flex items-center justify-center gap-3">
                    <Link
                        href={"/"}
                        className="text-sm text-slate-600 transition-all duration-200 ease-linear hover:text-white"
                    >
                        <FaLinkedinIn />
                    </Link>
                    <Link
                        href={"/"}
                        className="text-sm text-slate-600 transition-all duration-200 ease-linear hover:text-white"
                    >
                        <FaInstagram />
                    </Link>
                    <Link
                        href={"/"}
                        className="text-sm text-slate-600 transition-all duration-200 ease-linear hover:text-white"
                    >
                        <FaXTwitter />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
