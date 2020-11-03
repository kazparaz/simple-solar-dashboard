/**
 * Defines app styleguide
 */

// export const styleGuide = {
//   // Defining colors by value makes easier to refactor instead of using generic names
//   colors: [
//     '#000000',
//     '#0B382B',
//     '#1B544C',
//     '#1C5C7B',
//     '#1E8072',
//     '#1F1F1F',
//     '#20554E',
//     '#24665D',
//     '#262626',
//     '#6E9B95',
//     '#878787',
//     '#BABABA',
//     '#C4C4C4',
//     '#CCCCCC',
//     '#D0E4E1',
//     '#D11C32',
//     '#DEDEDE',
//     '#E4F0EE',
//     '#EDEDED',
//     '#EDF4F7',
//     '#FAFAFA',
//     '#FFFFFF',
//     'currentColor',
//   ],
//   fontSize: [24, 18, 16, 14, 12],
//   fontFamily: ['Inter, system-ui, sans-serif'],
//   fontWeight: [500, 700],
// } as const

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
  readonly fontSize: 24 | 18 | 16 | 14 | 12
  readonly fontFamily: 'Inter, system-ui, sans-serif'
  readonly fontWeight: 500 | 700
}
