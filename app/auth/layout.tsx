const AuthLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="h-full flex items-center justify-center bg-gradient-to-tr from-indigo-600  to-purple-500">
            {children}
        </div>
    )
} 

export default AuthLayout;