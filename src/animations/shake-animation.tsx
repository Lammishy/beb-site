/**
 * Higher Order Component that turns a component into a shaking component
 */
import { useState, useEffect, useRef, useCallback } from "react"
import { headShake } from "react-animations";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
    headShake: {
        animationName: headShake,
        animationDuration: "1s"
    }
});

const ANIMATION_RETRY_DURATION = 1000;

/**
 * TODO!!: Current implementations runs useEffect twice, because it is dependent on shouldShake state.
 * When shouldStake first changes upon shakeComponent func execution,
 * shouldShake changes from false -> true, which initiates a useEffect trigger
 * useEffect then runs a timeout with setShouldStake(false). which causes useEffect to run again because shouldShake changed from true -> false
 * 
 * Therefore, useEffect runs twice in this function. 
 * TODO: Find a way to ensure that useEffect is not run twice (and therefore prevent your component from re-rendering twice).
 * 
 * Currently, the implementation for animation shaking is fine because setTimeout (clearing the CSS class) would only run when shouldShake = true 
 */


const makeShakeValidationErrorAnimation = (Component: React.FunctionComponent) => {
    /**
     * Execution of this function would create an Higher Order Component that wraps a desired component.
     * @param {React.FunctionComponent} Component React Component to implement shaking animation on.
     * @returns {React.FunctionComponent} Component with makeShaking functionality
     */
    return (props: any) => {
        /**
         * This is the Higher Order Component.
         */

        const [shouldShake, setShouldShake] = useState(false);
        const isFirstRender = useRef(true); // keep track of first render. used to prevent callback in useEffect from getting called

        useEffect(() => {
            /**
             * useEffect used here to clear CSS animation class
             * useEffect ends up running twice when shakeComponent executes because 2 setStates are called, and shouldShake goes through 2 state changes.
             */
            
            // Prevent execution of useEffect on first render
            if (isFirstRender.current) {
                isFirstRender.current = false; // keep track of first render. now set to false because it is no longer a first render.

                return; // stop execution of rest of useEffect
            }

            // Only clear css animation class if it has already been applied (shouldShake = true)
            if (shouldShake) {
                setTimeout(() => {
                    setShouldShake(false);
                }, ANIMATION_RETRY_DURATION);
            };

        }, [shouldShake]);

        const shakeComponent = useCallback(() => {
            /**
             * Pass shake component function down to component
             * Since the animation is a CSS class, simply setting the same class again would have no effect.
             * Therefore, a setTimeout is defined here to remove the CSS class so that we can set the "shouldShake" class on the component again to activate the animation
             */
            setShouldShake(true);
        }, [])

        return (
            <Component
                {...props}
                animate={shakeComponent}
                frameClass={shouldShake ? css(styles.headShake ) : ""}
            />)
    }
}


export default makeShakeValidationErrorAnimation;