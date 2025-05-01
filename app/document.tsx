import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  // Get the base path from environment or default to empty string
  const basePath = process.env.GITHUB_REPOSITORY ? `/${process.env.GITHUB_REPOSITORY.split("/")[1]}` : ""

  return (
    <Html lang="en">
      <Head>
        {/* Use the base path for all assets */}
        <base href={`${basePath}/`} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
