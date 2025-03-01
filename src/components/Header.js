"use client";
import "./Header.css";
import { useState, useEffect } from "react";

const WORD = "KOETRY";
const RANDOM_CHARS = "@#$&*%";
const DURATION = 70; // Скорость смены символов (мс)
const CYCLES = 16; // Количество прокруток перед остановкой
const LETTER_DELAY = 500; // Время между остановкой каждой буквы (мс)

export default function Header() {
    const [letters, setLetters] = useState(generateRandomChars(WORD.length));

    useEffect(() => {
        let index = 0;

        function animateLetter(i) {
            let cycleCount = 0;

            const letterInterval = setInterval(() => {
                setLetters((prev) => {
                    const newLetters = [...prev];
                    if (cycleCount < CYCLES) {
                        newLetters[i] = getRandomChar(); // Прокрутка случайных букв
                    } else {
                        newLetters[i] = WORD[i]; // Фиксация нужной буквы
                        clearInterval(letterInterval);
                    }
                    return newLetters;
                });
                cycleCount++;
            }, DURATION);
        }

        function startAnimation() {
            setLetters(generateRandomChars(WORD.length)); // Сброс на случайные символы
            index = 0;

            const interval = setInterval(() => {
                animateLetter(index);
                index++;

                if (index >= WORD.length) clearInterval(interval);
            }, LETTER_DELAY);
        }

        startAnimation();
    }, []);

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