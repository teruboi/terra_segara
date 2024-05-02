import Image from "next/image";
import { BsCalendar2Date } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";

export default function SearchBar({  }) {
    return (
        <div className="w-full mx-auto mb-10 -mt-8">
            <form action="" className="flex gap-4 border-b-2 border-secondary p-2">
                <input type="text" placeholder="Search" name="search-query" id="src-qry" className="text-xl text-secondary placeholder-secondary-50% focus:outline-none w-full"/>
                <button type="submit">
                    <IoSearch className="text-secondary text-2xl"/>
                </button>
                <button type="button">
                    <BsCalendar2Date className="text-secondary text-2xl"/>
                </button>
            </form>
        </div>
    )
}