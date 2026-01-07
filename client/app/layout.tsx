// app/layout.tsx
import "./globals.css"; 
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Judix Task App",
  description: "Fullstack Task App with Next.js & Node.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen">
        <Navbar />
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
