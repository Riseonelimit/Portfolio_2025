import { useState, useEffect, useCallback } from "react";

type UseSecretSequenceOptions = {
    sequence: string;
    timeout?: number;
    onActivate?: () => void;
    onDeactivate?: () => void;
};

export const useSecretSequence = ({
    sequence,
    timeout = 3000,
    onActivate,
    onDeactivate,
}: UseSecretSequenceOptions) => {
    const [typedSequence, setTypedSequence] = useState("");
    const [isActive, setIsActive] = useState(false);

    const resetSequence = useCallback(() => {
        setTypedSequence("");
    }, []);

    const activateSequence = useCallback(() => {
        setIsActive(true);
        onActivate?.();
    }, [onActivate]);

    const deactivateSequence = useCallback(() => {
        setIsActive(false);
        onDeactivate?.();
    }, [onDeactivate]);

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            // Ignore key presses when typing in input fields
            if (
                event.target instanceof HTMLInputElement ||
                event.target instanceof HTMLTextAreaElement ||
                (event.target instanceof HTMLElement &&
                    event.target.isContentEditable)
            ) {
                return;
            }

            const key = event.key.toLowerCase();

            setTypedSequence((prev) => {
                const newSequence = (prev + key).slice(-sequence.length);

                if (newSequence === sequence.toLowerCase()) {
                    activateSequence();
                    return "";
                }

                return newSequence;
            });
        };

        window.addEventListener("keypress", handleKeyPress);

        return () => {
            window.removeEventListener("keypress", handleKeyPress);
        };
    }, [sequence, activateSequence]);

    useEffect(() => {
        if (!isActive) return;

        const timer = setTimeout(() => {
            deactivateSequence();
        }, timeout);

        return () => clearTimeout(timer);
    }, [isActive, timeout, deactivateSequence]);

    return {
        isActive,
        typedSequence,
        resetSequence,
        activateSequence,
        deactivateSequence,
    };
};
