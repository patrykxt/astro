"use client"

import { cva } from "class-variance-authority"
import type { VariantProps } from "class-variance-authority"
import clsx from "clsx"
import { forwardRef } from "react"
import type { ComponentProps } from "react"
import { Button as AriaButton } from "react-aria-components"
import { experimental_useFormStatus as useFormStatus } from "react-dom"
import { twMerge } from "tailwind-merge"
import { Spinner } from "."

const variants = cva(
  "transition-all outline-none text-white text-center data-[pressed]:scale-95 duration-200 data-[focus-visible]:ring-2 disabled:opacity-60",
  {
    variants: {
      plain: {
        false: "rounded shadow-md shadow-black px-3 py-1.5",
      },
      variant: {
        primary: "bg-indigo-600 ring-white data-[hovered]:bg-indigo-700",
        secondary:
          "bg-zinc-100 text-zinc-800 ring-indigo-600 data-[hovered]:bg-zinc-200",
        destructive: "bg-red-600 ring-white data-[hovered]:bg-red-700",
      },
    },
    defaultVariants: {
      plain: false,
    },
  },
)

type ButtonProps = ComponentProps<typeof AriaButton> &
  VariantProps<typeof variants>

export default forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { children, className, plain, variant, ...props },
  forwardedRef,
) {
  const { pending } = useFormStatus()
  variant = plain ? undefined : variant || "primary"

  return (
    <AriaButton
      {...props}
      className={twMerge(clsx(variants({ plain, variant }), className))}
      ref={forwardedRef}
      isDisabled={pending || undefined}
    >
      {props.type === "submit" && pending ? <Spinner size={24} /> : children}
    </AriaButton>
  )
})
