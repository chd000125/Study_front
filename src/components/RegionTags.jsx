import React from "react";

const tags = [

];

function RegionTags() {
    return (
        <div className="flex flex-wrap justify-center gap-2">
            {tags.map((tag, index) => (
                <span
                    key={index}
                    className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:bg-gray-100 transition cursor-pointer"
                >
          {tag}
        </span>
            ))}
        </div>
    );
}

export default RegionTags;
