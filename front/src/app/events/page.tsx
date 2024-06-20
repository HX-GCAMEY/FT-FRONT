import events from "../../../public/data";
import EventsList from "@/components/EventsList";

function EventsPage() {
  return (
    <div>
      <EventsList events={events} />
    </div>
  );
}

export default EventsPage;
