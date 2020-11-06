import { Icon } from '../../components/Icon'
import { Link } from '../../components/Link'
import { cls, createStyles } from '../../styles/css'

export function ElectricalCard(props: {
  readonly title: string
  readonly meta?: JSX.Element
  readonly disabled?: boolean
  readonly selected?: boolean
  readonly onSelect: (value: boolean) => void
}): JSX.Element {
  const styles = createStyles({
    card: {
      position: 'relative',
      height: 70,
      padding: 16,
      color: '#BABABA',
      backgroundColor: '#FFFFFF',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: '#DEDEDE',
      borderRadius: 4,
      boxShadow: '0px 2px 8px rgba(11, 30, 53, 0.1)',
    },
    cardSelected: {
      color: '#6E9B95',
      backgroundColor: '#E4F0EE',
      // use pseudo element for border to prevent card content jumping
      $nest: {
        '&::after': {
          content: '""',
          display: 'block',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderWidth: 2,
          borderStyle: 'solid',
          borderColor: '#24665D',
          borderRadius: 'inherit',
          pointerEvents: 'none',
        },
      },
    },
    cardDisabled: {
      opacity: '0.4 !important',
      cursor: 'default',
    },
    btn: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: 8,
      right: 8,
      height: 16,
      width: 16,
      color: '#E4F0EE',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: '#C4C4C4',
      borderRadius: '50%',
    },
    btnSelected: {
      backgroundColor: '#24665D',
      borderWidth: 0,
    },
    title: {
      overflow: 'hidden',
      wordBreak: 'keep-all',
      marginRight: 12,
      marginBottom: 8,
      fontSize: 14,
      fontWeight: 500,
      color: '#000000',
    },
  })

  return (
    <Link
      class={cls(styles.card, {
        [styles.cardSelected]: props.selected,
        [styles.cardDisabled]: !!props.disabled,
      })}
      onClick={() => !props.disabled && props.onSelect(!props.selected)}>
      <div class={cls(styles.btn, { [styles.btnSelected]: props.selected })}>
        {props.selected && <Icon symbol="check" />}
      </div>

      <h5 class={styles.title}>{props.title}</h5>
      {props.meta && <p>{props.meta}</p>}
    </Link>
  )
}
