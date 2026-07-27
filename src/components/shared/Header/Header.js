"use client";

import { RiMenu3Fill } from "react-icons/ri";

import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 z-30 w-full px-5 pt-5 md:px-6 md:pt-10 lg:px-7">
            <div className="mx-auto flex w-full max-w-5xl items-center justify-between rounded-xl border border-slate-900 bg-[#010717]/70 px-4 py-3 backdrop-blur-lg md:px-5 md:py-3">
                <h1 className="text-lg leading-tight font-bold text-white uppercase">
                    <span className="text-violet-500">Nex</span>Arena
                </h1>
                <nav className="hidden w-fit md:block">
                    <ul className="flex items-center justify-center gap-4">
                        <li className="text-base font-medium">
                            <Link
                                href={"/"}
                                className="text-violet-500 transition-colors duration-200 ease-linear hover:text-slate-400"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="text-base font-medium">
                            <Link
                                href={"/facilities"}
                                className="text-slate-500 transition-colors duration-200 ease-linear hover:text-slate-400"
                            >
                                Facilities
                            </Link>
                        </li>
                        <li className="text-base font-medium">
                            <Link
                                href={"/auth/login"}
                                className="text-slate-500 transition-colors duration-200 ease-linear hover:text-slate-400"
                            >
                                Log in
                            </Link>
                        </li>
                    </ul>
                </nav>
                <button className="block flex cursor-pointer items-center justify-center text-lg text-white transition-colors duration-200 ease-linear hover:text-violet-500 md:hidden">
                    <RiMenu3Fill />
                </button>
            </div>
        </header>
    );
}
