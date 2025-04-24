import React from "react";

function StudyList() {
    const studies = [
        {

        },
        {

        },
        {

        },
    ];

    return (
        <div className="space-y-4">
            {studies.map((study, i) => (
                <div key={i} className="border p-4 rounded shadow hover:bg-orange-50">
                    <h2 className="text-lg font-bold mb-1">{study.title}</h2>
                    <p className="text-sm text-gray-600">{study.description}</p>
                </div>
            ))}
        </div>
    );
}

export default StudyList;