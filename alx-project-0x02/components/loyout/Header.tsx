import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex space-x-6">
          <li>
            <Link href="/home" className="text-blue-600 hover:text-blue-800 font-medium">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-blue-600 hover:text-blue-800 font-medium">
              About
            </Link>
          </li>
          <li>
            <Link href="/posts" className="text-blue-600 hover:text-blue-800 font-medium">
              Posts
            </Link>
          </li>
          <li>
            <Link href="/users" className="text-blue-600 hover:text-blue-800 font-medium">
              Users
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}