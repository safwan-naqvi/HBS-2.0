"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { Input } from "@/components/ui/input";
import { CiSearch } from "react-icons/ci";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Search() {
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const pathname = usePathname();
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleSearch = useDebouncedCallback((term: string) => {
        console.log(`Searching... ${term}`);
        const params = new URLSearchParams(searchParams);
        params.set("page", "1");

        if (term) {
            params.set("query", term);
        } else {
            params.delete("query");
        }

        replace(`${pathname}?${params.toString()}`);
    }, 300);

    const handleFocus = () => {
        setIsFocused(true);
        inputRef.current?.focus();
    };

    const handleBlur = (event: MouseEvent) => {
        if (isFocused === true && containerRef.current && !containerRef.current.contains(event.target as Node)) {
            setIsFocused(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleBlur);
        return () => {
            document.removeEventListener("mousedown", handleBlur);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className={`relative flex items-center justify-start h-12 w-${isFocused ? "64" : "12"} max-w-64 rounded-full transition-all duration-500 transform ${isFocused ? "bg-white" : "bg-transparent"}`}
        >
            <CiSearch
                className={cn("absolute h-12 w-12 rounded-full p-2 cursor-pointer", `${isFocused ? "bg-transparent text-black" : "text-white bg-white/30"}`)}
                onClick={handleFocus}
            />
            <Input
                ref={inputRef}
                type="text"
                placeholder="Search"
                className={`absolute left-[50px] rounded-full h-full bg-transparent text-gray-800 p-1 outline-none border-none transition-all duration-500 transform ${isFocused ? "w-52" : "w-0"}`}
                onChange={(e) => handleSearch(e.target.value)}
                defaultValue={searchParams.get("query")?.toString()}
                onBlur={() => setIsFocused(false)}
            />
        </div>
    );
}
