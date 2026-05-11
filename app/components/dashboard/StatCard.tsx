import React from "react";

interface StatCardProps {
    label: string;
    value: string | number;
    icon: React.ReactNode;
    accent?: boolean;
}

export const StatCard = ({ label, value, icon, accent = false }: StatCardProps) => (
    <div
        className="bg-white px-6 py-5 rounded-2xl flex justify-between items-start flex-1 hover:shadow-md transition-shadow duration-200 border"
        style={{ borderColor: "#EAD9EE" }}
    >
        <div>
            <p className="text-sm mb-2" style={{ color: "#7A002B" }}>{label}</p>
            <h3
                className="text-3xl font-black"
                style={{ color: accent ? "#AC1634" : "#3E0014" }}
            >
                {value}
            </h3>
        </div>
        <div
            className="p-2.5 rounded-xl"
            style={{ background: "#FEF7F9", color: "#7A002B" }}
        >
            {icon}
        </div>
    </div>
);