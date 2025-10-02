"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { generateContactForm } from '@/ai/flows/generate-contact-form';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Skeleton } from '@/components/ui/skeleton';
import { CodeBlock } from '@/components/ui/code-block';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  description: z.string().min(20, {
    message: "Please provide a more detailed description (at least 20 characters).",
  }),
});

type GeneratedCode = {
  formSchema: string;
  formComponent: string;
};

export function ContactFormGenerator() {
  const { toast } = useToast();
  const [generatedCode, setGeneratedCode] = useState<GeneratedCode | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: 'A form with a name field (required), email field (required, must be a valid email), and a message field (optional, min 10 characters).',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setGeneratedCode(null);
    try {
      const result = await generateContactForm({ fieldDescriptions: values.description });
      setGeneratedCode(result);
    } catch (error) {
      console.error("Error generating form:", error);
      toast({
        variant: "destructive",
        title: "Generation Failed",
        description: "There was an error generating the form. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Form Field Descriptions</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., A form with fields for name, email, and message..."
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? 'Generating...' : 'Generate Form'}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {isLoading && (
        <Card>
          <CardContent className="p-6 space-y-4">
            <Skeleton className="h-8 w-1/3" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-8 w-1/3" />
            <Skeleton className="h-48 w-full" />
          </CardContent>
        </Card>
      )}

      {generatedCode && (
        <Card>
          <CardContent className="p-6 space-y-6">
            <div>
              <h4 className="font-semibold mb-2">Generated Zod Schema</h4>
              <CodeBlock code={generatedCode.formSchema} />
            </div>
            <div>
              <h4 className="font-semibold mb-2">Generated React Component</h4>
              <CodeBlock code={generatedCode.formComponent} />
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
