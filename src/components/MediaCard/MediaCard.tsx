import { Media } from "@/interfaces/media"
import Image from "next/image"
import placeholder from '@/assets/images/placeholder.png'

const MediaCard = ({ media }: { media: Media }) => {
    const { Poster, Title, Type, Year } = media

    return (
        <div className="flex flex-col items-center border-2 rounded-md w-full h-full bg-blue-100 text-black hover:scale-105 transition-all duration-300">
            <div className="h-full w-full p-3">
                <Image src={Poster !== 'N/A' ? Poster : placeholder} alt={Title} width={200} height={300} className="rounded-sm h-full w-full" />
            </div>
            <div className="flex flex-col px-2 w-full">
                <h2 className="font-bold">{Title}</h2>
                <p className="capitalize">Type of media: {Type}</p>
                <p>Year of production: <span className="font-bold">{Year}</span></p>
            </div>
        </div>
    )
}

export default MediaCard
