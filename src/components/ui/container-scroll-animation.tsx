import React from 'react';

/**
 * Static dashboard-screen frame.
 *
 * The live dashboard screens are authored at a fixed desktop design size
 * (DESIGN_W × DESIGN_H). Instead of reflowing them on mobile, we render them at
 * that exact size and uniformly scale-to-fit the frame width. Result: the FULL
 * desktop dashboard (sidebar + grids) is always visible — identical layout on
 * phone and desktop, just smaller — matching the flat Owner showcase card.
 */
const DESIGN_W = 1024;
const DESIGN_H = 640;

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const frameRef = React.useRef<HTMLDivElement>(null);
  const [scale, setScale] = React.useState(1);

  React.useLayoutEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / DESIGN_W);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div className="relative px-4 md:px-8 pt-12 md:pt-20 pb-2">
      <div className="max-w-5xl mx-auto text-center mb-8 md:mb-12">
        {titleComponent}
      </div>
      <div
        ref={frameRef}
        className="relative max-w-5xl mx-auto w-full bg-white rounded-2xl md:rounded-3xl overflow-hidden"
        style={{
          height: DESIGN_H * scale,
          boxShadow:
            '0 0 0 1px rgba(15,23,42,0.06), 0 30px 80px rgba(15,23,42,0.18), 0 80px 160px rgba(15,23,42,0.12)',
        }}
      >
        <div
          style={{
            width: DESIGN_W,
            height: DESIGN_H,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
