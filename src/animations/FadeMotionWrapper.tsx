import { forwardRef } from "react";
import { motion } from "framer-motion";

import { fadeVariant } from "animations/constants/constants";

/**
 * Animates Component that is wrapped in this Component
 */
const FadeMotionWrapper = forwardRef((props: any) => {
    const { children } = props;

    return (
        <motion.div
            {...fadeVariant}>
            {children}
        </motion.div>
    );
});

export default FadeMotionWrapper;