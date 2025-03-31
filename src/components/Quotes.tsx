import React, { useEffect, useState } from "react";
export default function Quotes() {
    const [activeQuote, setActiveQuote] = useState(0)

    // Sample quotes for the quote block
    const quotes = [
        "Where words fail, writing speaks.",
        "Reading is breathing in; writing is breathing out.",
        "The first draft is just you telling yourself the story.",
        "Write hard and clear about what hurts.",
        "A word after a word after a word is power.",
    ];

    // Rotate through quotes every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
        setActiveQuote((prev) => (prev + 1) % quotes.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [])


    return (
        <section className="bg-gradient-to-r from-gray-900 to-black py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                <div className="relative h-32">
                    {quotes.map((quote, index) => (
                    <p
                        key={index}
                        className={`flex items-center justify-center absolute inset-0 transition-opacity duration-1000 ${
                        index === activeQuote ? "opacity-100" : "opacity-0"
                        } text-2xl font-light italic text-gray-300 md:text-3xl`}
                    >
                        "{quote}"
                    </p>
                    ))}
                </div>
                </div>
            </div>
        </section>
    );
}