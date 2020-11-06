import type { Tuple } from '../helpers/utils'
import { cls, createStyles } from '../styles/css'
import { Grid } from './Grid'

export function Table<C extends Tuple<string, number>>(props: {
  readonly class?: string
  readonly headers: C
  readonly rows: ReadonlyArray<Tuple<JSX.Element, C['length']>>
}): JSX.Element {
  const styles = createStyles({
    table: {
      width: '100%',
      gridTemplateColumns: `repeat(${props.headers.length}, minmax(max-content, 1fr)) !important`,
    },
    header: {
      padding: 0,
      color: '#BABABA',
      fontSize: 12,
      fontWeight: 400,
      marginBottom: -10,
    },
    value: {
      padding: 0,
      fontSize: 16,
      fontWeight: 500,
    },
  })

  return (
    <Grid class={cls(styles.table, props.class)} gap={26}>
      {props.headers.map((item) => (
        <div class={styles.header}>{item}</div>
      ))}
      {props.rows.map((row) => row.map((item) => <div class={styles.value}>{item}</div>))}
    </Grid>
  )
}
