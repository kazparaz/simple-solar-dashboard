import { createState } from 'solid-js'
import { Alert } from '../../components/Alert'
import { Flex } from '../../components/Flex'
import { Grid } from '../../components/Grid'
import { Icon } from '../../components/Icon'
import { Link } from '../../components/Link'
import { Spacer } from '../../components/Spacer'
import { cls, createStyles } from '../../styles/css'
import { ElectricalCard } from './ElectricalCard'
import { ModalAddNewModule } from './ModalAddNewModule'

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

export function ElectricalCardsTable(): JSX.Element {
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
  })

  const [modals, setModals] = createState({ addNewModule: false })
  const [cards, setCards] = createState<
    ReadonlyArray<{
      readonly title: string
      readonly items: ReadonlyArray<{
        readonly title: string
        readonly meta?: string
        readonly disabled?: boolean
        readonly selected?: boolean
      }>
      readonly addNewTitle: string
      readonly addNewCallback?: () => void
    }>
  >([
    {
      title: 'Plants',
      items: state.plants,
      addNewTitle: 'Add new plant',
    },
    {
      title: 'Modules',
      items: state.modules,
      addNewTitle: 'Add new module',
      addNewCallback: () => setModals('addNewModule', !modals.addNewModule),
    },
    {
      title: 'Inverters',
      items: state.inverters,
      addNewTitle: 'Add new inverter',
    },
  ])
  const showAlert = (): boolean => !cards.every((card) => card.items.some((v) => v.selected))

  return (
    <>
      {showAlert() && (
        <>
          <Alert theme="info">Select at least 1 card from each column.</Alert>
          <Spacer height={16} />
        </>
      )}

      <ModalAddNewModule
        visible={modals.addNewModule}
        onClose={() => setModals('addNewModule', false)}
        onModuleAdded={(title) => setCards(1, 'items', cards[1].items.concat({ title }))}
      />

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

            <Grid columns={1} gap={8}>
              <Link class={styles.addNew} onClick={group.addNewCallback}>
                <Icon symbol="plus" />
                <Spacer width={8} />
                {group.addNewTitle}
              </Link>

              {group.items.map((item, index) => (
                <ElectricalCard
                  {...item}
                  selected={item.selected}
                  onSelect={(value) => void setCards(groupIndex, 'items', index, 'selected', value)}
                />
              ))}
            </Grid>
          </section>
        ))}
      </Grid>
    </>
  )
}
