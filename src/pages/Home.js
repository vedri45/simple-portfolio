import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Appbar from '../components/Appbar';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Controls from '../components/Controls';
import FooterSection from '../components/FooterSection';
import Hero from '../components/Hero';
import Projects from '../components/Projects';

export default function Home() {
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const skillsResponse = await fetch('/.netlify/functions/getSkills');
        if (!skillsResponse.ok) throw new Error('Failed to fetch skills');
        const skillsData = await skillsResponse.json();
        setSkills(skillsData);

        const projectsResponse = await fetch('/.netlify/functions/getProjects');
        if (!projectsResponse.ok) throw new Error('Failed to fetch projects');
        const projectsData = await projectsResponse.json();
        setProjects(projectsData);

        const imagesResponse = await fetch('/.netlify/functions/getImages');
        if (!imagesResponse.ok) throw new Error('Failed to fetch images');
        const imagesData = await imagesResponse.json();
        setImages(imagesData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="text-center" style={{ height: '100vh', alignContent: 'center' }}>
        <Appbar />
        <Controls />
        <Spinner animation="border" role="status" variant="light">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Appbar />
      <Controls />
      <Hero />
      <Projects projects={projects} />
      <Skills skills={skills} images={images} />
      <Contact />
      <FooterSection />
    </div>
  );
}