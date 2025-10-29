"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useTheme } from "next-themes"

export default function Logo() {
    const [mounted, setMounted] = useState(false)
    const { resolvedTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div style={{ width: 30, height: 30 }} />
    }

    const logoSrc = resolvedTheme === 'dark' ? '/saniti-dark-mode.svg' : '/saniti-light-mode.svg'

    return (
        <Image src={logoSrc} alt="Logo" width={30} height={30} />
    )
}
