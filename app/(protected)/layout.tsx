import { Navbar } from "./_components/navbar";

interface ProtectedLayoutProps {
    children: React.ReactNode;
}

const ProtectedLayout = ({children}: ProtectedLayoutProps) => {
    return (
        <div className="min-h-screen w-full flex flex-col gap-y-10 py-20 items-center justify-center bg-gradient-to-tr from-indigo-600  to-purple-500">
            <Navbar/>
            {children}
        </div>
    )
}

export default ProtectedLayout;