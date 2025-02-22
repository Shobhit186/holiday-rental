'use client';
import { useRouter } from "next/navigation";
import Heading from "./Heading";
import Button from "./Button";
interface EmptyStateProps {
    title?: string;
    subtitle?: string;
    showReset?: boolean;
}

const EmptyState: React.FC<EmptyStateProps> = ({title="No exact matches",subtitle="Try changing your filters",showReset}) => {
  const router = useRouter();

  return (
    <div className="h-[60vh] flex flex-col gap-2 justify-center items-center">
        <Heading title={title} subtitle={subtitle} center />
        <div className="w-48 mt-4">
            {showReset && (
                <Button onClick={() => router.push('/')} outline label="Remove All filters"/>
            )}
        </div>
    </div>
  )
}

export default EmptyState