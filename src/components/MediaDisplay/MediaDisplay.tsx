'use client'

import { MEDIA } from "@/api/media/media"
import useMedia from "@/hooks/useMedia"
import Image from "next/image"
import { Suspense, lazy, useEffect, useState } from "react"
import placeholder from '@/assets/images/Captura de pantalla 2024-05-02 224718.png'
import { useRouter } from "next/navigation"
import Pagination from "../Pagination/Pagination"

const MediaCard = lazy(() => import('../MediaCard/MediaCard'))

const MediaDisplay = ({
    query,
    page
}: {
    query: string,
    page: number
}) => {
    const { media, setMedia } = useMedia()
    const [error, setError] = useState<string | null>(null)

    const router = useRouter()


    const fetchMedia = async (searchQuery: string, page: number) => {
        try {
            const response = await MEDIA.searchMedia(searchQuery, page)
            if (response.Response === 'False') {
                setError(response.Error)
                return
            }
            if (response) {
                setError(null)
                setMedia(response.Search)
            }
        } catch (error: unknown) {
            setError(error as string)
        }
    }

    useEffect(() => {
        if (query && page) {
            fetchMedia(query, page)
        }
    }, [query, page])

    function pageUp() {
        router.push(`?q=${query}&page=${+page + 1}`)
    }
    function pageDown() {
        if (page < 1) return
        router.push(`?q=${query}&page=${+page - 1}`)
    }

    if (error) {
        return <div>{error}</div>
    }
    return (

        <section className="w-full flex items-center flex-col justify-center">
            {media.length > 0 ?
                <>
                    <Pagination pageDown={pageDown} pageUp={pageUp} />
                    <ul className="grid grid-cols-5">
                        {media.map((media, index) => (
                            <li key={index} className="p-3 flex w-full h-full">
                                <Suspense fallback={<div>Loading...</div>}>
                                    <MediaCard media={media} />
                                </Suspense>
                            </li>
                        ))}
                    </ul>
                </>
                :
                <div className="flex flex-col gap-2 items-center border-2 rounded-md w-fit p-1 border-white">
                    <h2 className="font-bold">Awating an input</h2>
                    <Image
                        src={placeholder}
                        alt="NotFound"
                        className="rounded-sm animate-pulse"
                        width={500}
                        height={500} />
                </div>}
        </section>

    )
}

export default MediaDisplay
