"use client";

import { FiSave } from "react-icons/fi";
import { MdOutlineRestartAlt } from "react-icons/md";
import { useState } from "react";

import SelectOption from "@/components/ui/SelectOption/SelectOption";

import sportTypeOptions from "@/constants/sportType";
import TagInput from "@/components/ui/TagInput/TagInput";

export default function CreateForm() {
    const [select, setSelect] = useState("");
    const [slot, setSlot] = useState([]);
    return (
        <div className="w-full rounded-lg bg-slate-900/50 p-5 md:p-10">
            <form>
                <div className="space-y-5">
                    <div className="flex w-full flex-col items-center justify-center gap-5 md:flex-row">
                        <div className="flex w-full flex-col gap-2">
                            <label
                                htmlFor="facility-name"
                                className="text-base font-medium text-white"
                            >
                                Facility Name
                            </label>
                            <input
                                type="text"
                                id="facility-name"
                                placeholder="Enter name"
                                className="w-full rounded-lg border border-slate-900 bg-[#010717] px-4 py-[11px] font-normal text-white caret-violet-500 outline-none placeholder:text-slate-500 focus:ring-2 focus:ring-violet-500"
                            />
                        </div>
                        <SelectOption
                            placeholder={"Select sport type"}
                            onChange={setSelect}
                            value={select}
                            options={sportTypeOptions}
                        />
                    </div>
                    <div className="flex w-full flex-col items-center justify-center gap-5 md:flex-row">
                        <div className="flex w-full flex-col gap-2">
                            <label
                                htmlFor="facility-location"
                                className="text-base font-medium text-white"
                            >
                                Location
                            </label>
                            <input
                                type="text"
                                id="facility-location"
                                placeholder="Enter location"
                                className="w-full rounded-lg border border-slate-900 bg-[#010717] px-4 py-[11px] font-normal text-white caret-violet-500 outline-none placeholder:text-slate-500 focus:ring-2 focus:ring-violet-500"
                            />
                        </div>
                        <div className="flex w-full flex-col gap-2">
                            <label
                                htmlFor="facility-image"
                                className="text-base font-medium text-white"
                            >
                                Image (url)
                            </label>
                            <input
                                type="text"
                                id="facility-image"
                                placeholder="https://example.com/image"
                                className="w-full rounded-lg border border-slate-900 bg-[#010717] px-4 py-[11px] font-normal text-white caret-violet-500 outline-none placeholder:text-slate-500 focus:ring-2 focus:ring-violet-500"
                            />
                        </div>
                    </div>
                    <div className="flex w-full flex-col items-center justify-center gap-5 md:flex-row">
                        <div className="flex w-full flex-col gap-2">
                            <label
                                htmlFor="facility-capacity"
                                className="text-base font-medium text-white"
                            >
                                Capacity
                            </label>
                            <input
                                type="text"
                                id="facility-capacity"
                                placeholder="Enter capacity"
                                inputMode="numeric"
                                pattern="[0-9]"
                                className="w-full rounded-lg border border-slate-900 bg-[#010717] px-4 py-[11px] font-normal text-white caret-violet-500 outline-none placeholder:text-slate-500 focus:ring-2 focus:ring-violet-500"
                            />
                        </div>
                        <div className="flex w-full flex-col gap-2">
                            <label
                                htmlFor="facility-price"
                                className="text-base font-medium text-white"
                            >
                                Price Per Hour
                            </label>
                            <input
                                type="text"
                                id="facility-price"
                                placeholder="Enter price per hour"
                                inputMode="numeric"
                                pattern="[0-9]"
                                className="w-full rounded-lg border border-slate-900 bg-[#010717] px-4 py-[11px] font-normal text-white caret-violet-500 outline-none placeholder:text-slate-500 focus:ring-2 focus:ring-violet-500"
                            />
                        </div>
                    </div>
                    <div className="flex w-full flex-col items-center justify-center gap-5">
                        <TagInput
                            placeholder={"Available slots (06:00 AM - 07:00 AM"}
                            value={slot}
                            onChange={setSlot}
                        />
                        <div className="flex w-full flex-col gap-2">
                            <label
                                htmlFor="facility-description"
                                className="text-base font-medium text-white"
                            >
                                Description
                            </label>
                            <textarea
                                type="text"
                                id="facility-description"
                                rows={5}
                                placeholder="Describe facility, amenities, rules, etc..."
                                className="w-full resize-none rounded-lg border border-slate-900 bg-[#010717] px-4 py-[11px] font-normal text-white caret-violet-500 outline-none placeholder:text-slate-500 focus:ring-2 focus:ring-violet-500"
                            />
                        </div>
                    </div>
                    <div className="mt-5 flex w-full items-center justify-end gap-3">
                        <button className="flex w-fit cursor-pointer items-center justify-center gap-2 rounded-lg border border-slate-900 px-5 py-[11px] text-base font-medium text-violet-500 transition-colors duration-200 ease-linear hover:border-violet-500">
                            <MdOutlineRestartAlt />
                            Reset
                        </button>
                        <button className="flex w-fit cursor-pointer items-center justify-center gap-2 rounded-lg bg-violet-600 px-5 py-[11px] text-base font-medium text-white transition-colors duration-200 ease-linear hover:bg-violet-500">
                            <FiSave className="mb-0.5" />
                            Create
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
