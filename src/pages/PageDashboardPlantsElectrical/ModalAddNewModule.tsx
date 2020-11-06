import { createEffect, createSignal } from 'solid-js'
import { Button } from '../../components/Button'
import { Flex } from '../../components/Flex'
import { Grid } from '../../components/Grid'
import { Icon } from '../../components/Icon'
import { InputCheckbox } from '../../components/InputCheckbox'
import { InputNumber } from '../../components/InputNumber'
import { InputSelect } from '../../components/InputSelect'
import { InputText } from '../../components/InputText'
import { Link } from '../../components/Link'
import { Modal } from '../../components/Modal'
import { Scroller } from '../../components/Scroller'
import { Spacer } from '../../components/Spacer'
import { useFormFields } from '../../helpers/hooks'
import { cls, createStyles, extend, media } from '../../styles/css'
import { br } from '../../styles/mixins'

export function ModalAddNewModule(props: {
  readonly visible: boolean
  readonly onClose: () => void
  readonly onOpen?: () => void
  readonly onModuleAdded: (name: string) => void
}): JSX.Element {
  const styles = createStyles({
    layout: extend(
      {
        display: 'grid',
        height: '100%',
        gridTemplateColumns: '380px minmax(0, 1fr)',
        gridTemplateRows: 'minmax(0, 1fr) min-content',
        gap: 32,
      },
      media(
        { maxWidth: br.mobileL.maxWidth },
        {
          gridTemplateColumns: 'minmax(0, 1fr)',
          gridTemplateRows: 'minmax(0, 1fr) min-content',
        }
      )
    ),
    info: extend(
      { color: '#BABABA' },
      media({ maxWidth: br.mobileL.maxWidth }, { display: 'none' })
    ),
    bottomInput: extend({
      display: 'flex',
      justifyContent: 'center',
    }),
    bottomButtons: extend(
      { $nest: { '&&': { gridTemplateColumns: '0.9fr 1fr' } } },
      media(
        { maxWidth: br.mobileL.maxWidth },
        {
          $nest: {
            '&&': { gridTemplateColumns: '1fr 1fr', gridGap: 24 },
          },
        }
      )
    ),
  })

  const [fields] = useFormFields({
    name: { label: 'Module name', placeholder: 'Some module name', type: 'text', required: true },
    type: {
      label: 'Module type',
      type: 'select',
      values: ['Monofacial', 'Bifacial'],
    },
    layer: {
      label: 'Module layer',
      type: 'select',
      values: ['Glass/Glass', 'Glass/Backsheet'],
    },
    width: { label: 'Width', type: 'number', unit: 'mm', min: 0 },
    height: { label: 'Height', type: 'number', unit: 'mm', min: 0 },
    thickness: { label: 'Thickness', type: 'number', unit: 'mm', min: 0 },
    glassThickness: { label: 'Glass thickness', type: 'number', unit: 'mm', min: 0 },
    cellsWidth: { label: 'No. of cells along width', type: 'text' },
    cellsHeight: { label: 'No. of cells along height', type: 'text' },
    bifaciality: { label: 'Bifaciality', type: 'text' },
    diodes: { label: 'Number of bypass diodes', type: 'text' },
    preset: { label: 'Save as preset', type: 'checkbox', value: true },
  } as const)

  const [detailsVisible, setDetailsVisible] = createSignal(false)
  createEffect(() => {
    if (props.visible) props.onOpen?.()
  })

  return (
    <Modal visible={props.visible}>
      <form
        class={cls({ height: '100%' })}
        onSubmit={(event) => {
          event.preventDefault()
          if (fields.name.value) {
            props.onModuleAdded(fields.name.value)
            props.onClose()
          }
        }}>
        <div class={styles.layout}>
          <Scroller class={cls({ gridRow: 'span 2', height: '100%' })}>
            <h1>Add new module</h1>
            <Spacer height={24} />
            <h2 class={cls({ fontWeight: 500 })}>Quick add</h2>
            <Spacer height={16} />
            <Grid gap={24}>
              <Button theme="secondary">Upload PAN file</Button>
              <Button theme="secondary">Select from presets</Button>
            </Grid>

            <Spacer height={32} />
            <h2 class={cls({ fontWeight: 500 })}>Parameters</h2>
            <Spacer height={16} />
            <InputText {...fields.name} />
            <Spacer height={30} />

            <Grid gap={24} columns={2}>
              <InputSelect {...fields.type} />
              <InputSelect {...fields.layer} />
              <InputNumber {...fields.width} />
              <InputNumber {...fields.height} />
              <InputNumber {...fields.thickness} />
              <InputNumber {...fields.glassThickness} />
              <InputText {...fields.cellsWidth} />
              <InputText {...fields.cellsHeight} />
              <InputText {...fields.bifaciality} disabled={fields.type.value === 'Monofacial'} />
              <InputText {...fields.diodes} />
            </Grid>
          </Scroller>

          <div class={styles.info}>
            <Icon symbol="info" size={24} />
            <Spacer height={12} />
            <h4 class={cls({ fontWeight: 700 })}>Module type</h4>
            <Spacer height={4} />
            <p>Some description about this mysterious module type</p>
            <Spacer height={30} />

            <Link
              class={cls({ color: '#878787' })}
              onClick={() => setDetailsVisible(!detailsVisible())}>
              <Flex alignItems="center">
                <Icon
                  class={cls({
                    transformOrigin: 'center',
                    transform: detailsVisible() ? 'rotate(180deg)' : undefined,
                  })}
                  symbol="down"
                />
                <Spacer width={7} />
                Show more details
              </Flex>
            </Link>
            <Spacer height={10} />
            {detailsVisible() && (
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            )}
          </div>

          <Grid gap={24} columns={1}>
            <div class={styles.bottomInput}>
              <InputCheckbox {...fields.preset} />
            </div>

            <Grid class={styles.bottomButtons} gap={16}>
              <Button theme="secondary" onClick={props.onClose}>
                Cancel
              </Button>
              <Button type="submit">Add module</Button>
            </Grid>
          </Grid>
        </div>
      </form>
    </Modal>
  )
}
