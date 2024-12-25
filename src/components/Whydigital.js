import FadeInOnScroll from './FadeInOnScroll';

export default function WhyChoose() {
  const reasons = [
    { title: "Eco-Friendly", description: "Reduce paper waste and promote sustainability." },
    { title: "Cost-Effective", description: "Save on printing and postage costs with beautiful designs." },
    { title: "Instant Delivery", description: "Send invitations quickly via email or messaging apps." },
    { title: "Customizable", description: "Easily edit designs to match your theme or preferences." },
    { title: "Interactive Features", description: "Include RSVP buttons, maps, or videos for engagement." },
    { title: "Wide Reach", description: "Share globally with no delays or additional costs." },
    { title: "Accessible Anywhere", description: "Guests can access invitations on any device." },
    { title: "Modern and Trendy", description: "Align with tech-savvy lifestyles for a contemporary touch." },
  ];

  return (
    <div className="py-16 px-4">
      <h1 className="text-center text-4xl font-bold mb-10 text-gray-800">
        Why Choose Digital Invitations?
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {reasons.map((reason, index) => (
          <FadeInOnScroll key={index}>
            <div className="p-6 bg-white text-gray-800 shadow-lg rounded-lg hover:scale-105 transform transition-transform border border-transparent hover:border-red-500 hover:shadow-[0_0_15px_rgba(255,0,0,0.6)]">
              <h2 className="text-xl font-semibold mb-2">{reason.title}</h2>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          </FadeInOnScroll>
        ))}
      </div>
    </div>
  );
}
