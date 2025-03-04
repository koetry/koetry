"use client";
import "./Header.css";
import { useState, useEffect } from "react";

const RANDOM_CHARS = "@#$&*%";
const DURATION = 70;
const CYCLES = 16;
const LETTER_DELAY = 500;

export default function Header({ word = "Koetry" }) {
    const [letters, setLetters] = useState(() => generateRandomChars(word.length));

    useEffect(() => {
        let index = 0;

        function animateLetter(i) {
            let cycleCount = 0;

            const letterInterval = setInterval(() => {
                setLetters((prev) => {
                    const newLetters = [...prev];
                    if (cycleCount < CYCLES) {
                        newLetters[i] = getRandomChar();
                    } else {
                        newLetters[i] = word[i];
                        clearInterval(letterInterval);
                    }
                    return newLetters;
                });
                cycleCount++;
            }, DURATION);
        }

        function startAnimation() {
            setLetters(generateRandomChars(word.length)); 
            index = 0;

            const interval = setInterval(() => {
                animateLetter(index);
                index++;

                if (index >= word.length) clearInterval(interval);
            }, LETTER_DELAY);
        }

        startAnimation();
    }, [word]); // Добавлен `word` в зависимости useEffect

    return (
        <header className="header">
            <h1 className="h1">
                {letters.map((letter, i) => (
                    <span key={i} className="letter">{letter}</span>
                ))}
            </h1>
        </header>
    );
}

function generateRandomChars(length) {
    return Array.from({ length }, () => getRandomChar());
}

function getRandomChar() {
    return RANDOM_CHARS[Math.floor(Math.random() * RANDOM_CHARS.length)];
}
