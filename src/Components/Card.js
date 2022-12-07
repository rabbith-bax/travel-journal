export default function Card(props) {
  return (
    <div className="card--main">
      <img
        src={props.imageUrl}
        className="card--image"
        alt="photoOfTripDestination"
      />
      <div className="card--content">
        <div className="card--localization">
          <h4>{props.location}</h4>
          <a href={props.googleMapsUrl}>View location on google maps</a>
        </div>
        <h2>{props.title}</h2>
        <h3>
          {props.startDate} - {props.endDate}
        </h3>
        <p>{props.description}</p>
      </div>
      <hr />
    </div>
  );
}
