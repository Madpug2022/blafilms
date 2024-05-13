import { BiChevronLeft, BiChevronRight } from "react-icons/bi"

const Pagination = ({ pageDown, pageUp }: {
    pageDown: () => void,
    pageUp: () => void

}) => {
    return (
        <div className="flex gap-2">
            <button onClick={pageDown}><BiChevronLeft className="h-8 w-8" /></button>
            <button onClick={pageUp}><BiChevronRight className="h-8 w-8" /></button>
        </div>
    )
}

export default Pagination
