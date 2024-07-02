import Image from "next/image";
import {IEvent} from "@/interfaces";
import Link from "next/link";

function EventCard({event}: {event: IEvent}) {
  const {id, title, image, date, location} = event;

  return (
    <div className="flex w-auto items-center border border-blue-900 rounded-md shadow-sm">
      <div className="relative object-contain w-36 h-36 rounded-t-lg">
        <Image
          src={`/${image}`}
          alt={title}
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
        />
      </div>
      <div className="m-2 justify-center">
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
    </div>
  );
}

export default EventCard;
