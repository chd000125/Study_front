import React from "react";

const categories = [

];

function CategoryGrid() {
    return (
        <div className="grid grid-cols-3 gap-4 mb-8 w-full max-w-4xl">
            {categories.map((cat, i) => (
                <div
                    key={i}
                    className="bg-gray-100 flex flex-col justify-center items-center p-6 rounded-2xl shadow-md hover:bg-primary hover:text-white transition"
                >
                    <div className="text-3xl">{cat.emoji}</div>
                    <div className="mt-2 font-semibold text-sm">{cat.label}</div>
                </div>
                ))}
            </div>
    );
}

export default CategoryGrid