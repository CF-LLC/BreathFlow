"use client"

import * as React from "react"

// Simple utility function to merge class names
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ")
}

const TabsContext = React.createContext<{
  selectedValue: string
  onChange: (value: string) => void
}>({
  selectedValue: "",
  onChange: () => {},
})

const Tabs = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    defaultValue: string
    value?: string
    onValueChange?: (value: string) => void
  }
>(({ defaultValue, value, onValueChange, children, className, ...props }, ref) => {
  const [selectedValue, setSelectedValue] = React.useState(value || defaultValue)

  React.useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value)
    }
  }, [value])

  const onChange = React.useCallback(
    (value: string) => {
      setSelectedValue(value)
      onValueChange?.(value)
    },
    [onValueChange],
  )

  return (
    <TabsContext.Provider value={{ selectedValue, onChange }}>
      <div ref={ref} className={cn("", className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  )
})
Tabs.displayName = "Tabs"

const TabsList = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("inline-flex items-center justify-center rounded-md bg-gray-800 p-1", className)}
      {...props}
    />
  ),
)
TabsList.displayName = "TabsList"

const TabsTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    value: string
  }
>(({ className, value, ...props }, ref) => {
  const { selectedValue, onChange } = React.useContext(TabsContext)
  const isSelected = selectedValue === value

  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
        isSelected ? "bg-purple-600 text-white shadow-sm" : "text-gray-400 hover:text-white",
        className,
      )}
      onClick={() => onChange(value)}
      data-state={isSelected ? "active" : "inactive"}
      {...props}
    />
  )
})
TabsTrigger.displayName = "TabsTrigger"

const TabsContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    value: string
  }
>(({ className, value, ...props }, ref) => {
  const { selectedValue } = React.useContext(TabsContext)
  const isSelected = selectedValue === value

  if (!isSelected) return null

  return <div ref={ref} className={cn("mt-2", className)} data-state={isSelected ? "active" : "inactive"} {...props} />
})
TabsContent.displayName = "TabsContent"

export { Tabs, TabsList, TabsTrigger, TabsContent }
