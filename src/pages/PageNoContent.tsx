import { Spacer } from '../components/Spacer'
import { getRandomInt } from '../helpers/utils'
import { TemplateDashboard } from './templates/TemplateDashboard'

export function PageNoContent(): JSX.Element {
  return (
    <TemplateDashboard>
      <div>
        <h2>Sorry, no content</h2>
        <Spacer height={20} />
        <p>Here is a cute kitten instead:</p>
        <Spacer height={10} />
        <img
          src={`http://placekitten.com/${getRandomInt(200, 250)}/${getRandomInt(200, 300)}`}
          alt="Cute kitten"
        />
      </div>
    </TemplateDashboard>
  )
}
