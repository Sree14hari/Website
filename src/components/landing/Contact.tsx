import { ContactForm } from './contact-form';
import { ContactFormGenerator } from './contact-form-generator';

export default function Contact() {
  return (
    <section id="contact" className="bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-6">
            <div className="text-left">
              <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Get In Touch</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Have a question or want to join us? Send us a message!
              </p>
            </div>
            <ContactForm />
          </div>
          <div className="space-y-6">
            <div className="text-left">
              <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">AI Form Generator</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Need a form? Describe the fields and let our AI build it for you.
              </p>
            </div>
            <ContactFormGenerator />
          </div>
        </div>
      </div>
    </section>
  );
}
