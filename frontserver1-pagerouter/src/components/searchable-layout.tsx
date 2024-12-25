import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import style from "./searchable-layout.module.css"

export default function SearchableLayout({
    children,
}: {
    children: ReactNode;
}) {
    const router = useRouter();
    const [search, setSearch] = useState("")
    
    const q = router.query.q as string;

    useEffect(() => {
        setSearch(q || "")
    }, [q])

    
    const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    const OnSubmit = () => {
        if(!search || q === search) return;
        router.push(`/search?q=${search}`)
    }

    const OnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            OnSubmit();
        }
    }

    
    return (
        <>
            <div className={style.searchable_container}>
                <input 
                value={search} 
                onKeyDown={OnKeyDown}
                onChange={onChangeSearch} 
                placeholder="검색어를 입력해주세요" />
                <button>검색</button>
            </div>
            {children}
        </>
    )
}