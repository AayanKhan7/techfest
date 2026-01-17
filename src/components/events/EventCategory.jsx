import { Element } from 'react-scroll'
import SectionTitle from '../common/SectionTitle'
import EventCard from './EventCard'

export default function EventCategory({ category }) {
  return (
    <Element name={category.id} className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title={category.title}
          subtitle={category.subtitle}
          icon={category.icon}
          color={category.themeColor}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.events.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              themeColor={category.themeColor}
            />
          ))}
        </div>
      </div>
    </Element>
  )
}
