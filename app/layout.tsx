import Navbar from "@/components/navbar";

export const metadata = {
    title: 'faizalanwar_t2',
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                {children}</body>
        </html>
    );
}
