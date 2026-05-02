import Marquee from "react-fast-marquee";
const tips=[
  {
    "id": 1,
    "tip": "Choose a healthy animal with no visible defects and good body condition."
  },
  {
    "id": 2,
    "tip": "Check the age of the animal according to Qurbani rules (cow: 2 years+, goat/sheep: 1 year+)."
  },
  {
    "id": 3,
    "tip": "Make sure the animal is active, alert, and eating properly before purchase."
  },
  {
    "id": 4,
    "tip": "Buy from a trusted seller to ensure fair weight and honest pricing."
  },
  {
    "id": 5,
    "tip": "Avoid animals with signs of illness such as weak movement, discharge, or poor coat condition."
  },
  {
    "id": 6,
    "tip": "Weigh the animal properly or verify weight with a reliable scale before final deal."
  },
  {
    "id": 7,
    "tip": "Compare prices from multiple sellers before making a final decision."
  },
  {
    "id": 8,
    "tip": "Ensure the animal has enough time to rest and is well-fed before Qurbani day."
  }
]

const QurbaniTips = () => {
    return (
        <div className="flex justify-between gap-4 bg-green-50">
             <button className="btn bg-green-600 text-white ">Qurbani Tips : </button>
          <Marquee>
           
    {
        tips.map((t)=><div key={t.id} className=""><p className="mr-20">{t.tip}</p></div>)
    }
  </Marquee>  
        </div>
    );
};

export default QurbaniTips;