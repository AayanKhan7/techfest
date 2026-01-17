import { Element } from 'react-scroll'
import EventCategory from './EventCategory'
import { EVENT_CATEGORIES } from '../../data'

export default function EventGrid() {
  return (
    <Element name="events" className="py-20">
      <div className="space-y-32">
        {EVENT_CATEGORIES.map((category) => (
          <EventCategory key={category.id} category={category} />
        ))}
      </div>
    </Element>
  )
}
