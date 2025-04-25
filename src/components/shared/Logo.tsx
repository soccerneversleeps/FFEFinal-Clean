import Link from "next/link"
import Image from "next/image"

interface LogoProps {
  size?: number;
}

export default function Logo({ size }: LogoProps = {}) {
  return (
    <Link 
      href="/" 
      className={`flex items-center gap-2 text-2xl font-bold text-white hover:text-orange transition-colors ${
        size ? `text-[${size}px]` : ''
      }`}
    >
      <Image
        src="/images/partners/FullLogo_Transparent_NoBuffer (1).png"
        alt="Family First Energy Logo"
        width={32}
        height={32}
        className="w-auto h-[1em]"
        style={{ maxHeight: size ? `${size}px` : '32px' }}
      />
      Family First Energy
    </Link>
  )
} 