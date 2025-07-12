import Link from "next/link"

export default function product() {
    return (
        <div>
            <h1>halaman product</h1>
            <ul>
                <li><Link href="/product/kopi">Product kopi</Link></li>
                <li><Link href="/product/sate">Product sate</Link></li>
                <li><Link href="/product/123">Product 123</Link></li >
            </ul >
        </div >
    )
}
