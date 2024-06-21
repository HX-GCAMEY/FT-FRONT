import EventCard from "../EventCard";
import {IEventsProps} from "@/interfaces";

function EventsList({events}: IEventsProps) {
  return (
    <div className="grid grid-cols-1 px-4 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}

export default EventsList;
