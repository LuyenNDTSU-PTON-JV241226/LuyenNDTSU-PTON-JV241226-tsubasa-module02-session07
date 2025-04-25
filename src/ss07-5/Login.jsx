import React from "react";

const Login = () => {
    return (
        <div className="flex w-full h-screen font-sans">
            <div className="w-1/2 relative">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRagpOhxoJudkxMqDej1pKSBn_9xfLxVemxRg&s"
                    alt="Background"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="w-1/2 flex justify-center items-center px-10">
                <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
                    <h1 className="text-3xl font-bold mb-6 text-center">
                        Login
                    </h1>
                    <form className="space-y-5">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                E-mail
                            </label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div className="flex justify-end text-sm">
                            <a href="#" className="hover:underline">
                                Forgot password?
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white font-medium py-2.5 rounded-lg hover:bg-blue-700 transition"
                        >
                            Login
                        </button>

                        <div className="flex items-center gap-2">
                            <hr className="flex-grow border-gray-300" />
                            <span className="text-gray-400 text-sm">OR</span>
                            <hr className="flex-grow border-gray-300" />
                        </div>

                        <button
                            type="button"
                            className="w-full border border-gray-300 py-2.5 rounded-lg text-gray-700 hover:bg-gray-100 transition"
                        >
                            Register now
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;