import React from 'react'

function Buildathon() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
        <section className="py-6">
            <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                <div className="py-6 md:py-0 md:px-6 my-auto">
                    <h1 className="text-4xl font-bold text-center">Buildathon Registration</h1>
                    <p className="pt-2 pb-4 text-center">Please read the rulebook below before applying</p>
                    <div className="">
                        <p className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-1/12 h-1/12 mr-1">
                                <path d="M12.096 16q0 1.632 1.152 2.784t2.752 1.12 2.752-1.12 1.152-2.784-1.152-2.752-2.752-1.152-2.752 1.152-1.152 2.752z"></path>
                            </svg>
                            <span className="w-11/12 mt-1 sm:mt-2">Team must consist of atleast of 1 and maximum of 5 members and should be registered before the given deadline.</span>
                        </p>
                        <p className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-1/12 h-1/12 mr-1">
                                <path d="M12.096 16q0 1.632 1.152 2.784t2.752 1.12 2.752-1.12 1.152-2.784-1.152-2.752-2.752-1.152-2.752 1.152-1.152 2.752z"></path>
                            </svg>
                            <span className="w-11/12 mt-1 sm:mt-2">Project must be related to the given theme for buildathon.</span>
                        </p>
                        <p className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-1/12 h-1/12 mr-1">
                                <path d="M12.096 16q0 1.632 1.152 2.784t2.752 1.12 2.752-1.12 1.152-2.784-1.152-2.752-2.752-1.152-2.752 1.152-1.152 2.752z"></path>
                            </svg>
                            <span className="w-11/12 mt-1 sm:mt-2">Teams must present their projects within their allocated time (Explaining the concept, design and functionality.</span>
                        </p>
                        <p className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-1/12 h-1/12 mr-1">
                                <path d="M12.096 16q0 1.632 1.152 2.784t2.752 1.12 2.752-1.12 1.152-2.784-1.152-2.752-2.752-1.152-2.752 1.152-1.152 2.752z"></path>
                            </svg>
                            <span className="w-11/12 mt-1 sm:mt-2">Projects will be evaluated on innovation, functionality, design and project related to the theme.</span>
                        </p>
                    </div>
                </div>
                <form noValidate="" className="flex flex-col py-6 space-y-6 md:py-0 px-6 my-auto">
                    <h3 className="text-2xl font-bold text-center">Fill the form to register</h3>
                    <label className="block">
                        <span className="mb-1">Full name</span>
                        <input type="text" className="block w-full rounded-sm shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 text-black p-1" />
                    </label>
                    <label className="block">
                        <span className="mb-1">Email address</span>
                        <input type="email" className="block w-full rounded-sm shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 text-black p-1" />
                    </label>
                    <label className="block">
                        <span className="mb-1">Phone Number</span>
                        <input type="text" className="block w-full rounded-sm shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 text-black p-1" />
                    </label>
                    <label className="block">
                        <span className="mb-1">College Name</span>
                        <input type="text" className="block w-full rounded-sm shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 text-black p-1" />
                    </label>
                    <button type="button" className="self-center px-5 py-1 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-violet-600 text-gray-50 focus:ring-violet-600 hover:ring-violet-600">Submit</button>
                </form>
            </div>
        </section>
    </div>
  )
}

export default Buildathon
