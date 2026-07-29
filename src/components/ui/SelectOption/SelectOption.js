"use client";

import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function SelectOption({
    placeholder,
    onChange,
    value,
    options,
}) {
    const [selectOpen, setSelectOpen] = useState(false);
    const inputRef = useRef(null);

    const handleSelectToggle = () => {
        setSelectOpen((prev) => !prev);
    };

    const handleSelectClose = () => {
        setSelectOpen(false);
    };

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (inputRef.current && !inputRef.current.contains(e.target)) {
                setSelectOpen(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    return (
        <div ref={inputRef} className="relative flex w-full flex-col gap-2">
            <label
                htmlFor="facility-type"
                className="text-base font-medium text-white"
            >
                Sport Type
            </label>
            <button
                type="button"
                id="facility-type"
                onClick={handleSelectToggle}
                className={`cursor-pointer rounded-lg border border-slate-900 bg-[#010717] px-4 py-[11px] text-left text-base ${value ? "text-white" : "text-slate-500"} ${selectOpen && "ring-2 ring-violet-500"} flex items-center justify-between`}
            >
                {value || placeholder} <IoIosArrowDown />
            </button>
            {selectOpen && (
                <ul className="absolute top-22 left-0 z-10 w-full overflow-hidden rounded-lg bg-slate-900 shadow">
                    {options.map((option, idx) => (
                        <li
                            key={idx}
                            onClick={() => {
                                handleSelectClose();
                                onChange(option?.value);
                            }}
                            className="w-full cursor-pointer px-3 py-2 text-base font-normal text-white transition-colors duration-200 ease-linear hover:bg-[#010717]"
                        >
                            {option?.value}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
