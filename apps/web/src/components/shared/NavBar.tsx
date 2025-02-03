/*
export const NavBar = () => {
    const { data: session } = useSession();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav
            className="bg-white shadow-sm"
            role="navigation"
            aria-label="Main navigation"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <Link
                            href="/"
                            className="flex items-center"
                            aria-label="Home"
                        >
                            <Logo className="h-8 w-auto" />
                        </Link>

                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            <NavLink href="/documents">Documents</NavLink>
                            <NavLink href="/templates">Templates</NavLink>
                            <NavLink href="/settings">Settings</NavLink>
                        </div>
                    </div>

                    <div className="flex items-center">
                        {session ? (
                            <UserMenu user={session.user} />
                        ) : (
                            <Link
                                href="/login"
                                className="text-sm font-medium text-gray-700 hover:text-gray-900"
                            >
                                Sign in
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};
*/