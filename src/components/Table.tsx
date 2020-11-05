import type { Tuple } from '../helpers/utils'
import { css } from '../styles/css'

export function Table<C extends Tuple<string, number>>(props: {
  readonly headers: C
  readonly rows: ReadonlyArray<Tuple<JSX.Element, C['length']>>
}): JSX.Element {
  const styles = css.stylesheet({
    table: {
      display: 'grid',
      width: '100%',
      textAlign: 'left',

      $nest: {
        tr: {
          display: 'grid',
          gridTemplateColumns: `repeat(${props.headers.length}, minmax(0, 1fr))`,
          marginBottom: 24,
        },
        th: {
          padding: 0,
          color: '#BABABA',
          fontSize: 12,
          fontWeight: 400,
        },
        td: {
          padding: 0,
          fontSize: 16,
          fontWeight: 500,
        },
        '& th:not(:first-child), & td:not(:first-child)': { paddingLeft: 5 },
        '& th:not(:last-child), & td:not(:last-child)': { paddingRight: 5 },
      },
    },
  })

  return (
    <table class={styles.table}>
      <thead>
        <tr>
          {props.headers.map((item) => (
            <th>{item}</th>
          ))}
        </tr>
      </thead>
      {props.rows.map((row) => (
        <tr>
          {row.map((item) => (
            <td>{item}</td>
          ))}
        </tr>
      ))}
    </table>
  )
}
