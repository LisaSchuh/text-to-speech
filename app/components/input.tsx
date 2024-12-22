'use server'
import React, {useEffect} from "react";
import {SoundButton} from "@/app/components/soundButton";

export const InputElement = async ({onSave}) => {

    return (
        <div className="w-full max-w-4xl flex items-center justify-center mt-6">
            <form action={onSave}>
                <input
                    id="textInput"
                    name="textInput"
                    type="text"
                    placeholder="Type here..."
                    className="flex-1 text-3xl border-2 border-gray-300 rounded-l-md p-4 focus:outline-none"
                    aria-label="Input field"
                />
                {/* Speak Button */}
                <SoundButton />
                {/* Save Button */}
                <button
                    className="text-3xl bg-green-500 text-white px-4 py-2 rounded-md focus:outline-none hover:bg-green-600 ml-2"
                    aria-label="Save"
                    type={"submit"}
                >
                    💾
                </button>

            </form>

        </div>);
}