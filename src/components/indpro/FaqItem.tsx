import ChevronDown from "../../assets/icons/ChevronDown";
import { B2 } from "../atoms/Typography";
import { useRef, useState } from "react";
import { useAnalytics } from "../../context/analytics";

export interface FaqItemProps {
  title: string;
  children: React.ReactElement;
}

const FaqItem: React.FC<FaqItemProps> = (props) => {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const summaryRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const animationRef = useRef<Animation | null>(null);
  const [state, setState] = useState<"opening" | "closing" | null>(null);

  const { track } = useAnalytics();

  /**
   * Animation logic modified from https://css-tricks.com/how-to-animate-the-details-element/,
   * modified to match Intuit's design system.
   */
  const toggle = (e: React.MouseEvent) => {
    e.preventDefault();
    const details = detailsRef.current!;

    details.style.overflow = "hidden";

    if (state === "closing" || !details.open) {
      open();
      track({
        action: "engaged",
        object: "faq",
        uiAction: "toggled",
        uiObject: "accordion",
        uiObjectDetail: props.title,
      });
    } else if (state === "opening" || details.open) {
      close();
    }
  };

  const close = () => {
    setState("closing");
    const details = detailsRef.current!;
    const summary = summaryRef.current!;

    const startHeight = details.offsetHeight + "px";
    const endHeight = summary.offsetHeight + "px";

    let animation = animationRef.current;
    if (animation) {
      animation.cancel();
    }

    animation = details.animate(
      {
        height: [startHeight, endHeight],
      },
      {
        duration: 350,
        easing: "cubic-bezier(0.35, 0.0, 0.25, 1.0)",
      }
    );
    animationRef.current = animation;

    animation.onfinish = () => animationOnFinish(false);
    animation.oncancel = () => setState(null);
  };

  const open = () => {
    const details = detailsRef.current!;

    details.style.height = details.offsetHeight + "px";
    details.open = true;
    requestAnimationFrame(() => expand());
  };

  const expand = () => {
    setState("opening");
    const details = detailsRef.current!;
    const summary = summaryRef.current!;
    const content = contentRef.current!;
    let animation = animationRef.current;

    const startHeight = details.offsetHeight + "px";
    const endHeight = summary.offsetHeight + content.offsetHeight + "px";

    if (animation) {
      animation.cancel();
    }
    animation = details.animate(
      {
        height: [startHeight, endHeight],
      },
      {
        duration: 350,
        easing: "cubic-bezier(0.35, 0.0, 0.25, 1.0)",
      }
    );
    animationRef.current = animation;

    animation.onfinish = () => animationOnFinish(true);
    animation.oncancel = () => setState(null);
  };

  const animationOnFinish = (isOpen: boolean) => {
    const details = detailsRef.current!;
    details.open = isOpen;
    animationRef.current = null;
    setState(null);
    details.style.height = "";
    details.style.overflow = "";
  };

  return (
    <details
      ref={detailsRef}
      className={"group border-b-1 border-b-pepper30 last:border-none box-content"}
    >
      <summary
        ref={summaryRef}
        onClick={toggle}
        id={props.title.replace(/\s/g, "-").toLowerCase()}
        className={
          "list-none grid grid-cols-[1fr_24px] gap-x-1.5 hover:bg-pepper0 active:bg-pepper10 outline-blueberry80 outline-2 py-4 cursor-pointer scroll-mt-20"
        }
      >
        <B2 weight={"demi"}>{props.title}</B2>{" "}
        <ChevronDown
          className={
            "transform-transform motion-reduce:transition-none duration-350 ease-transform group-open:rotate-180"
          }
        />
      </summary>
      <div ref={contentRef} className={"p-4 pt-1 space-y-4"}>
        {props.children}
      </div>
    </details>
  );
};

export default FaqItem;
