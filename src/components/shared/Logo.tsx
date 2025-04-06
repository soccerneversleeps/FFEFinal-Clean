import Link from "next/link"

interface LogoProps {
  size?: number;
}

export default function Logo({ size }: LogoProps = {}) {
  return (
    <Link 
      href="/" 
      className={`text-2xl font-bold text-white hover:text-orange transition-colors ${
        size ? `text-[${size}px]` : ''
      }`}
    >
      Family First Energy
    </Link>
  )
} 