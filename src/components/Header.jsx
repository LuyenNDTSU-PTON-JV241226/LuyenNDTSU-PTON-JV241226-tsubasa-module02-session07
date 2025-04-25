import React from "react";

const Header = () => {
    return (
        <header className="header bg-white w-full px-[100px] flex pt-8 gap-16 text-[17px] justify-between items-center">
            <div className="img w-1/4 flex items-center">
                <img
                    src=""
                    alt="Logo"
                    className="w-[100px]"
                />
            </div>
            <ul className="flex gap-16 font-medium">
                <li className="hover:text-green-500">
                    <a href="">Desitnations</a>
                </li>
                <li className="hover:text-green-500">
                    <a href="">Hotels</a>
                </li>
                <li className="hover:text-green-500">
                    <a href="">Flights</a>
                </li>
                <li className="hover:text-green-500">
                    <a href="">Bookings</a>
                </li>
                <li className="hover:text-green-500">
                    <a href="">Login</a>
                </li>
            </ul>
            <button
                type="button"
                className="border-[1px] px-8 py-1 rounded-sm cursor-pointer"
            >
                Sign up
            </button>
            <select name="lang" id="lang" className="cursor-pointer">
                <option value="en">EN</option>
                <option value="vi">Vi</option>
            </select>
        </header>
    );
};

export default Header;