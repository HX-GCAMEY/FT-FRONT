import Image from "next/image";
import {IEvent} from "@/interfaces";
import Link from "next/link";

function EventCard({event}: {event: IEvent}) {
  const {id, title, image, date, location} = event;

  return (
    <li>
      <Image src={`/${image}`} alt={title} width={300} height={300} />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{date}</time>
          </div>
          <div>
            <address>{location}</address>
          </div>
          <div>
            <button>
              <Link href={`/events/${id}`}>Event Details</Link>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default EventCard;
