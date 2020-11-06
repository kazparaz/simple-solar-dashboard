import { BoxSection } from '../../components/BoxSextion'
import { Button } from '../../components/Button'
import { Flex } from '../../components/Flex'
import { Spacer } from '../../components/Spacer'
import { cls } from '../../styles/css'
import { TemplateDashboard } from '../templates/TemplateDashboard'
import { ElectricalCardsTable } from './ElectricalCardsTable'

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

// TODO modals with buttons
// TODO modules in global state with localstorage
// TODO add module to list
