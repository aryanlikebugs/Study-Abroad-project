export default function Process() {
  return (
    <div className="container mx-auto px-4 py-12 bg-gradient-to-r from-blue-50 to-indigo-100 min-h-screen">
      <img
        src="https://images.pexels.com/photos/5624131/pexels-photo-5624131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Application Process"
        className="w-full h-64 object-cover rounded-lg shadow-md mb-8"
      />
      <h1 className="text-5xl font-extrabold mb-12 text-center text-indigo-800">
        Application Process
      </h1>
      <p className="text-xl text-gray-700 text-center max-w-2xl mx-auto mb-10">
        Applying for college can be a complex process, but breaking it down into
        manageable steps makes it easier. Here’s a step-by-step guide to help
        you through it.
      </p>

      <div className="space-y-8 max-w-4xl mx-auto">
        {[
          {
            title: "Research Colleges",
            desc: "Start by researching different colleges based on programs, location, and costs. Make a list of institutions that align with your goals.",
            img: "https://images.pexels.com/photos/1106468/pexels-photo-1106468.jpeg?auto=compress&cs=tinysrgb&w=600",
          },
          {
            title: "Meet Requirements",
            desc: "Ensure you meet the academic and extracurricular requirements for your chosen colleges. Take standardized tests if needed.",
            img: "https://img.freepik.com/free-photo/3d-icon-traveling-vacation_23-2151037394.jpg?t=st=1742482598~exp=1742486198~hmac=c25c53757ea00cb85f1c7bda148a9a1501e6dc58c698b348dd7c1ef9cd89798f&w=1800",
          },
          {
            title: "Gather Documents",
            desc: "Prepare transcripts, recommendation letters, and personal statements. Some colleges may require additional documents.",
            img: "https://img.freepik.com/free-photo/graduation-cap-with-globe-digital-art-style-education-day_23-2151164260.jpg?t=st=1742482661~exp=1742486261~hmac=2fc2d8832cc839461ca69c1245da59dab137106d7f34a881a95d9470ee6220be&w=1380",
          },
          {
            title: "Complete Applications",
            desc: "Fill out college applications through their portals or centralized platforms like the Common App. Ensure accuracy before submission.",
            img: "https://img.freepik.com/free-photo/full-shot-woman-taking-selfie_23-2149153257.jpg?t=st=1742483069~exp=1742486669~hmac=784d3a0cd80879809967f4cf9c3e269f8e28efe553138dd3fdf467cdcbadfa68&w=1800",
          },
          {
            title: "Apply for Financial Aid",
            desc: "Check for financial aid opportunities, scholarships, and grants to support your education expenses.",
            img: "https://img.freepik.com/free-vector/study-abroad-concept-illustration_114360-7743.jpg?t=st=1742483144~exp=1742486744~hmac=7eb010e97a95d60a48be9da4468de12e38cfbe41999d7b1e00f80e26817e4f46",
          },
          {
            title: "Track Your Application",
            desc: "Monitor application deadlines and track your submissions. Some colleges may request additional information.",
            img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            title: "Await Decisions",
            desc: "Once you’ve submitted your applications, wait for decision letters. Prepare for interviews if required.",
            img: "https://images.unsplash.com/photo-1547459671-6d95eed7af1b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
        ].map((step, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl border-l-8 border-indigo-500"
          >
            <img
              src={step.img}
              alt={step.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-indigo-700 mb-2">
              {index + 1}. {step.title}
            </h2>
            <p className="text-gray-600">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
