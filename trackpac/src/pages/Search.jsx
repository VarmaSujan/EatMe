// import Header from "../components/Header"
// import Footer from "../components/Footer";

export default function Search({ orders }) {
  const ordersArray = orders.map((parcel) => {
    const dateString = parcel.last_updated.substring(0, 10);
    const timeString = parcel.last_updated.substring(11, 16);
    return (
      <ul key={parcel.id}>
        <li>parcel_id: {parcel.parcel_id}</li>
        <li>parcel_sender: {parcel.sender}</li>
        <li>parcel_status: {parcel.status}</li>
        <li>parcel_location: {parcel.location_name}</li>

        <li>
          parcel_last_updated: {dateString} {timeString}
        </li>
      </ul>
    );
  });

  return (
    <div>
      <h1>Search Page</h1>
      {ordersArray}
    </div>
  );
}
