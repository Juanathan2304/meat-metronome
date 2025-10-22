import { pacifico } from "@/ui/fonts"

export default function Header() {
    return(
        <>
            <header className={`hidden md:block bg-red-500 ${pacifico.className} p-4 text-2xl`}>
                Meat Metronome
            </header>
        </>
    )
}