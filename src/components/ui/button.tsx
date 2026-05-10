import { Slot, Slottable } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { Loader2, LucideIcon } from 'lucide-react';
import * as React from 'react';
import { IconType } from 'react-icons/lib';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-bold font-inter ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.97]',
  {
    variants: {
      variant: {
        default:
          'relative overflow-hidden bg-brand-gradient text-primary-foreground shadow-md hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02] before:absolute before:inset-0 before:bg-white/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:shadow-md hover:shadow-destructive/30 hover:scale-[1.02]',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:border-primary/40 hover:scale-[1.02]',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-md hover:scale-[1.02]',
        ghost: 'hover:bg-accent hover:text-accent-foreground hover:scale-[1.02]',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-5 py-2',
        sm: 'h-9 px-4',
        lg: 'h-11 px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

type PropsWithIcon = ButtonProps & {
  icon?: IconType | LucideIcon;
  iconLeft?: undefined;
};

type PropsWithIconLeft = ButtonProps & {
  icon?: undefined;
  iconLeft?: IconType | LucideIcon;
};

type Props = PropsWithIcon | PropsWithIconLeft;

const Button = React.forwardRef<HTMLButtonElement, Props>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      isLoading,
      icon: Icon,
      iconLeft: IconLeft,
      disabled,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';
    const isSizeIcon = size === 'icon';
    const Left =
      !isSizeIcon && IconLeft ? (
        isLoading ? (
          <Loader2 className='mr-2 animate-spin' />
        ) : (
          <IconLeft className='mr-2' />
        )
      ) : null;

    const Right =
      !isSizeIcon && !IconLeft && isLoading ? (
        <Loader2 className='ml-2 animate-spin' />
      ) : Icon ? (
        <Icon className='ml-2' />
      ) : null;

    return (
      <Comp
        className={cn(
          'flex items-center gap-2',
          buttonVariants({ variant, size, className }),
        )}
        disabled={isLoading || disabled}
        ref={ref}
        {...props}
      >
        {Left}
        <Slottable>
          {isSizeIcon && isLoading ? (
            <Loader2 className='animate-spin' />
          ) : (
            props.children
          )}
        </Slottable>
        {Right}
      </Comp>
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
