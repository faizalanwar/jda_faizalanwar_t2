"use client";
import { useParams } from 'next/navigation';
import Link from 'next/link';
export default function ProdukDynamic() {
    const params = useParams();
    return (
        <>
            <h1>halaman produk {params.id}</h1>
            <p>ini contoh halaman produk dengan dynamic route, yang memiliki id ( {params.id} )</p>
            <p>kembali ke halaman <Link href="/product">product</Link></p>
        </>
    );
}
