interface IColors {
    blue: string;
    yellow: string;
    pink: string;
    purple: string;
    orange: string;
    green: string;
}

export type ColorName = keyof IColors;

export default IColors;
