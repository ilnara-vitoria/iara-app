"use client";

import React, { useState } from "react";

type Tab = "recomendadas" | "todas" | "candidaturas";

interface FilterBarProps {
    onTabChange?: (tab: Tab) => void;
}

const SparklesIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3 10 9l-6 2 6 2 2 6 2-6 6-2-6-2-2-6Z" />
        <path strokeLinecap="round" d="M19 3v4M21 5h-4" />
    </svg>
);

const ListIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
    </svg>
);

const SendIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M22 2 11 13M22 2 15 22l-4-9-9-4 20-7Z" />
    </svg>
);

const FilterIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M7 12h10M11 18h2" />
    </svg>
);

export function FilterBar({ onTabChange }: FilterBarProps) {
    const [activeTab, setActiveTab] = useState<Tab>("recomendadas");

    const handleTab = (tab: Tab) => {
        setActiveTab(tab);
        onTabChange?.(tab);
    };

    const tabClass = (tab: Tab) =>
        `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${activeTab === tab
            ? "text-[#7A002B]"
            : "text-[#5B002C]/60 hover:text-[#5B002C]"
        }`;

    const activeStyle = (tab: Tab): React.CSSProperties =>
        activeTab === tab ? { background: "#FEF7F9" } : {};

    return (
        <div
            className="flex bg-white px-1 py-1 rounded-xl shadow-sm gap-1 border"
            style={{ borderColor: "#EAD9EE" }}
        >
            <button
                onClick={() => handleTab("recomendadas")}
                className={tabClass("recomendadas")}
                style={activeStyle("recomendadas")}
            >
                <SparklesIcon />
                Recomendadas
            </button>

            <button
                onClick={() => handleTab("todas")}
                className={tabClass("todas")}
                style={activeStyle("todas")}
            >
                <ListIcon />
                Todas
            </button>

            <button
                onClick={() => handleTab("candidaturas")}
                className={tabClass("candidaturas")}
                style={activeStyle("candidaturas")}
            >
                <SendIcon />
                Candidaturas
            </button>

            <div className="w-px mx-1 my-1.5" style={{ background: "#EAD9EE" }} />

            <button
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:opacity-80"
                style={{ color: "#5B002C" }}
            >
                <FilterIcon />
                Filtros
            </button>
        </div>
    );
}
