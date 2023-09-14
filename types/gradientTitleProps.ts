declare module "gradient-title-types" {
  type GradientProps = {
    title: string;
    size?: string;
  };

  type NeverLeftAndRightColors = {
    leftColor?: never;
    rightColor?: never;
  };

  type NeverCustomGradient = {
    customGradient?: never;
  };

  type GradientWithLeftAndRight = {
    leftColor: string;
    rightColor: string;
  } & GradientProps &
    NeverCustomGradient;

  type GradientWithCustom = {
    customGradient: string;
  } & GradientProps &
    NeverLeftAndRightColors;

  export type GradientTitleProps = GradientWithLeftAndRight | GradientWithCustom;
};
