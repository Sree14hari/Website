'use server';

/**
 * @fileOverview Generates a contact form based on a description of required fields and validation rules.
 *
 * - generateContactForm - A function that generates the contact form.
 * - GenerateContactFormInput - The input type for the generateContactForm function.
 * - GenerateContactFormOutput - The return type for the generateContactForm function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateContactFormInputSchema = z.object({
  fieldDescriptions: z
    .string()
    .describe(
      'A description of the required fields for the contact form, including validation rules.'
    ),
});
export type GenerateContactFormInput = z.infer<typeof GenerateContactFormInputSchema>;

const GenerateContactFormOutputSchema = z.object({
  formSchema: z.string().describe('The generated Zod schema for the contact form.'),
  formComponent: z.string().describe('The generated React component for the contact form.'),
});
export type GenerateContactFormOutput = z.infer<typeof GenerateContactFormOutputSchema>;

export async function generateContactForm(
  input: GenerateContactFormInput
): Promise<GenerateContactFormOutput> {
  return generateContactFormFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateContactFormPrompt',
  input: {schema: GenerateContactFormInputSchema},
  output: {schema: GenerateContactFormOutputSchema},
  prompt: `You are a skilled developer specializing in generating contact forms using React and Zod.

  Based on the provided field descriptions and validation rules, generate a Zod schema and a corresponding React component for the contact form.

  Field Descriptions:
  {{fieldDescriptions}}

  Ensure that the generated code is well-structured, readable, and includes appropriate validation.

  Return the Zod schema and the React component as separate strings in the output.
  `,
});

const generateContactFormFlow = ai.defineFlow(
  {
    name: 'generateContactFormFlow',
    inputSchema: GenerateContactFormInputSchema,
    outputSchema: GenerateContactFormOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
