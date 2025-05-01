import * as React from "react"

// Simple utility function to merge class names
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ")
}

// Simplified Slot component
const Slot = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ children, ...props }, ref) => {
  if (!React.isValidElement(children)) {
    return (
      <div ref={ref} {...props}>
        {children}
      </div>
    )
  }

  return React.cloneElement(children, {
    ...props,
    ...children.props,
    // Don't pass ref directly to avoid type issues
    ref: (instance: any) => {
      // Handle both function refs and object refs
      if (typeof ref === "function") ref(instance)
      else if (ref) (ref as React.MutableRefObject<any>).current = instance

      // Forward ref to child if it has one
      const { ref: childRef } = children.props
      if (typeof childRef === "function") childRef(instance)
      else if (childRef) (childRef as React.MutableRefObject<any>).current = instance
    },
  })
})
Slot.displayName = "Slot"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"

    const variantClasses = {
      default: "bg-purple-600 text-white hover:bg-purple-700",
      destructive: "bg-red-500 text-white hover:bg-red-600",
      outline: "border border-white/10 bg-transparent hover:bg-white/10",
      secondary: "bg-gray-800 text-white hover:bg-gray-700",
      ghost: "hover:bg-white/10",
      link: "text-purple-500 underline-offset-4 hover:underline",
    }

    const sizeClasses = {
      default: "h-10 px-4 py-2",
      sm: "h-9 px-3",
      lg: "h-11 px-8",
      icon: "h-10 w-10",
    }

    // Use a type assertion to handle the component type
    const Component = Comp as any

    return (
      <Component
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none disabled:opacity-50",
          variantClasses[variant],
          sizeClasses[size],
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button }
