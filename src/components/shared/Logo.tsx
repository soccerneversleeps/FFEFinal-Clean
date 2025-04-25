import Link from "next/link"
import Image from "next/image"

interface LogoProps {
  size?: number;
}

export default function Logo({ size }: LogoProps = {}) {
  return (
    <Link 
      href="/" 
      className={`flex items-center gap-2 text-lg md:text-2xl font-bold text-white hover:text-orange transition-colors whitespace-nowrap ${
        size ? `text-[${size}px]` : ''
      }`}
    >
      <Image
        src="/images/partners/FullLogo_Transparent_NoBuffer (1).png"
        alt="Family First Energy Logo"
        width={34}
        height={34}
        className="w-auto h-[1.2em]"
        style={{ maxHeight: size ? `${size * 1.2}px` : '34px' }}
      />
      Family First Energy
    </Link>
  )
} 