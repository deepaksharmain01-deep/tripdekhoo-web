import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './testimonal.css'
import TestimonialCarousel from './TestimonialCarousel';
const testimonials = [
  {
    name: "Neha & Rajiv ",
    location: "Mumbai",
    review: "Tripdekhoo made our honeymoon in Singapore absolutely magical. From the stunning views at Marina Bay Sands to the romantic river cruise in Clarke Quay, everything was perfectly curated. We loved the personalized itinerary that gave us the right balance of sightseeing and downtime. The hotel they chose had a great location near Orchard Road. What we appreciated most was the 24/7 WhatsApp support—we felt taken care of throughout the trip. Highly recommend them for couples planning an international getaway!",
  },
  {
    name: "Amit & Sneha ",
    location: "Mumbai (Honeymoon Couple)",
    review: "Our Bali honeymoon with Tripdekhoo was a dream come true! From the romantic candlelight dinner in Uluwatu to the stunning private pool villa in Ubud, everything was perfectly arranged. We loved the personalized touches, like the flower petal bath on arrival and a surprise sunset cruise. It was luxurious, seamless, and incredibly romantic — exactly what we imagined!",
  },
  {
    "name": "Neha & Rajiv",
    "location": "Mumbai",
    "review": "Tripdekhoo made our honeymoon in Singapore absolutely magical. From the stunning views at Marina Bay Sands to the romantic river cruise in Clarke Quay, everything was perfectly curated. We loved the personalized itinerary that gave us the right balance of sightseeing and downtime. The hotel they chose had a great location near Orchard Road. What we appreciated most was the 24/7 WhatsApp support—we felt taken care of throughout the trip. Highly recommend them for couples planning an international getaway!"
  },
  {
    "name": "Shetty Family",
    "location": "Bangalore",
    "review": "We were traveling with kids and elderly parents, and Tripdekhoo designed an itinerary that worked for everyone. Casela Nature Park was a hit with the kids, and my parents enjoyed the botanical gardens and temple visits. The entire trip was smooth, with Indian food options arranged daily. Mauritius is great for families!"
  },
  {
    "name": "The Reddys",
    "location": "Hyderabad",
    "review": "Traveling to Europe with kids and parents was a challenge we didn’t want to handle on our own, and Tripdekhoo came to the rescue. We covered Paris, Amsterdam, and Switzerland over 12 days, with well-timed breaks, Indian meals, and skip-the-line passes for major attractions. The coordination was flawless — we didn’t feel rushed once!"
  },
  {
    "name": "Tanvi Sharma",
    "location": "Bangalore",
    "review": "Dubai was my first solo trip abroad, and I was nervous — but Tripdekhoo made me feel completely safe and supported. They booked me in a centrally located hotel near the metro, and I had guided tours for most activities. From skydiving over the Palm to exploring Old Dubai, I experienced everything without a single glitch. I’ll be back soon!"
  },
  {
    "name": "Kriti Bansal",
    "location": "Jaipur",
    "review": "My first solo international trip was to Thailand, and Tripdekhoo gave me all the confidence I needed. I stayed in safe, centrally located hostels and had optional guided tours in Bangkok and Chiang Mai. I explored temples, tried local street food, and even took a Thai cooking class. The entire journey was empowering and super fun!"
  },
  {
    "name": "Ritika & Sahil",
    "location": "Lucknow",
    "review": "We booked a romantic getaway with Tripdekhoo, and it was magical. Eiffel Tower at night, river cruise on the Seine, and a surprise candlelight dinner in Prague were unforgettable highlights. The hotels were boutique-style with character and charm. The itinerary had just the right amount of leisure and exploration."
  },
  {
    "name": "Kunal Sharma",
    "location": "Delhi",
    "review": "I needed a short solo break and Tripdekhoo planned it just right. I stayed in a peaceful hostel, went café hopping, and explored hidden beaches. A well-balanced trip with great coordination!"
  },
  {
    "name": "Deepika & Friends",
    "location": "Mumbai",
    "review": "We covered Jaipur, Jodhpur, and Udaipur in 7 days. Great homestays, colorful markets, and local food tours—Tripdekhoo’s planning was top-notch!"
  },
  {
    "name": "Ankit & Team",
    "location": "Pune",
    "review": "Our group of 10 did the Manali to Leh bike expedition with Tripdekhoo. The bikes were in excellent condition, and there was a backup van throughout. From the treacherous Baralacha La to the cold deserts of Nubra, every day was thrilling. The support team was skilled and knew how to handle tough conditions. It was a once-in-a-lifetime adventure."
  },
  {
    "name": "Joshi Family",
    "location": "Pune",
    "review": "We wanted something offbeat but safe for our teenage kids, and Tripdekhoo recommended Spiti in summer. The monasteries fascinated my son and the night sky amazed us all. Every stay was clean, warm, and scenic. Even in the remote villages, we never felt disconnected. A truly enriching family experience."
  },
  {
    "name": "Neeraj",
    "location": "Pune",
    "review": "The sliding descent on snow was wild fun! Tripdekhoo’s team was technically sound and ensured every hiker completed safely. The trek had forests, meadows, snowfields—perfectly balanced adventure."
  },
  {
    "name": "Kavita Joshi",
    "location": "Jaipur",
    "review": "I joined a women’s group trek with Tripdekhoo. Everything from permits to safety was well taken care of. Reaching the Chandrashila summit during sunrise was an emotional high. Even for a short trek, it felt like a big achievement!"
  },
  {
    "name": "Divya",
    "location": "Hyderabad",
    "review": "Tripdekhoo helped me train, prepare, and conquer EBC. The acclimatization days, local guides, and group camaraderie made all the difference. I trusted them with my dream and they delivered beautifully."
  },
  {
    "name": "Karan Mehta",
    "location": "Surat",
    "review": "From dance shows in Chennai to temple tales in Tanjore, this was a cultural deep dive. The attention to detail in the itinerary was impressive."
  },
  {
    "name": "The Bhaskar Family",
    "location": "Hyderabad",
    "review": "Our kids were fascinated by Sela Pass and Bum La! Tripdekhoo arranged oxygen cylinders and warm stays in Dirang and Tawang. The cultural evening with Monpa traditions was a lovely surprise!"
  }
];

const TestimonialCard = ({data}) => {

  
  return (
    <div>
    <div className='testimonal_heading mb-4'> <h1 className='testimonal-card-heading'>Testimonial’s</h1>
    <span className='testimonal_sub_heading'>From Our Satisfied Customers</span></div>
   <TestimonialCarousel testimonials={data ? data : testimonials }/>
    </div>
  );
};

export default TestimonialCard;
