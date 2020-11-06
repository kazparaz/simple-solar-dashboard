import { BoxSection } from '../../components/BoxSection'
import { Button } from '../../components/Button'
import { Flex } from '../../components/Flex'
import { Grid } from '../../components/Grid'
import { Spacer } from '../../components/Spacer'
import { createStyles, extend, media } from '../../styles/css'
import { TemplateDashboard } from '../templates/TemplateDashboard'
import { ElectricalCardsTable } from './ElectricalCardsTable'

const sectionsBr = { maxWidth: 650 }

export function PageDashboardPlantsElectrical(): JSX.Element {
  const styles = createStyles({
    sectionWrap: extend(media(sectionsBr, { flexWrap: 'wrap' })),
    sectionTitle: extend({ fontSize: 18 }, media(sectionsBr, { width: '100%' })),
    sectionTitleSpace: media(sectionsBr, { $nest: { '&&': { height: 16 } } }),
    sectionHeading: extend({ fontSize: 24, fontWeight: 700 }, media(sectionsBr, { fontSize: 21 })),
    sectionHeadingSpace: media(sectionsBr, { $nest: { '&&': { height: 8 } } }),
    sectionMeta: extend({ color: '#BABABA' }, media(sectionsBr, { fontSize: 10 })),
    sectionBtn: extend(
      { width: 198 },
      media(sectionsBr, {
        $nest: {
          '&&': {
            width: '100%',
            marginTop: 15,
            gridTemplateColumns: 'repeat(2, 1fr)',
          },
        },
      }),
      media({ maxWidth: 480 }, { $nest: { '&&': { gridTemplateColumns: 'repeat(1, 1fr)' } } })
    ),
    tableSpace: media(sectionsBr, { $nest: { '&&': { height: 19 } } }),
  })

  return (
    <TemplateDashboard>
      <BoxSection>
        <Flex class={styles.sectionWrap}>
          <div>
            <h3 class={styles.sectionTitle}>Select and calculate</h3>
            <Spacer class={styles.sectionTitleSpace} height={22} />
            <p class={styles.sectionHeading}>Starting 4 new calculations</p>
            <Spacer class={styles.sectionHeadingSpace} height={4} />

            <Flex class={styles.sectionMeta}>
              <p>Already calculated: 2</p>
              <Spacer width={18} />
              <p>Incompatible configurations: 2</p>
            </Flex>
          </div>

          <Spacer grow />

          <Grid class={styles.sectionBtn} gap={12} columns={1}>
            <Button theme="secondary">Cancel</Button>
            <Button>Start calculating</Button>
          </Grid>
        </Flex>
      </BoxSection>

      <Spacer class={styles.tableSpace} height={40} />

      <ElectricalCardsTable />
    </TemplateDashboard>
  )
}

// TODO modals with buttons
// TODO modules in global state with localstorage
// TODO add module to list
