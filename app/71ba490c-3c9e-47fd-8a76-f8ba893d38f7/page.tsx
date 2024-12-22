import React from 'react';
import {getWords, saveText} from "@/backend/wordsService";
import {InputElement} from "@/app/components/input";

export default async function HomePage() {
    const words = await getWords();

    return (
        <div className="bg-light-yellow text-black min-h-screen flex flex-col items-center justify-start p-4">
            {/* Top Section */}
            <header className="w-full flex flex-col items-center">
                <InputElement onSave={saveText} />
            </header>
            {
                words.map((word) =>
                    <div key={word.id} className="flex-shrink-0 text-2xl bg-gray-200 rounded-full px-6 py-3 hover:bg-gray-300 focus:outline-none">
                        {word.text_value}
                    </div>
                )
            }
            {/* Tag Bubbles Section */}
            {/*<section className="w-full max-w-4xl mt-8">*/}
            {/*    <div className="flex flex-wrap gap-4 justify-center items-center pb-4">*/}
            {/*        {*/}
            {/*            words.map((word) =>*/}
            {/*                <WordBubble key={word.id} word={word.text_value}/>*/}
            {/*            )*/}
            {/*        }*/}
            {/*    </div>*/}
            {/*</section>*/}

            {/* Delete Mode Toggle Button */}
            <a
                href={"/71ba490c-3c9e-47fd-8a76-f8ba893d38f7/delete"}
                className={`text-3xl my-8 px-4 py-2 rounded-md focus:outline-none ml-2 
               bg-red-500 hover:bg-red-600 text-white 
            `}
                aria-label="Delete mode toggler"
            >
                Löschen
            </a>
        </div>
    );
}
