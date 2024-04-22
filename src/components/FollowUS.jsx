import SectionHeadings from "./SectionHeadings";
import cup1 from "/assets/images/cups/Rectangle 9.png";
import cup2 from "/assets/images/cups/Rectangle 10.png";
import cup3 from "/assets/images/cups/Rectangle 11.png";
import cup4 from "/assets/images/cups/Rectangle 12.png";
import cup5 from "/assets/images/cups/Rectangle 13.png";
import cup6 from "/assets/images/cups/Rectangle 14.png";
import cup7 from "/assets/images/cups/Rectangle 15.png";
import cup8 from "/assets/images/cups/Rectangle 16.png";

const cups = [
  {
    url: cup1,
  },
  {
    url: cup2,
  },
  {
    url: cup3,
  },
  {
    url: cup4,
  },
  {
    url: cup5,
  },
  {
    url: cup6,
  },
  {
    url: cup7,
  },
  {
    url: cup8,
  },
];

const FollowUS = () => {
  return (
    <section className="my-24">
      <div className="text-center">
        <SectionHeadings
          subHeading="Follow Us Now"
          heading="Follow on Instagram"
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        {cups.map(({ url }, key) => (
          <img key={key} src={url} alt="cup-1" />
        ))}
      </div>
    </section>
  );
};

export default FollowUS;
