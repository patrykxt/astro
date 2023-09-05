"use client"

import clsx from "clsx"
import { useSearchParams } from "next/navigation"
import { Link } from "~/components"

export default function Tabs() {
  const searchParams = useSearchParams()

  return (
    <nav className="min-w-[8rem] p-4">
      <ul className="space-y-4 capitalize">
        {["gallery", "calculator", "generator", "planner"].map(link => (
          <li key={link}>
            <Link
              className={clsx(
                "transition-all",
                searchParams.get("app") === link
                  ? "border-l pl-2 font-semibold text-white"
                  : "border-none",
              )}
              href={`/dashboard?app=${link}`}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
