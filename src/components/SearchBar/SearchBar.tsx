'use client'
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import { IoSearch } from "react-icons/io5"


const SearchBar = () => {
    const searchParams = useSearchParams()
    const query = searchParams.get('q')
    const [searchTerm, setSearchTerm] = useState<string>(query || "")
    const router = useRouter()

    const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (searchTerm === '') return
        router.push(`?q=${searchTerm}&page=1`)
    }

    return (
        <form onSubmit={handleSearch} className="h-10 flex py-1 px-8 items-center justify-center gap-2 text-black">
            <input onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} type="text" placeholder="Search..." className="w-1/3 rounded-sm px-2 text-sm h-full  focus:ring-0 focus:border-0" />
            <button type="submit" className="bg-white rounded-full p-1 hover:text-blue-600 transition-colors duration-300">
                <IoSearch />
            </button>
        </form>
    )
}

export default SearchBar
