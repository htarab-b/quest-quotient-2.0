import React, { useState } from 'react';

function Ideathon() {
    const [submitted, setSubmitted] = useState(false);

    const participantentryname = ["entry.1702256326", "entry.17889912", "entry.290750135", "entry.1729181880", "entry.435971071"];
    const participantentryphone = ["entry.44289870", "entry.1762292391", "entry.2094435182", "entry.1024829010", "entry.1649823384"];

    let minParticipants = 1;
    let maxParticipants = 2;

    const [numParticipants, setNumParticipants] = useState(minParticipants);
    const changeNumParticipants = (e) => {
        setNumParticipants(parseInt(e.target.value, 10));
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-black text-white">
            <section className="py-6">
                <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                    <div className="py-6 md:py-0 md:px-6 my-auto">
                        <h1 className="text-4xl font-bold text-center">Ideathon Registration</h1>
                        <p className="pt-2 pb-4 text-center">Please read the rulebook below before applying</p>
                        <div className="">
                            <p className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-1/12 h-1/12 mr-1">
                                    <path d="M12.096 16q0 1.632 1.152 2.784t2.752 1.12 2.752-1.12 1.152-2.784-1.152-2.752-2.752-1.152-2.752 1.152-1.152 2.752z"></path>
                                </svg>
                                <span className="w-11/12 mt-1 sm:mt-2">Teams should consist of upto two members.</span>
                            </p>
                            <p className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-1/12 h-1/12 mr-1">
                                    <path d="M12.096 16q0 1.632 1.152 2.784t2.752 1.12 2.752-1.12 1.152-2.784-1.152-2.752-2.752-1.152-2.752 1.152-1.152 2.752z"></path>
                                </svg>
                                <span className="w-11/12 mt-1 sm:mt-2">Each team will be given 5 minutes.</span>
                            </p>
                            <p className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-1/12 h-1/12 mr-1">
                                    <path d="M12.096 16q0 1.632 1.152 2.784t2.752 1.12 2.752-1.12 1.152-2.784-1.152-2.752-2.752-1.152-2.752 1.152-1.152 2.752z"></path>
                                </svg>
                                <span className="w-11/12 mt-1 sm:mt-2">Participants are required to prepare their own scripts and PowerPoint  Presentation.</span>
                            </p>
                            <p className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-1/12 h-1/12 mr-1">
                                    <path d="M12.096 16q0 1.632 1.152 2.784t2.752 1.12 2.752-1.12 1.152-2.784-1.152-2.752-2.752-1.152-2.752 1.152-1.152 2.752z"></path>
                                </svg>
                                <span className="w-11/12 mt-1 sm:mt-2">Each team is responsible for bringing all the necessary materials for their presentation.</span>
                            </p>
                            <p className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-1/12 h-1/12 mr-1">
                                    <path d="M12.096 16q0 1.632 1.152 2.784t2.752 1.12 2.752-1.12 1.152-2.784-1.152-2.752-2.752-1.152-2.752 1.152-1.152 2.752z"></path>
                                </svg>
                                <span className="w-11/12 mt-1 sm:mt-2">Plagiarism or outsourcing will lead to disqualification.</span>
                            </p>
                            <p className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-1/12 h-1/12 mr-1">
                                    <path d="M12.096 16q0 1.632 1.152 2.784t2.752 1.12 2.752-1.12 1.152-2.784-1.152-2.752-2.752-1.152-2.752 1.152-1.152 2.752z"></path>
                                </svg>
                                <span className="w-11/12 mt-1 sm:mt-2">The judges' decision is final and binding.</span>
                            </p>
                        </div>
                    </div>
                    <form
                        action="https://docs.google.com/forms/d/e/1FAIpQLSdzAiA1GfKv_L3uIHCk1OkAF9qaGc0WrCxi9IxY7PLPdB-xLg/formResponse"
                        method="post"
                        target="hidden_iframe"
                        onSubmit={() => setSubmitted(true)}
                        className="flex flex-col py-6 space-y-6 md:py-0 px-6 my-auto">

                        <input type="hidden" name="entry.1247644955" value="Ideathon" />

                        <h3 className="text-2xl font-bold text-center">Fill the form to register</h3>

                        {/* Dropdown to select the number of participants */}
                        <label className="block">
                            <span className="mb-1">Number of Participants</span>
                            <select
                                value={numParticipants}
                                onChange={changeNumParticipants}
                                className="block w-full rounded-sm shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 text-black p-1"
                                required
                                disabled={submitted}
                            >
                                {Array.from({ length: maxParticipants - minParticipants + 1 }, (_, i) => (
                                    <option key={i} value={minParticipants + i}>
                                        {minParticipants + i}
                                    </option>
                                ))}
                            </select>
                        </label>

                        <label className="block my-2">
                            <span className="mb-1">College Name</span>
                            <input
                                type="text"
                                name="entry.919534871"
                                className="block w-full rounded-sm shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 text-black p-1"
                                required
                                readOnly={submitted}
                            />
                        </label>

                        {/* Dynamically rendered participant input fields */}
                        {Array.from({ length: numParticipants }, (_, index) => (
                            <div key={index}>
                                <label className="block my-2">
                                    <span className="mb-1">Participant {index + 1} Name</span>
                                    <input
                                        type="text"
                                        name={participantentryname[index]}
                                        className="block w-full rounded-sm shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 text-black p-1"
                                        required
                                        readOnly={submitted}
                                    />
                                </label>
                                <label className="block my-2">
                                    <span className="mb-1">Participant {index + 1} Phone Number</span>
                                    <input
                                        type="text"
                                        name={participantentryphone[index]}
                                        className="block w-full rounded-sm shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 text-black p-1"
                                        required
                                        readOnly={submitted}
                                    />
                                </label>
                            </div>
                        ))}

                        <span className="text-center">Kindly pay Rs.100 to this Bank Account through UPI to register.</span>
                        <table className="table-auto w-full border-collapse border border-gray-300 bg-white text-black">
                            <tbody>
                            <tr>
                                <th className="border border-gray-300 px-4 py-2 text-left bg-white">BENEFICIARY NAME</th>
                                <td className="border border-gray-300 px-4 py-2 bg-white">SRMIST - FSHKTR EVENTS</td>
                            </tr>
                            <tr>
                                <th className="border border-gray-300 px-4 py-2 text-left bg-white">BANK NAME</th>
                                <td className="border border-gray-300 px-4 py-2 bg-white">City Union Bank</td>
                            </tr>
                            <tr>
                                <th className="border border-gray-300 px-4 py-2 text-left bg-white">BRANCH NAME</th>
                                <td className="border border-gray-300 px-4 py-2 bg-white">Tambaram</td>
                            </tr>
                            <tr>
                                <th className="border border-gray-300 px-4 py-2 text-left bg-white">ACCOUNT NO</th>
                                <td className="border border-gray-300 px-4 py-2 bg-white">500101013732378</td>
                            </tr>
                            <tr>
                                <th className="border border-gray-300 px-4 py-2 text-left bg-white">IFSC No</th>
                                <td className="border border-gray-300 px-4 py-2 bg-white">CIUB0000117</td>
                            </tr>
                            </tbody>
                        </table>

                        <label className="block my-2">
                            <span className="mb-1">UPI Transaction ID</span>
                            <input
                                type="text"
                                name="entry.1282453396"
                                className="block w-full rounded-sm shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 text-black p-1"
                                required
                                readOnly={submitted}
                            />
                        </label>

                        <button
                            type="submit"
                            className="self-center px-5 py-1 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-violet-600 text-gray-50 focus:ring-violet-600 hover:ring-violet-600"
                            hidden={submitted}
                        >
                            Submit
                        </button>
                    </form>
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

export default Ideathon;