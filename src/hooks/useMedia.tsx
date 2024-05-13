import { Media } from "@/interfaces/media"
import { useState } from "react"

const useMedia = () => {
    const [media, setMedia] = useState<Media[]>([])

    return {
        media,
        setMedia
    }
}

export default useMedia
