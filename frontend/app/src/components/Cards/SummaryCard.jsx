import React from 'react'
import {  LuTrash2 } from 'react-icons/lu'
import { getInitials } from '../../utils/helper'

const SummaryCard = ({
    colors,
    role,
    topicsToFocus,
    experience,
    questions,
    description,
    lastUpdated,
    onSelect,
    onDelete
}) => {
    return (
        <div
            onClick={onSelect}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden cursor-pointer hover:shadow-md transition relative"
        >
            {/* Top section */}
            <div
                className="p-4 flex items-start relative"
                style={{ background: colors.bgcolor }}
            >
                {/* Logo initials */}
                <div className="w-12 h-12 bg-white rounded-md flex items-center justify-center mr-4 shadow-sm">
                    <span className="text-lg font-semibold text-black">
                       {getInitials(role)}
                    </span>
                </div>

                {/* Content */}
                <div className="flex-grow">
                    <h2 className="text-[17px] font-medium text-black">{role}</h2>
                    <p className="text-xs text-gray-700">{topicsToFocus}</p>
                </div>

                {/* Delete button (always visible) */}
                <button
                    className="absolute top-3 right-3 text-xs text-rose-500 font-medium bg-rose-50 px-3 py-1 rounded border border-rose-100 hover:border-rose-200"
                    onClick={(e) => {
                        e.stopPropagation()
                        onDelete()
                    }}
                >
                    <LuTrash2  />
                </button>
            </div>

            {/* Bottom section */}
            <div className="px-4 pb-4">
                {/* Pills */}
                <div className="flex items-center gap-3 mt-3 flex-wrap">
                    <div className="text-xs font-medium text-black px-3 py-1 border border-gray-900 rounded-full">
                        Experience: {experience} {experience === 1 ? 'Year' : 'Years'}
                    </div>

                    <div className="text-xs font-medium text-black px-3 py-1 border border-gray-900 rounded-full">
                        {questions} Q&amp;A
                    </div>

                    <div className="text-xs font-medium text-black px-3 py-1 border border-gray-900 rounded-full">
                        Last Updated: {lastUpdated}
                    </div>
                </div>

                {/* Description */}
                <p className="text-[12px] text-gray-600 font-medium mt-3">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default SummaryCard
