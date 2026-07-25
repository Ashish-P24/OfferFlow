import { Loader2 } from "lucide-react";

interface SpinnerProps {
  text?: string;
}

export default function Spinner({
  text = "Loading...",
}: SpinnerProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <Loader2
        className="h-10 w-10 animate-spin text-blue-600"
      />

      <p className="mt-4 text-slate-500">
        {text}
      </p>
    </div>
  );
}