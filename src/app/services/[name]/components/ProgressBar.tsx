interface ProgressBarProps {
  percentage: number;
  animation: string;
  title: string;
}

function ProgressBar({ percentage, animation, title }: ProgressBarProps) {
  return (
    <>
      <p className="text-lg font-emOne uppercase mt-4">{title}</p>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className={`bg-primary h-2.5 rounded-full ${animation}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </>
  );
}

export default ProgressBar;
