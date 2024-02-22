export const metadata = {
  title: 'Next.js Product',
  description: 'Generated by Next.js',
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <>
        {children}
        <h2>Feature</h2>
      </>
  )
}
