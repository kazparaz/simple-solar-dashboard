/**
 * Defines app styleguide
 */

export type StyleGuide = {
  readonly colors:
    | '#000000'
    | '#0B382B'
    | '#1B544C'
    | '#1C5C7B'
    | '#1E8072'
    | '#1F1F1F'
    | '#20554E'
    | '#24665D'
    | '#262626'
    | '#32736A'
    | '#6E9B95'
    | '#878787'
    | '#BABABA'
    | '#C4C4C4'
    | '#CCCCCC'
    | '#D0E4E1'
    | '#D11C32'
    | '#DEDEDE'
    | '#E4F0EE'
    | '#EDEDED'
    | '#EDF4F7'
    | '#FAFAFA'
    | '#FFFFFF'
    | 'currentColor'
    | 'inherit'
  readonly fontSize: 24 | 18 | 16 | 14 | 12 | 10
  readonly fontFamily: 'Inter, system-ui, sans-serif'
  readonly fontWeight: 400 | 500 | 700
}
