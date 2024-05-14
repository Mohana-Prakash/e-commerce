import { Providers } from "@/redux/ReduxProvider";
import "./globals.css";

export const metadata = {
  title: "Tanjore Nature Nest",
  description: "E Commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
