import { Inter } from "next/font/google";
import "./globals.css";


export const metadata = {
  title: "12 News",
  description: "This is for Ostad Assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">{children}</body>
    </html>
  );
}
