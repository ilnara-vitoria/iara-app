import { Badge } from "../ui/Badge";

interface JobProps {
    title: string;
    company: string;
    location: string;
    type: string;
    postedAt: string;
    tags: string[];
    salaryRange: string;
    matchPercent: number;
}

function LocationIcon() {
    return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z" />
            <circle cx="12" cy="9" r="2.5" />
        </svg>
    );
}

function BriefcaseIcon() {
    return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
            <rect x="3" y="7" width="18" height="13" rx="2" />
            <path strokeLinecap="round" d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </svg>
    );
}

function ClockIcon() {
    return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
            <circle cx="12" cy="12" r="9" />
            <path strokeLinecap="round" d="M12 7v5l3 3" />
        </svg>
    );
}

function BookmarkIcon() {
    return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16l-7-3.5L5 21V5z" />
        </svg>
    );
}

// Match badge color by percentage
function matchBg(pct: number) {
    if (pct >= 90) return "#3E0014";
    if (pct >= 85) return "#5B002C";
    return "#7A002B";
}

export const JobCard = ({
    title,
    company,
    location,
    type,
    postedAt,
    tags,
    salaryRange,
    matchPercent,
}: JobProps) => {
    return (
        <div
            className="bg-white px-7 py-6 rounded-2xl border hover:shadow-md transition-shadow duration-200"
            style={{ borderColor: "#EAD9EE" }}
        >
            <div className="flex justify-between items-start gap-4">
                {/* Left */}
                <div className="flex-1 min-w-0 space-y-3">
                    <h3 className="text-[17px] font-bold" style={{ color: "#3E0014" }}>
                        {title}
                    </h3>
                    <p className="font-semibold text-sm" style={{ color: "#5B002C" }}>
                        {company}
                    </p>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm" style={{ color: "#AC1634" }}>
                        <span className="flex items-center gap-1.5"><LocationIcon />{location}</span>
                        <span className="flex items-center gap-1.5"><BriefcaseIcon />{type}</span>
                        <span className="flex items-center gap-1.5"><ClockIcon />{postedAt}</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}
                    </div>

                    <p className="font-bold text-base" style={{ color: "#3E0014" }}>
                        {salaryRange}
                    </p>
                </div>

                {/* Match badge */}
                <div className="flex flex-col items-center gap-1.5 shrink-0">
                    <div
                        className="text-white px-5 py-3 rounded-2xl flex flex-col items-center min-w-[80px]"
                        style={{ background: matchBg(matchPercent) }}
                    >
                        <span className="text-2xl font-black leading-none">{matchPercent}%</span>
                        <span className="text-[10px] uppercase tracking-widest mt-1">Match</span>
                    </div>
                    <span
                        className="text-xs font-semibold flex items-center gap-0.5"
                        style={{ color: "#AC1634" }}
                    >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                        </svg>
                        Alto
                    </span>
                </div>
            </div>

            {/* Actions */}
            <div className="mt-5 flex gap-3">
                <button
                    className="flex-1 text-white py-3 rounded-xl font-semibold text-sm transition-all active:scale-[0.99] hover:opacity-90"
                    style={{ background: "#3E0014" }}
                >
                    Candidatar-se
                </button>
                <button
                    className="p-3 border rounded-xl transition-colors hover:bg-[#FEF7F9]"
                    style={{ borderColor: "#EAD9EE", color: "#AC1634" }}
                >
                    <BookmarkIcon />
                </button>
            </div>
        </div>
    );
};