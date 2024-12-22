'use client'
import React from "react";
import {useSpeak} from "@/app/components/useSpeak";

export const WordBubble = ({word}:{word:string}) => {
    const {speakGerman} = useSpeak();
    return (
        <button onClick={() => {
            speakGerman(word)
        }}
                className="flex-shrink-0 text-2xl bg-gray-200 rounded-full px-6 py-3 hover:bg-gray-300 focus:outline-none">
            {word}
        </button>
    )
}