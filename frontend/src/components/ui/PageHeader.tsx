interface PageHeaderProps {
  title: string;
  description: string;
}

export default function PageHeader({
  title,
  description,
}: PageHeaderProps) {
  return (
    <div className="mb-8">

      <h1 className="text-4xl font-bold tracking-tight">
        {title}
      </h1>

      <p className="mt-2 text-base text-[var(--muted)]">
        {description}
      </p>

    </div>
  );
}