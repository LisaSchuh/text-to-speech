import React, {useEffect} from 'react';
import {getWords, removeWord, saveText} from "@/backend/wordsService";
import {InputElement} from "@/app/components/input";
import {WordBubbleDelete} from "@/app/components/wordBubbleDelete";

export default async function DeletePage() {
    const words = await getWords();

    return (
        <div className="bg-light-yellow text-black min-h-screen flex flex-col items-center justify-start p-4">
            {/* Top Section */}
            <header className="w-full flex flex-col items-center">
                <InputElement onSave={saveText}/>
            </header>

            {/* Tag Bubbles Section */}
            <section className="w-full max-w-4xl mt-8">
                <div className="flex flex-wrap gap-4 justify-center items-center pb-4">
                    {
                        words.map((word) =>
                            <WordBubbleDelete key={word.id} id={word.id ?? 0} word={word.text_value}
                                              onDelete={removeWord}/>
                        )
                    }
                </div>
            </section>

            {/* Delete Mode Toggle Button */}
            <a
                href={"/71ba490c-3c9e-47fd-8a76-f8ba893d38f7"}
                className={`text-3xl my-8 px-4 py-2 rounded-md focus:outline-none ml-2 
               bg-green-500 hover:bg-green-600 text-white 
            `}
                aria-label="Delete mode toggler"
            >
                Zurück zu sprechen
            </a>
        </div>
    );
}
