import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

const Button = forwardRef(({ className, variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
  const Comp = props.href ? 'a' : (asChild ? 'span' : 'button');
  const base = 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50';
  const variants = {
    default: 'bg-primary text-primary-foreground shadow hover:opacity-90 hover:shadow-lg',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    outline: 'border border-border bg-transparent hover:bg-accent hover:text-accent-foreground',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
    link: 'text-primary underline-offset-4 hover:underline',
  };
  const sizes = {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 rounded-md px-3',
    lg: 'h-12 rounded-lg px-8 text-base',
    icon: 'h-10 w-10',
  };
  return (
    <Comp
      ref={ref}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
});
Button.displayName = 'Button';

export { Button };
