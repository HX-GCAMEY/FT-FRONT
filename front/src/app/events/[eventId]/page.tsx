import events from "../../../../public/data";
import Image from "next/image";

function EventDetail({params}: {params: {eventId: string}}) {
  const event = events.find((event) => event.id === Number(params.eventId));

  return (
    <div>
      <Image
        src={`/${event?.image}`}
        alt={event?.title || "image"}
        width={300}
        height={300}
      />
      <h1>{event?.title}</h1>
      <p>{event?.description}</p>
      <p>{event?.location}</p>
      <p>{event?.date}</p>
    </div>
  );
}

export default EventDetail;
