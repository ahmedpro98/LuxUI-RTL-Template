
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"
import { cn } from "@/lib/utils"
import React from "react"

interface AspectRatioProps extends React.ComponentPropsWithoutRef<typeof AspectRatioPrimitive.Root> {
    className?: string;
    softUi?: boolean;
    curved?: boolean;
}

const AspectRatio = React.forwardRef<
    React.ElementRef<typeof AspectRatioPrimitive.Root>,
    AspectRatioProps
>(({ className, softUi, curved, ...props }, ref) => (
    <AspectRatioPrimitive.Root
        ref={ref}
        className={cn(
            className,
            softUi && "soft-ui-shadow",
            curved && "rounded-xl overflow-hidden"
        )}
        {...props}
    />
))

AspectRatio.displayName = "AspectRatio"

export { AspectRatio }