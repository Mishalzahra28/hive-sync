export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-background"
    >
      <span className="sr-only">Loading HiveSync...</span>

      <div className="absolute left-1/2 top-1/2 size-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute left-1/2 top-1/2 size-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-purple/10 blur-[100px]" />

      <div className="relative flex flex-col items-center gap-7">
        <svg className="hive-loader" width={240} height={240} viewBox="0 0 240 240" aria-hidden="true">
          <circle
            className="hive-loader__ring hive-loader__ring--a"
            cx={120}
            cy={120}
            r={105}
            fill="none"
            strokeWidth={20}
            strokeDasharray="0 660"
            strokeDashoffset={-330}
            strokeLinecap="round"
          />
          <circle
            className="hive-loader__ring hive-loader__ring--b"
            cx={120}
            cy={120}
            r={35}
            fill="none"
            strokeWidth={20}
            strokeDasharray="0 220"
            strokeDashoffset={-110}
            strokeLinecap="round"
          />
          <circle
            className="hive-loader__ring hive-loader__ring--c"
            cx={85}
            cy={120}
            r={70}
            fill="none"
            strokeWidth={20}
            strokeDasharray="0 440"
            strokeLinecap="round"
          />
          <circle
            className="hive-loader__ring hive-loader__ring--d"
            cx={155}
            cy={120}
            r={70}
            fill="none"
            strokeWidth={20}
            strokeDasharray="0 440"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <style>{`
        .hive-loader {
          width: 7rem;
          height: 7rem;
          overflow: visible;
          filter: drop-shadow(0 18px 38px hsl(var(--primary) / 0.2));
        }

        .hive-loader__ring {
          animation: hive-ring-a 2s linear infinite;
          transform-origin: 120px 120px;
        }

        .hive-loader__ring--a {
          stroke: hsl(var(--primary));
        }

        .hive-loader__ring--b {
          animation-name: hive-ring-b;
          stroke: hsl(226 70% 52%);
        }

        .hive-loader__ring--c {
          animation-name: hive-ring-c;
          stroke: hsl(262 70% 55%);
        }

        .hive-loader__ring--d {
          animation-name: hive-ring-d;
          stroke: hsl(var(--secondary));
        }

        @media (min-width: 640px) {
          .hive-loader {
            width: 8rem;
            height: 8rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hive-loader__ring {
            animation-duration: 6s;
          }
        }

        @keyframes hive-ring-a {
          from, 4% {
            stroke-dasharray: 0 660;
            stroke-width: 20;
            stroke-dashoffset: -330;
          }

          12% {
            stroke-dasharray: 60 600;
            stroke-width: 30;
            stroke-dashoffset: -335;
          }

          32% {
            stroke-dasharray: 60 600;
            stroke-width: 30;
            stroke-dashoffset: -595;
          }

          40%, 54% {
            stroke-dasharray: 0 660;
            stroke-width: 20;
            stroke-dashoffset: -660;
          }

          62% {
            stroke-dasharray: 60 600;
            stroke-width: 30;
            stroke-dashoffset: -665;
          }

          82% {
            stroke-dasharray: 60 600;
            stroke-width: 30;
            stroke-dashoffset: -925;
          }

          90%, to {
            stroke-dasharray: 0 660;
            stroke-width: 20;
            stroke-dashoffset: -990;
          }
        }

        @keyframes hive-ring-b {
          from, 12% {
            stroke-dasharray: 0 220;
            stroke-width: 20;
            stroke-dashoffset: -110;
          }

          20% {
            stroke-dasharray: 20 200;
            stroke-width: 30;
            stroke-dashoffset: -115;
          }

          40% {
            stroke-dasharray: 20 200;
            stroke-width: 30;
            stroke-dashoffset: -195;
          }

          48%, 62% {
            stroke-dasharray: 0 220;
            stroke-width: 20;
            stroke-dashoffset: -220;
          }

          70% {
            stroke-dasharray: 20 200;
            stroke-width: 30;
            stroke-dashoffset: -225;
          }

          90% {
            stroke-dasharray: 20 200;
            stroke-width: 30;
            stroke-dashoffset: -305;
          }

          98%, to {
            stroke-dasharray: 0 220;
            stroke-width: 20;
            stroke-dashoffset: -330;
          }
        }

        @keyframes hive-ring-c {
          from {
            stroke-dasharray: 0 440;
            stroke-width: 20;
            stroke-dashoffset: 0;
          }

          8% {
            stroke-dasharray: 40 400;
            stroke-width: 30;
            stroke-dashoffset: -5;
          }

          28% {
            stroke-dasharray: 40 400;
            stroke-width: 30;
            stroke-dashoffset: -175;
          }

          36%, 58% {
            stroke-dasharray: 0 440;
            stroke-width: 20;
            stroke-dashoffset: -220;
          }

          66% {
            stroke-dasharray: 40 400;
            stroke-width: 30;
            stroke-dashoffset: -225;
          }

          86% {
            stroke-dasharray: 40 400;
            stroke-width: 30;
            stroke-dashoffset: -395;
          }

          94%, to {
            stroke-dasharray: 0 440;
            stroke-width: 20;
            stroke-dashoffset: -440;
          }
        }

        @keyframes hive-ring-d {
          from, 8% {
            stroke-dasharray: 0 440;
            stroke-width: 20;
            stroke-dashoffset: 0;
          }

          16% {
            stroke-dasharray: 40 400;
            stroke-width: 30;
            stroke-dashoffset: -5;
          }

          36% {
            stroke-dasharray: 40 400;
            stroke-width: 30;
            stroke-dashoffset: -175;
          }

          44%, 50% {
            stroke-dasharray: 0 440;
            stroke-width: 20;
            stroke-dashoffset: -220;
          }

          58% {
            stroke-dasharray: 40 400;
            stroke-width: 30;
            stroke-dashoffset: -225;
          }

          78% {
            stroke-dasharray: 40 400;
            stroke-width: 30;
            stroke-dashoffset: -395;
          }

          86%, to {
            stroke-dasharray: 0 440;
            stroke-width: 20;
            stroke-dashoffset: -440;
          }
        }
      `}</style>
    </div>
  )
}
