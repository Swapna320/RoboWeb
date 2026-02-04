import "./Services.css";

interface Service {
  id: number;
  title: string;
  description: string;
}

const Services = () => {
  const services: Service[] = [
    {
      id: 1,
      title: "Web Development",
      description:
        "We build modern, responsive, and scalable web applications using React and TypeScript."
    },
    {
      id: 2,
      title: "Application Development",
      description:
        "High-performance applications with clean architecture and maintainable code."
    },
    {
      id: 3,
      title: "UI / UX Design",
      description:
        "User-friendly and visually appealing interfaces inspired by modern AI platforms."
    }
  ];

  return (
    <section className="services-page">
      <h1>Our Services</h1>
      <p className="services-intro">
        We deliver intelligent digital solutions powered by modern web
        technologies.
      </p>

      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
