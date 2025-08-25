import React, { useEffect, useRef, useState } from "react";
import { LuChevronDown, LuPin, LuPinOff, LuSparkles } from "react-icons/lu";
import AIResponsePreview from "../../pages/InterviewPrep/components/AIResponsePreview";

const QuestionCard = ({
    question,
    answer,
    onLearnMore,
    isPinned,
    onTogglePin,
}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [height, setHeight] = useState(0);
    const contentRef = useRef(null);

    useEffect(() => {
        if (isExpanded) {
            const contentHeight = contentRef.current.scrollHeight;
            setHeight(contentHeight + 10);
        } else {
            setHeight(0);
        }
    }, [isExpanded]);

    const toggleExpand = () => {
        setIsExpanded((prev) => !prev);
    };

    return (
        <div className="mb-6">
            <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                {/* Header */}
                <div
                    className="flex items-start justify-between gap-4 px-5 py-4 select-none hover:bg-gray-50/60 cursor-pointer"
                    onClick={toggleExpand}
                >
                    <div className="flex items-start gap-3.5">
                        <span className="text-base font-semibold leading-5 text-gray-400">Q</span>
                        <h3 className="text-[16px] md:text-[18px] font-semibold text-gray-900">
                            {question}
                        </h3>
                    </div>

                    <div className="flex items-center gap-2">
                        {/* Hover actions: fade in without shifting layout */}
                        <div className="flex items-center gap-2 opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                            <button
                                type="button"
                                onClick={(e) => { e.stopPropagation(); onTogglePin(); }}
                                className="flex items-center gap-2 rounded-md border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-800 hover:border-indigo-200"
                            >
                                {isPinned ? <LuPinOff className="text-xs" /> : <LuPin className="text-xs" />}
                            </button>

                            <button
                                type="button"
                                onClick={(e) => { e.stopPropagation(); setIsExpanded(true); onLearnMore(); }}
                                className="inline-flex items-center gap-1.5 rounded-md border border-cyan-100 bg-cyan-50 px-3 py-1 text-[13px] font-medium text-cyan-800 hover:border-cyan-200"
                            >
                                <LuSparkles size={16} className="shrink-0" />
                                <span className="hidden md:block leading-none">Learn More</span>
                            </button>
                        </div>

                        <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); toggleExpand(); }}
                            className="text-gray-400 hover:text-gray-600 -mr-1"
                            aria-expanded={isExpanded}
                        >
                            <LuChevronDown
                                size={20}
                                className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                            />
                        </button>
                    </div>
                </div>

                {/* Answer INSIDE the card */}
                <div
                    className="overflow-hidden bg-gray-50/60"
                    style={{ maxHeight: height, transition: "max-height 300ms ease" }}
                >
                    <div ref={contentRef} className="px-5 pb-5 pt-0">
                        <div className="rounded-lg border text-gray-700 bg-gray-50  p-4 shadow-inner">
                            <AIResponsePreview content={answer} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default QuestionCard;
