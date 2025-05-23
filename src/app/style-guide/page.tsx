import React from 'react';

export default function StyleGuidePage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Style Guide</h1>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Typography</h2>
        <div className="space-y-4">
          <h1 className="text-4xl">Heading 1</h1>
          <h2 className="text-3xl">Heading 2</h2>
          <h3 className="text-2xl">Heading 3</h3>
          <h4 className="text-xl">Heading 4</h4>
          <p className="text-base">Paragraph text - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-primary text-primary-foreground rounded-lg">Primary</div>
          <div className="p-4 bg-secondary text-secondary-foreground rounded-lg">Secondary</div>
          <div className="p-4 bg-muted text-muted-foreground rounded-lg">Muted</div>
          <div className="p-4 bg-accent text-accent-foreground rounded-lg">Accent</div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Components</h2>
        <div className="space-y-4">
          <button className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            Primary Button
          </button>
          <button className="inline-flex items-center justify-center rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground hover:bg-secondary/90">
            Secondary Button
          </button>
        </div>
      </section>
    </div>
  );
}
