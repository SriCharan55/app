import React, { useRef, useState } from 'react'
import { LuUser, LuUpload, LuTrash } from "react-icons/lu"

const ProfilePhotoSelector = ({ image, setImage, preview, setPreview }) => {

    const inputRef = useRef(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const handleImageEvent = (e) => {
        const file = e.target.files[0];
        if (file) {
            //Update the Image State
            setImage(file);

            //Generate a preview URL From File
            const preview = URL.createObjectURL(file);

            if (setPreview) {
                setPreview(preview);
            }
            setPreviewUrl(preview);
        }
    };

    const handleRemoveImage = () => {
        setImage(null);
        setPreviewUrl(null);

        if (setPreview) {
            setPreview(null);
        }
    };

    const onChooseFile = () => {
        if (inputRef.current) {
            inputRef.current.click();
        }
    };

    return (
        <div className="flex flex-col items-center gap-4">
            {/* Hidden file input */}
            <input
                type="file"
                ref={inputRef}
                onChange={handleImageEvent}
                className="hidden"
                aria-hidden="true"
            />

            {/* Avatar preview with overlay button */}
            <div className="relative w-32 h-32">
                <div className="w-32 h-32 rounded-full overflow-hidden flex items-center justify-center bg-amber-50 border-2 border-amber-100 shadow-sm">
                    {previewUrl ? (
                        <img
                            src={previewUrl}
                            alt="Profile Preview"
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="flex flex-col items-center justify-center text-amber-600">
                            <LuUser size={44} />
                        </div>
                    )}
                </div>

                {/* Overlay button changes depending on state */}
                {previewUrl ? (
                    <button
                        type="button"
                        onClick={handleRemoveImage}
                        aria-label="Remove profile photo"
                        className="absolute right-0 bottom-0 translate-x-2 translate-y-2 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-lg border-2 border-white"
                    >
                        <LuTrash size={16} />
                    </button>
                ) : (
                    <button
                        type="button"
                        onClick={onChooseFile}
                        aria-label="Upload profile photo"
                        className="absolute right-0 bottom-0 translate-x-2 translate-y-2 bg-amber-500 hover:bg-amber-600 text-white p-2 rounded-full shadow-lg border-2 border-white"
                    >
                        <LuUpload size={16} />
                    </button>
                )}
            </div>

            {/* Screen reader fallback */}
            <div className="sr-only">
                <button onClick={onChooseFile}>Upload photo</button>
            </div>
        </div>
    );
}

    export default ProfilePhotoSelector