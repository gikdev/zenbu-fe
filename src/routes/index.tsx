import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">به TanStack Start خوش اومدی!</h1>
      <p className="mt-4 text-lg">
        فایل <code>src/routes/index.tsx</code> رو ویرایش کن که شروع کنیم!
      </p>
    </div>
  )
}
