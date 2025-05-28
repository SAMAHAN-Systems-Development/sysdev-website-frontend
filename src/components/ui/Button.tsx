import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

const buttonVariants = cva(
'items-center justify-center rounded-full duration-200 transition-all hover:cursor-pointer',
  {
    variants: {
      variant: {
        yellow: 'bg-yellow2 active:bg-yellow4 text-blue3',
        blue: 'bg-blue3 active:bg-blue2 text-white',
        pink: 'bg-pink2 active:bg-pink3 text-white',
        green: 'bg-green active:bg-green2 text-blue3',
      },
      size: {
        tight: 'text-base px-2 hover:py-0.5',
        normal: 'text-lg px-7 py-1.5 hover:py-2.5 ',
        big: 'text-2xl px-10 py-3 hover:py-4',
      },
    },
    defaultVariants: {
      variant: 'yellow',
      size: 'normal',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, onClick, ...props }, ref) => (
    <button
      ref={ref}
      className={buttonVariants({ variant, size, className })}
      onClick={onClick}
      {...props}
    >
      {props.children}
    </button>
  )
)
Button.displayName = 'Button'

export default Button