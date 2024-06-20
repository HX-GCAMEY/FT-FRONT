import EventCard from "../EventCard";
import {IEventsProps} from "@/interfaces";

function EventsList({events}: IEventsProps) {
  return (
    <ul>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </ul>
  );
}

export default EventsList;
