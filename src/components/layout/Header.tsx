import Link from "next/link"
import Logo from "@/components/shared/Logo"
import MainNav from "@/components/layout/MainNav"

export default function Header() {
  return (
    <header className="border-b border-gray-800 bg-navy">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Logo />
          <MainNav />
        </div>
      </div>
    </header>
  )
} 