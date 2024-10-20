import "../globals.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="bg-login">
          <div className="mask">
            <div className="container mx-auto flex justify-center min-h-screen items-center">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
