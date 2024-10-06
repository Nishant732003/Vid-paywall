"use client"

import { QueryProvider } from "./query-provider";

interface ProviderProps{
    children: React.ReactNode;
}

export function Providers({ children }: ProviderProps) {
    return <QueryProvider>{children}</QueryProvider>
}