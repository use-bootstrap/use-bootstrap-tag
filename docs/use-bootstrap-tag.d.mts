declare function UseBootstrapTag(target: HTMLInputElement): {
    addValue: (value: string | string[]) => void;
    removeValue: (value: string | string[]) => void;
    getValue: () => string;
    getValues: () => string[];
};

export { UseBootstrapTag };
