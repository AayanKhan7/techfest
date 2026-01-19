export default function EventDetailsModal({ event, onClose }) {
  if (!event) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
      <div className="bg-neutral-900 text-white p-10 rounded-2xl max-w-xl w-full">
        <h2 className="text-3xl mb-2">{event.title}</h2>
        <p className="text-sm text-white/60 mb-4">{event.type}</p>

        <p className="mb-4">{event.description}</p>

        <ul className="mb-4 list-disc list-inside text-white/70">
          {event.rules.map((rule, i) => (
            <li key={i}>{rule}</li>
          ))}
        </ul>

        <div className="text-sm mb-4 space-y-1">
          <p>🏆 Prize Pool: {event.prizePool}</p>
          <p>👥 Team Size: {event.teamSize}</p>
          <p>💰 Registration Fee: {event.registrationFee}</p>
        </div>

        <div className="flex gap-4">
          <button className="px-6 py-2 bg-white text-black rounded">
            Register Now
          </button>
          <button onClick={onClose} className="px-6 py-2 border rounded">
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
