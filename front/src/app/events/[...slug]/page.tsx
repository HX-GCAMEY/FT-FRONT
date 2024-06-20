import EventsList from "@/components/EventsList";
import events from "../../../../public/data";

function FilteredEvents({params}: {params: {slug: string[]}}) {
  const filterData = params.slug;
  console.log(filterData); //['A' , "B"  ]

  const filteredYear = Number(filterData[0]);
  const filteredMonth = Number(filterData[1]);

  const filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date + "T00:00:00");

    const targetMonth = filteredMonth - 1;

    return (
      eventDate.getFullYear() === filteredYear &&
      eventDate.getMonth() === targetMonth
    );
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <EventsList events={filteredEvents} />
    </>
  );
}

export default FilteredEvents;
