"use client";

export default function RegisterForm() {
    return (
        <div className="w-full">
            <form>
                <div className="mb-3.5 flex w-full flex-col gap-3.5 sm:flex-row">
                    <div className="flex w-full flex-col gap-2">
                        <label
                            htmlFor="your-name"
                            className="w-fit text-base font-medium text-white"
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="your-name"
                            placeholder="john doe"
                            className="w-full rounded-lg border border-slate-800 bg-[#010717]/50 px-4 py-[11px] font-normal text-white caret-violet-500 outline-none placeholder:font-light placeholder:text-slate-400 focus:ring-2 focus:ring-violet-500"
                        />
                    </div>
                    <div className="flex w-full flex-col gap-2">
                        <label
                            htmlFor="your-photo"
                            className="w-fit text-base font-medium text-white"
                        >
                            Photo (url)
                        </label>
                        <input
                            type="text"
                            id="your-photo"
                            placeholder="http://example.image.com/photo"
                            className="w-full rounded-lg border border-slate-800 bg-[#010717]/50 px-4 py-[11px] font-normal text-white caret-violet-500 outline-none placeholder:font-light placeholder:text-slate-400 focus:ring-2 focus:ring-violet-500"
                        />
                    </div>
                </div>
                <div className="w-full space-y-3.5">
                    <div className="flex w-full flex-col gap-2">
                        <label
                            htmlFor="your-email"
                            className="text-base font-medium text-white"
                        >
                            Email Address
                        </label>
                        <input
                            type="text"
                            id="your-email"
                            placeholder="example@you.com"
                            className="w-full rounded-lg border border-slate-800 bg-[#010717]/50 px-4 py-[11px] font-normal text-white caret-violet-500 outline-none placeholder:font-light placeholder:text-slate-400 focus:ring-2 focus:ring-violet-500"
                        />
                    </div>
                    <div className="flex w-full flex-col gap-2">
                        <label
                            htmlFor="your-password"
                            className="text-base font-medium text-white"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="your-password"
                            placeholder="passowrd"
                            className="w-full rounded-lg border border-slate-800 bg-[#010717]/50 px-4 py-[11px] font-normal text-white caret-violet-500 outline-none placeholder:font-light placeholder:text-slate-400 focus:ring-2 focus:ring-violet-500"
                        />
                    </div>
                </div>
                <div className="mt-6 w-full">
                    <button className="w-full cursor-pointer rounded-lg bg-violet-600 py-[11px] text-base font-medium text-white transition-colors duration-200 ease-linear hover:bg-violet-500">
                        Continue
                    </button>
                </div>
            </form>
        </div>
    );
}
