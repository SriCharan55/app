import React from 'react'

const RoleInfoHeader = ({
    role,
    topicsToFocus,
    experience,
    questions,
    description,
    lastUpdated

}) => {
    return (

        <div className="bg-white relative overflow-hidden">
            <div className="container mx-auto max-w-7xl px-4 md:px-0">
                <div className="h-[200px] flex flex-col justify-center relative z-10">
                    <div className="flex items-center">
                        <div className="flex-grow">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h2 className="text-2xl font-medium">{role}</h2>
                                    <p className="text-sm text-medium text-gray-900 mt-1">
                                        {topicsToFocus}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="flex items-center gap-3 mt-4 ">
                        <div className="text-[10px] font-semibold text-white bg-black px-3 py-1 rounded-full">
                            Experience: {experience} {experience == 1 ? "Year" : "Years"}
                        </div>

                        <div className="text-[10px] font-semibold text-white bg-black px-3 py-1 rounded-full">
                            {questions} Q&A
                        </div>

                        <div className="text-[10px] font-semibold text-white bg-black px-3 py-1 rounded-full">
                            Last Updated: {lastUpdated}
                        </div>
                    </div>


                    <div className="w-[40vw] md:[30vw] h-[200px] flex items-center justify-center bg-white overflow-hidden abso top-0 right-0" />
                    {/* Decorative background blobs */}
                    <div className="absolute top-10 right-20 w-20 h-20 bg-gradient-to-br from-orange-400 to-pink-500 opacity-30 rotate-12" />
                    <div className="absolute top-32 right-40 w-16 h-16 bg-indigo-400 opacity-20 -rotate-6" />
                    <div className="absolute top-52 right-24 w-24 h-12 bg-purple-500 opacity-25 rotate-3" />
                    <div className="absolute top-5 right-5 w-12 h-24 bg-gradient-to-t from-blue-400 to-cyan-500 opacity-20 rotate-45" />

                </div>
            </div>
        </div>


    )
}

export default RoleInfoHeader