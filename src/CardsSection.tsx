import InfoCard from "./InfoCard";

export default function CardsSection() {
  return(
    <>
    <h2 className="text-center pt-12 text-2xl">Topics We Explore</h2>
    <div className="cards flex justify-center gap-12 py-12">
      <InfoCard cardTitle="Hiking" />
      <InfoCard cardTitle="Camping" />
      <InfoCard cardTitle="Climbing" />
    </div>
    <div className="cards flex justify-center gap-12 pb-12">
      <InfoCard cardTitle="Swimming" />
      <InfoCard cardTitle="Biking" />
      <InfoCard cardTitle="Cliff Jumping" />
    </div>
    </>
  );
}