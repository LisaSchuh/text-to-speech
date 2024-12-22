'use client'

import React from "react";
import {useSpeak} from "@/app/components/useSpeak";

export const SoundButton = () => {
    const {speakGerman} = useSpeak();
    return <button
        className="text-3xl bg-blue-500 text-white px-4 py-2 rounded-r-md focus:outline-none hover:bg-blue-600 ml-1"
        aria-label="Play sound"
        onClick={() => {
            //hacks be hacking
            const inputField = document.getElementById("textInput");
            speakGerman(inputField?.value ?? "");
            inputField.value = "";
        }}
        type={"button"}
    >
        🔊
    </button>
}