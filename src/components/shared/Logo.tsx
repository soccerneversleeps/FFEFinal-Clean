import Link from "next/link"
import Image from "next/image"

interface LogoProps {
  size?: number;
}

export default function Logo({ size }: LogoProps = {}) {
  return (
    <Link 
      href="/" 
      className={`flex items-center gap-2 text-xl md:text-3xl font-bold text-white hover:text-orange transition-colors whitespace-nowrap ${
        size ? `text-[${size}px]` : ''
      }`}
    >
      <Image
        src="/images/partners/FullLogo_Transparent_NoBuffer (1).png"
        alt="Family First Energy Logo"
        width={52}
        height={52}
        className="w-auto h-[2.25em]"
        style={{ maxHeight: size ? `${size * 2.25}px` : '52px' }}
      />
      Family First Energy
    </Link>
  )
} 