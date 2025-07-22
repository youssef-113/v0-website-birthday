"use client"

interface NavigationProps {
  currentPage: string
  setCurrentPage: (page: string) => void
}

export default function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  return (
    <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 z-40 bg-black/30 backdrop-blur-lg rounded-full px-6 py-3">
      <ul className="flex space-x-8">
        {[
          { id: "home", label: "Home" },
          { id: "about-her", label: "About Her" },
          { id: "about-us", label: "About Us" },
        ].map((item) => (
          <li key={item.id}>
            <button
              onClick={() => setCurrentPage(item.id)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                currentPage === item.id
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                  : "text-pink-200 hover:text-white hover:bg-pink-500/20"
              }`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
