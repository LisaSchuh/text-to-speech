'use client'
import React, {useEffect} from "react";

export const useSpeak = () => {
    const [germanVoice, setGermanVoice] = React.useState<SpeechSynthesisVoice | null>(null);

    useEffect(() => {
        speechSynthesis.onvoiceschanged = () => {
            const voices = speechSynthesis.getVoices();

            const germanVoices = voices.filter(voice => voice.lang.startsWith('de'));
            const preferredVoice = germanVoices.filter(voice => voice.voiceURI.includes('Martin'));

            if (preferredVoice.length > 0) {
                setGermanVoice(preferredVoice[0]);
            } else if (germanVoices.length > 0) {
                setGermanVoice(germanVoices[0]);
            } else {
                console.warn("No German voice found, fallback to default");
            }
        };
    }, []);

    function speakGerman(input: string) {
        const utterance = new SpeechSynthesisUtterance(input);
        utterance.voice = germanVoice;
        utterance.lang = "de-DE";
        speechSynthesis.speak(utterance);
    }

    return {speakGerman};
}