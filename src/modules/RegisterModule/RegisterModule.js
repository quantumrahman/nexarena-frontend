"use client";

import { FcGoogle } from "react-icons/fc";

import Link from "next/link";
import RegisterForm from "@/components/ui/RegisterForm/RegisterForm";

export default function RegisterModule() {
    return (
        <section className="flex min-h-screen w-full items-center justify-center p-5 md:p-6 lg:px-7">
            <div className="w-full max-w-[450px] rounded-xl bg-[#010717]/70 p-5 backdrop-blur-sm">
                <div className="w-full text-center">
                    <Link
                        href={"/"}
                        className="text-lg font-bold text-white uppercase"
                    >
                        <span className="text-violet-500">Nex</span>Arena
                    </Link>
                    <div className="mt-5 w-full text-center">
                        <h1 className="text-[32px] leading-tight font-medium text-white">
                            Create Account
                        </h1>
                        <p className="mt-1 text-base font-normal text-slate-400">
                            Register to continue to NexArena
                        </p>
                    </div>
                </div>
                <div className="mt-4.5 w-full">
                    <button className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-slate-800 bg-transparent py-[11px] transition-colors duration-200 ease-linear hover:bg-[#010717]">
                        <FcGoogle className="text-2xl" />
                        <span className="text-base font-medium text-white">
                            Continue with Google
                        </span>
                    </button>
                </div>
                <div className="my-4 flex w-full items-center justify-center">
                    <div className="h-px w-full bg-slate-800"></div>
                    <p className="w-full text-center text-xs text-slate-400">
                        or continue with email
                    </p>
                    <div className="h-px w-full bg-slate-800"></div>
                </div>
                <RegisterForm />
                <div className="mt-4 w-full text-center">
                    <p className="text-sm font-normal text-slate-400">
                        Have an account?{" "}
                        <Link
                            href={"/auth/login"}
                            className="text-violet-500 hover:underline"
                        >
                            Login here
                        </Link>
                    </p>
                </div>
                <p className="mt-5 text-center text-xs font-medium text-slate-500">
                    @ {new Date().getFullYear()} NexArena
                </p>
            </div>
        </section>
    );
}
