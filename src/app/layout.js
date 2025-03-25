import "../../styles/globals.css";
import ConditionalLayout from "./ConditionalLayout";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Application</title>
      </head>
      <body>
        <ConditionalLayout>
          <div className="min-h-screen p-6">{children}</div>
        </ConditionalLayout>
      </body>
    </html>
  );
}
