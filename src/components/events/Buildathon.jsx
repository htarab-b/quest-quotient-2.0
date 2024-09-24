import React, { useState } from 'react';

function Buildathon() {
    const [submitted, setSubmitted] = useState(false);

    const participantentryname = ["entry.1702256326", "entry.17889912", "entry.290750135", "entry.1729181880", "entry.435971071"];
    const participantentryphone = ["entry.44289870", "entry.1762292391", "entry.2094435182", "entry.1024829010", "entry.1649823384"];

    let minParticipants = 1;
    let maxParticipants = 5;

    const [numParticipants, setNumParticipants] = useState(minParticipants);
    const changeNumParticipants = (e) => {
        setNumParticipants(parseInt(e.target.value, 10));
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-black text-white">
            <section className="py-6">
                <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8">
                    <div className="py-6 md:py-0 md:px-6 my-auto">
                        <h1 className="text-4xl font-bold text-center">Buildathon</h1>
                        <h1 className="text-2xl text-center">(25-09-2024)</h1>
                        <p className="pt-2 pb-4 text-center">The registrations are closed for this event.</p>
                    </div>
                </div>
            </section>
            <iframe
                name="hidden_iframe"
                id="hidden_iframe"
                style={{ display: "none" }}
                onLoad={() => {
                    if (submitted) {
                        window.alert('Response Submitted')
                    }
                }}
            ></iframe>
        </div>
    );
}

export default Buildathon;