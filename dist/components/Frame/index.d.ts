/// <reference types="react" />
import csstype from 'csstype';
type Direction = 'row' | 'column';
type Dimension = number | {
    ratio: number;
};
interface Props {
    children: React.ReactNode;
    className?: string;
    direction?: Direction;
    reverse?: boolean;
    justifyContent?: csstype.Property.JustifyContent;
    alignItems?: csstype.Property.AlignItems;
    width?: Dimension;
    height?: Dimension;
    padding?: number;
    gap?: number;
    overflow?: boolean;
}
export default function Frame({ children, className, direction, reverse, justifyContent, alignItems, width, height, padding, gap, overflow, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
