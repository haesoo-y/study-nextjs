import Link from "next/link";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>
          <Link href="/todos">todos</Link>
          <div> </div>
          <Link href="/">home</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
