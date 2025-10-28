"use client"

interface NavigationProps {
  currentPage: string
  setCurrentPage: (page: string) => void
}

export default function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const handleLogout = () => {
    // Clear any authentication state here if needed
    localStorage.removeItem('isAuthenticated')
    
    // Return to login page
    setCurrentPage('login')
  }
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-black/30 backdrop-blur-lg px-4 py-3">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-pink-400">❤️ Youssef & Sooy</h1>
        <ul className="flex space-x-4 md:space-x-8">
          {[
            { id: "home", label: "Home" },
            { id: "about-her", label: "Calesy" },
            { id: "about-us", label: "US" },
            
          ].map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setCurrentPage(item.id)}
                className={`px-3 py-2 rounded-full transition-all duration-300 ${
                  currentPage === item.id
                    ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                    : "text-pink-200 hover:text-white hover:bg-pink-500/20"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={handleLogout}
              className="px-3 py-2 rounded-full transition-all duration-300 text-pink-200 hover:text-white hover:bg-pink-500/20"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
