'use client';

export default async function Dashboard({params} : {params: Promise<{ roomId: string }>}) {
    const { roomId } = await params

    return (
        <div>{roomId}</div>
    )
}