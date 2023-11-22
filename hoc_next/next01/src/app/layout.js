import "./layout.css";
export const metadata = {
  title: "F8 - Học lập trình để đi làm",
  description: "Học nextjs không khó",
  keywords: "học js, học nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
