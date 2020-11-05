import { createSignal, createState } from 'solid-js'
import { Alert } from '../components/Alert'
import { BoxSection } from '../components/BoxSextion'
import { Button } from '../components/Button'
import { Flex } from '../components/Flex'
import { Grid } from '../components/Grid'
import { Icon } from '../components/Icon'
import { Link } from '../components/Link'
import { Spacer } from '../components/Spacer'
import { cls, createStyles } from '../styles/css'
import { TemplateDashboard } from './templates/TemplateDashboard'

export function PageDashboardPlantsElectrical(): JSX.Element {
  return (
    <TemplateDashboard>
      <BoxSection>
        <Flex>
          <div>
            <h3>Select and calculate</h3>
            <Spacer height={22} />
            <p class={cls({ fontSize: 24, fontWeight: 700 })}>Starting 4 new calculations</p>

            <Spacer height={4} />
            <Flex class={cls({ color: '#BABABA' })}>
              <p>Already calculated: 2</p>
              <Spacer width={18} />
              <p>Incompatible configurations: 2</p>
            </Flex>
          </div>

          <Spacer grow />

          <Flex class={cls({ width: 198 })} flexDirection="column">
            <Button theme="secondary">Cancel</Button>
            <Spacer height={12} />
            <Button>Start calculating</Button>
          </Flex>
        </Flex>
      </BoxSection>

      <Spacer height={40} />

      <ElectricalCardsTable />
    </TemplateDashboard>
  )
}

const state = {
  plants: [
    { title: 'Plant Version 1', meta: 'Preliminary • View factors' },
    { title: 'Plant Version 2', meta: 'Detailed • Ray tracing' },
    { title: 'Plant GM file', meta: 'Detailed • Ray tracing' },
  ],
  modules: [{ title: 'Mitsubishi PV-MLU255HC' }, { title: 'SEP 300W' }],
  inverters: [
    { title: 'Inverter 1', disabled: true },
    { title: 'Inverter 2', disabled: true },
    { title: 'SMA Sunny Boy 5.0' },
    { title: 'GoodWe GW15KN-DT' },
    { title: 'ABB UNO-DM-4.0-TL-PLUS' },
  ],
}

const data: ReadonlyArray<{
  readonly title: string
  readonly items: ReadonlyArray<{
    readonly title: string
    readonly meta?: string
    readonly disabled?: boolean
    readonly selected?: boolean
  }>
  readonly addNewTitle: string
  readonly addNewCallback?: () => void
}> = [
  {
    title: 'Plants',
    items: state.plants,
    addNewTitle: 'Add new plant',
  },
  {
    title: 'Modules',
    items: state.modules,
    addNewTitle: 'Add new module',
    addNewCallback: () => alert('Hi'),
  },
  {
    title: 'Inverters',
    items: state.inverters,
    addNewTitle: 'Add new inverter',
  },
]

// TODO modals with buttons
// TODO modules in global state with localstorage

function ElectricalCardsTable(): JSX.Element {
  const styles = createStyles({
    section: {
      padding: 8,
      backgroundColor: '#FAFAFA',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: '#DEDEDE',
      borderRadius: 4,
    },
    title: { fontSize: 18, fontWeight: 500 },
    selected: { fontSize: 14, color: '#BABABA' },
    addNew: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 48,
      padding: 5,
      backgroundColor: '#EDEDED',
      borderWidth: 1,
      borderStyle: 'dashed',
      borderColor: '#878787',
      borderRadius: 4,
      color: '#000000',
      fontSize: 14,
      fontWeight: 500,
    },
    items: {
      $nest: {
        '> *': {
          marginTop: 8,
        },
      },
    },
  })

  const [cards, setCards] = createState(data)

  const showAlert = (): boolean => !cards.every((card) => card.items.some((v) => v.selected))

  return (
    <>
      {showAlert() && (
        <>
          <Alert theme="info">Select at least 1 card from each column.</Alert>
          <Spacer height={16} />
        </>
      )}

      <Grid gap={8}>
        {cards.map((group, groupIndex) => (
          <section class={styles.section}>
            <Flex
              class={cls({ padding: '5px 8px' })}
              alignItems="center"
              justifyContent="space-between">
              <h4 class={styles.title}>{group.title}</h4>
              <p class={styles.selected}>{group.items.filter((v) => v.selected).length} selected</p>
            </Flex>

            <div class={styles.items}>
              <Link class={styles.addNew} onClick={group.addNewCallback}>
                <Icon symbol="plus" />
                <Spacer width={8} />
                {group.addNewTitle}
              </Link>

              {group.items.map((item, index) => (
                <>
                  <ElectricalCard
                    {...item}
                    selected={item.selected}
                    onSelect={(value) =>
                      void setCards(groupIndex, 'items', index, 'selected', value)
                    }
                  />
                </>
              ))}
            </div>
          </section>
        ))}
      </Grid>
    </>
  )
}

function ElectricalCard(props: {
  readonly title: string
  readonly meta?: string
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
    cardDisabled: {},
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
      paddingRight: 12,
      paddingBottom: 8,
      fontSize: 14,
      fontWeight: 500,
      color: '#000000',
    },
  })

  return (
    <div
      class={cls(styles.card, {
        [styles.cardSelected]: props.selected,
        [styles.cardDisabled]: !!props.disabled,
      })}>
      <Link
        class={cls(styles.btn, { [styles.btnSelected]: props.selected })}
        onClick={() => props.onSelect(!props.selected)}>
        {props.selected && <Icon symbol="check" />}
      </Link>

      <h5 class={cls(styles.title, {})}>{props.title}</h5>
      {props.meta && <p>{props.meta}</p>}
    </div>
  )
}
