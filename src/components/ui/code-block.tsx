import * as React from 'react';
import { cn } from '@/lib/utils';

interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  code: string;
}

const CodeBlock = React.forwardRef<HTMLPreElement, CodeBlockProps>(
  ({ code, className, ...props }, ref) => {
    return (
      <pre
        ref={ref}
        className={cn(
          'font-code text-sm p-4 bg-muted/50 rounded-md overflow-x-auto border',
          className
        )}
        {...props}
      >
        <code>{code}</code>
      </pre>
    );
  }
);
CodeBlock.displayName = 'CodeBlock';

export { CodeBlock };
