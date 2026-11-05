import { motion } from "framer-motion";
import { EASE } from "../../lib/motion";

export default function Reveal({ children, delay = 0, y = 26, className, as = "div", once = true, ...rest }) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-8% 0px" }}
      transition={{ duration: 0.8, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
