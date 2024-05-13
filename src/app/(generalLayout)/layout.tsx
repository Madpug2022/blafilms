import NavBar from "@/components/SearchBar/NavBar"

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="min-h-screen">
            <NavBar />
            {children}
        </main>
    )
}

export default layout
