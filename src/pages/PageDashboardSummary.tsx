import { BoxSection } from '../components/BoxSection'
import { Button } from '../components/Button'
import { Flex } from '../components/Flex'
import { Grid } from '../components/Grid'
import { Link } from '../components/Link'
import { Spacer } from '../components/Spacer'
import { Table } from '../components/Table'
import { cls, createStyles, extend, media } from '../styles/css'
import { br } from '../styles/mixins'
import { TemplateDashboard } from './templates/TemplateDashboard'

export function PageDashboardSummary(): JSX.Element {
  const styles = createStyles({
    sectionTop: extend(
      { marginBottom: 19 },
      media(br.sections, {
        flexWrap: 'wrap',
      })
    ),
    sectionTitle: extend(
      {
        fontSize: 18,
      },
      media(br.sections, { width: '100%' })
    ),
    sectionBtn: extend(
      {
        marginTop: -8,
        minWidth: 198,
      },
      media(br.sections, { marginTop: 16 }),
      media(br.mobile, { minWidth: 0, width: '100%' })
    ),
    subGrid: media(br.sections, { $nest: { '&&': { gridTemplateColumns: 'repeat(2, 1fr)' } } }),
    subTitle: {
      marginBottom: 4,
      color: '#BABABA',
      fontSize: 12,
      fontWeight: 400,
    },
    subValue: {
      fontSize: 16,
      fontWeight: 500,
    },
    table: {
      overflowX: 'auto',
    },
  })

  return (
    <TemplateDashboard>
      <Grid gap={32} columns={1}>
        <BoxSection title="Project parameters">
          <Flex class={styles.sectionTop} justifyContent="space-between">
            <h3 class={styles.sectionTitle}>Meteo</h3>
            <Spacer grow />
            <Button
              class={styles.sectionBtn}
              size="medium"
              theme="secondary"
              href="/dashboard/project/meteo">
              Go to Meteo
            </Button>
          </Flex>
          <Grid class={styles.subGrid} gap={20}>
            {[
              { title: 'Location', value: 'Kaunas, Lithuania' },
              { title: 'Coordinates', value: '54.8985° N, 23.9036° E' },
              { title: 'Meteo data source', value: 'PVGIS' },
            ].map((item) => (
              <section>
                <h4 class={styles.subTitle}>{item.title}</h4>
                <p class={styles.subValue}>{item.value}</p>
              </section>
            ))}
          </Grid>
        </BoxSection>

        <BoxSection title="Simulation parameters">
          <Flex class={styles.sectionTop} justifyContent="space-between">
            <h3 class={styles.sectionTitle}>Plants & electrical</h3>
            <Button
              class={styles.sectionBtn}
              size="medium"
              theme="secondary"
              href="/dashboard/simulation/plants-electrical">
              Go to Plants & electrical
            </Button>
          </Flex>
          <Grid class={styles.subGrid} gap={20}>
            {([
              {
                title: 'Plant versions',
                value: '3',
              },
              {
                title: 'Module versions',
                value: 2,
                btnRoute: '/dashboard/simulation/plants-electrical/add-module',
              },
              {
                title: 'Inverter versions',
                value: 6,
                btnRoute: '/dashboard/simulation/plants-electrical',
              },
            ] as const).map((item) => (
              <section>
                <h4 class={styles.subTitle}>{item.title}</h4>
                <p class={styles.subValue}>
                  <Flex alignItems="center">
                    {item.value}
                    {'btnRoute' in item && item.btnRoute && (
                      <>
                        <Spacer width={15} />
                        <Button size="small" theme="secondary" href={item.btnRoute}>
                          Quick add
                        </Button>
                      </>
                    )}
                  </Flex>
                </p>
              </section>
            ))}
          </Grid>
        </BoxSection>

        <BoxSection title="Calculations">
          <Flex class={styles.sectionTop} justifyContent="space-between">
            <h3 class={styles.sectionTitle}>Recently calculated</h3>
            <Button
              class={styles.sectionBtn}
              size="medium"
              theme="secondary"
              href="/dashboard/calculations/calculated">
              Go to Calculated
            </Button>
          </Flex>
          <div class={styles.table}>
            <Table
              class={cls({ minWidth: 400 })}
              headers={['No.', 'Date', 'Type', 'Configuration', 'Yield']}
              rows={[
                ['#22', '2020-09-17', 'Preliminary', <Link underline>View</Link>, '1000 kWh'],
                ['#21', '2020-09-08', 'Detailed', <Link underline>View</Link>, '1020 kWh'],
                ['#20', '2020-09-05', 'Detailed', <Link underline>View</Link>, '1310 kWh'],
              ]}
            />
          </div>
        </BoxSection>
      </Grid>
    </TemplateDashboard>
  )
}
