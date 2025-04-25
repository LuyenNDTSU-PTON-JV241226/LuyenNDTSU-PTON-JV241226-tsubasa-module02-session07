import React from "react";
import Header from "../components/Header";
import { FaCaretRight } from "react-icons/fa";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className="container mt-10 pl-[100px] tracking-widest flex">
                <div className="content w-2/5">
                    <h3 className="font-[Poppins] font-bold text-orange-400 text-[20px]">
                        Best Destinations around the world
                    </h3>
                    <h2 className="font-[Volkhov] font-bold text-[60px] leading-20">
                        Travel, enjoy <br />
                        and live a new <br />
                        and full life
                    </h2>
                    <span className="font-[Poppins] leading-9">
                        Built Wicket longer admire do barton vanity itself do in
                        it.
                        <br />
                        Preferred to sportsmen it engrossed listening. Park gate
                        <br />
                        sell they west hard for the.
                    </span>
                    <div className="flex items-center mt-8">
                        <button
                            type="button"
                            className="border-[1px] px-5 py-3 bg-amber-400 text-white rounded-md font-sans font-medium"
                        >
                            Find out more
                        </button>
                        <div className="rounded-full w-12 h-12 bg-[#DF6951] flex justify-center items-center text-white ml-16">
                            <FaCaretRight className="w-6 h-6" />
                        </div>
                        <span className="ml-7 font-[Poppins] font-medium text-[18px]">
                            Play Demo
                        </span>
                    </div>
                </div>
                <div className="img_home flex w-3/5">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQODkQwCPFRPVwTKeLGPX4h6M-Wn-X8X2es6Q&s"
                        alt=""
                        className="w-full h-[85%]"
                    />
                    <img
                        src="../../public/Traveller1.svg"
                        alt=""
                        className="absolute h-[650px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;