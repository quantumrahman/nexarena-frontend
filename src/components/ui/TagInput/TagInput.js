"use client";

import { MdOutlineAdd } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { useRef } from "react";

export default function TagInput({ placeholder, value = [], onChange }) {
    const inputRef = useRef(null);

    const handleAddSlot = () => {
        const tag = inputRef.current.value.trim();

        if (!tag) return;

        onChange([...value, tag]);

        inputRef.current.value = "";
    };

    const handleRemoveSlot = (tag) => {
        onChange(value.filter((item) => item !== tag));
    };

    return (
        <div className="flex w-full flex-col gap-2">
            <label
                htmlFor="facility-slots"
                className="text-base font-medium text-white"
            >
                Available Slots
            </label>
            <div className="flex w-full items-center gap-3.5">
                <input
                    type="text"
                    ref={inputRef}
                    id="facility-slots"
                    placeholder={placeholder}
                    className="w-full rounded-lg border border-slate-900 bg-[#010717] px-4 py-[11px] font-normal text-white caret-violet-500 outline-none placeholder:text-slate-500 focus:ring-2 focus:ring-violet-500"
                />
                <button
                    type="button"
                    onClick={handleAddSlot}
                    className="flex h-[46px] cursor-pointer items-center justify-center gap-2 rounded-lg bg-violet-600 px-4 text-base font-medium text-white transition-colors duration-200 ease-linear hover:bg-violet-500"
                >
                    <MdOutlineAdd className="text-lg" />
                    Add
                </button>
            </div>
            {value.length > 0 && (
                <ul className="mt-1 flex w-full flex-wrap items-center gap-2">
                    {value.map((slot, idx) => (
                        <li
                            key={idx}
                            className="flex items-center justify-center gap-2 rounded-lg bg-violet-600 px-2 py-1 text-sm font-normal text-white"
                        >
                            {slot}
                            <button
                                type="button"
                                onClick={() => handleRemoveSlot(slot)}
                                className="w-fit cursor-pointer rounded-full bg-violet-500 text-base text-white hover:bg-violet-400"
                            >
                                <IoClose />
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
