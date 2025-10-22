import { homepageText } from "@/ui/text/text"
import { workSans } from "../fonts"

export default function Article() {
    return(
        <>
            <p className={workSans.className}>{homepageText}</p>
        </>
    )
}