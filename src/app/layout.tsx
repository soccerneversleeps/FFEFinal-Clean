import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { SuppressHydrationWarnings } from "@/lib/suppressHydrationWarnings"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Family First Energy - California Energy Efficiency Solutions",
  description: "We help California utilities connect with residential and commercial customers to implement energy-efficient solutions that save money and protect our environment.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SuppressHydrationWarnings />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
} 