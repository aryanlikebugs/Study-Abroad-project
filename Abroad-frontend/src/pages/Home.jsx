import Hero from '../components/Hero';
import ProgramCard from '../components/ProgramCard';

export default function Home() {
  const featuredPrograms = [
    {
      title: "Computer Science",
      university: "MIT",
      location: "Cambridge, USA",
      duration: "4 years",
      rating: 4.9,
      reviews: 250,
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
      price: "$52,000/year"
    },
    {
      title: "Software Engineering",
      university: "Stanford University",
      location: "Stanford, USA",
      duration: "4 years",
      rating: 4.8,
      reviews: 180,
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80",
      price: "$55,000/year"
    },
    {
      title: "AI & Machine Learning",
      university: "ETH Zurich",
      location: "Zurich, Switzerland",
      duration: "2 years",
      rating: 4.7,
      reviews: 150,
      image: "https://images.unsplash.com/photo-1517504734587-2890819debab?auto=format&fit=crop&q=80",
      price: "€30,000/year"
    }
  ];

  return (
    <div>
      <Hero />
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Featured Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPrograms.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>
      </div>
    </div>
  );
}