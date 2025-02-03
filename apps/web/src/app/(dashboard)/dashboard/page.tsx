export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="min-h-full">
        <NavBar />
        <Sidebar />
        <div className="lg:pl-72">
          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
        </div>
      </div>
    )
  }