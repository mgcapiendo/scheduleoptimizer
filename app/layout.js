import Navbar from "@/components/Navbar";
import Background from "@/components/Background";
import "./globals.css";

export const metadata = {
  title: "Schedule Optimizer",
  description: "by manuel capiendo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="fixed inset-0 z-0">
          <Background />
        </div>

        <div className="relative z-10">
          <Navbar />
          <div className="px-10 py-5z">{children}</div>
        </div>
      </body>
    </html>
  );
}
