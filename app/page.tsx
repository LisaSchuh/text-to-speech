'use client'
import React, {useEffect} from 'react';

export default function HomePage() {
    const [text, setText] = React.useState("");
    const [germanVoice, setGermanVoice] = React.useState<SpeechSynthesisVoice | null>(null);

    useEffect(() => {
        speechSynthesis.onvoiceschanged = () => {
            const voices = speechSynthesis.getVoices();

            const germanVoices = voices.filter(voice => voice.lang.startsWith('de') );
            const preferredVoice = germanVoices.filter(voice => voice.voiceURI.includes('Martin'));

            if (preferredVoice.length > 0) {
                setGermanVoice(preferredVoice[0]);
            } else if(germanVoices.length > 0) {
                setGermanVoice(germanVoices[0]);
            }
            else {
                console.warn("No German voice found, fallback to default");
            }
        };
    }, []);

    function speakGerman(input:string) {
        const utterance = new SpeechSynthesisUtterance(input);
        utterance.voice = germanVoice;
        utterance.lang = "de-DE";
        speechSynthesis.speak(utterance);
    }

    return (
        <div className="bg-white text-black min-h-screen flex flex-col items-center justify-start p-4">
            {/* Top Section */}
            <header className="w-full flex flex-col items-center">
                <div className="w-full max-w-4xl flex items-center justify-center mt-6">
                    {/* Input Field */}
                    <input
                        type="text"
                        placeholder="Type here..."
                        className="flex-1 text-3xl border-2 border-gray-300 rounded-l-md p-4 focus:outline-none"
                        aria-label="Input field"
                        onChange={(e) => setText(e.target.value)}
                    />
                    {/* Sound Button */}
                    <button
                        className="text-3xl bg-blue-500 text-white px-4 py-2 rounded-r-md focus:outline-none hover:bg-blue-600 ml-1"
                        aria-label="Play sound"
                        onClick={() => speakGerman(text)}
                    >
                        🔊
                    </button>
                    {/* Save Button */}
                    <button
                        className="text-3xl bg-green-500 text-white px-4 py-2 rounded-md focus:outline-none hover:bg-green-600 ml-2"
                        aria-label="Save"
                    >
                        💾
                    </button>
                </div>
            </header>

            {/* Tag Bubbles Section */}
            <section className="w-full max-w-4xl mt-8">
                <div className="flex flex-wrap gap-4 justify-center items-center pb-4">
                    {/* Example tag bubbles: Large text, high contrast, big padding */}
                    <button onClick={() => {
                        speakGerman("Ja")
                    }}
                            className="flex-shrink-0 text-2xl bg-gray-200 rounded-full px-6 py-3 hover:bg-gray-300 focus:outline-none">
                        Ja
                    </button>
                    <button onClick={() => {
                        speakGerman("Nein")
                    }}
                            className="flex-shrink-0 text-2xl bg-gray-200 rounded-full px-6 py-3 hover:bg-gray-300 focus:outline-none">
                        Nein
                    </button>
                    <button onClick={() => {
                        speakGerman("Danke")
                    }}
                            className="flex-shrink-0 text-2xl bg-gray-200 rounded-full px-6 py-3 hover:bg-gray-300 focus:outline-none">
                        Danke
                    </button>
                    <button onClick={() => {
                        speakGerman("Bitte")
                    }}
                            className="flex-shrink-0 text-2xl bg-gray-200 rounded-full px-6 py-3 hover:bg-gray-300 focus:outline-none">
                        Bitte
                    </button>
                    <button onClick={() => {
                        speakGerman("Hoi")
                    }}
                            className="flex-shrink-0 text-2xl bg-gray-200 rounded-full px-6 py-3 hover:bg-gray-300 focus:outline-none">
                        Hoi
                    </button>
                    <button onClick={() => {
                        speakGerman("Tschüss")
                    }}
                            className="flex-shrink-0 text-2xl bg-gray-200 rounded-full px-6 py-3 hover:bg-gray-300 focus:outline-none">
                        Tschüss
                    </button>
                    <button onClick={() => {
                        speakGerman("Hilfe")
                    }}
                            className="flex-shrink-0 text-2xl bg-gray-200 rounded-full px-6 py-3 hover:bg-gray-300 focus:outline-none">
                        Hilfe
                    </button>
                    <button onClick={() => {
                        speakGerman("Arzt")
                    }}
                            className="flex-shrink-0 text-2xl bg-gray-200 rounded-full px-6 py-3 hover:bg-gray-300 focus:outline-none">
                        Arzt
                    </button>

                </div>
            </section>
        </div>
    );
}
