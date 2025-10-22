'use client';

import { useSearchParams } from "next/navigation";

export default function Dashboard() {
    const params = useSearchParams();

    return (
        <div>{params.get('roomId')}</div>
    )
}