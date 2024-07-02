import events from "../../../public/data";
import dynamic from "next/dynamic";

const EventsList = dynamic(() => import("@/components/EventsList"), {
  loading: () => <p>Loading...</p>,
});

function EventsPage() {
  return (
    <div>
      <EventsList events={events} />
    </div>
  );
}

export default EventsPage;
