import "./LandingPage.css";
import Image from "next/image";
import Link from "next/link";
import FairTransport from "./FairTransport";

function LandingPage({ data }) {
  return (
    <div className="landing">
      <div className="landing-grid-container">
        <div className="landing-grid">
          <div className="landing-image-container">
            <Image
              src={`https:${data.thermoDistribution.fields.image.fields.file.url}`}
              alt="image from the company green line transport the company green line transport"
              width={250}
              height={300}
              className="landing-image"
            />
          </div>
          <div className="landing-text-content">
            <Image
              src="/images/truck.svg"
              alt="icon in svg file"
              width={25}
              height={25}
              className="landing-icon"
            />
            <h2 className="title">{data.budservice.fields.title}</h2>
            <p className="landing-description">
              {data.budservice.fields.shortText}
            </p>
            <Link href="/services" passHref>
              <button className="landing-button">Läs Mer</button>
            </Link>
          </div>
          <div className="landing-image-container">
            <Image
              src={`https:${data.styckegodsOmlastning.fields.image.fields.file.url}`}
              alt="image from the company green line transport"
              width={250}
              height={300}
              className="landing-image"
            />
          </div>
          <div className="landing-text-content">
            <Image
              src="/images/thermo.svg"
              alt="icon in svg file"
              width={25}
              height={25}
              className="landing-icon"
            />
            <h2 className="title">{data.thermoDistribution.fields.title}</h2>
            <p className="landing-description">
              {data.thermoDistribution.fields.shortText}
            </p>
            <Link href="/services" passHref>
              <button className="landing-button">Läs Mer</button>
            </Link>
          </div>
          <div className="landing-image-container">
            <Image
              src={`https:${data.budservice.fields.image.fields.file.url}`}
              alt="image from the company green line transport"
              width={250}
              height={300}
              className="landing-image"
            />
          </div>
          <div className="landing-text-content">
            <Image
              src="/images/hand-truck.svg"
              alt="icon in svg file"
              width={25}
              height={25}
              className="landing-icon"
            />
            <h2 className="title">{data.styckegodsOmlastning.fields.title}</h2>
            <p className="landing-description">
              {data.styckegodsOmlastning.fields.shortText}
            </p>
            <Link href="/services" passHref>
              <button className="landing-button">Läs Mer</button>
            </Link>
          </div>
        </div>
      </div>
      <FairTransport data={data} />
    </div>
  );
}

export default LandingPage;
