import { motion } from "framer-motion";

import { fadeVariant, springVariant } from "animations/constants/constants";

/**
 * Animates Component that is wrapped in this Component
 */
const MotionWrapper = (props: any) => {
    const { children, fade = true, spring, ...rest } = props;
    
    let variantToAnimate;
    if (fade) {
        variantToAnimate = fadeVariant;
    }

    if (spring) {
        variantToAnimate = springVariant;
    }

    return (
        <motion.div
            {...variantToAnimate}
            {...rest}
            >
            {children}
        </motion.div>
    );
};

export default MotionWrapper;