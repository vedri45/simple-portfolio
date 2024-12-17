import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useQuery } from 'react-query';
import Appbar from '../components/Appbar';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Controls from '../components/Controls';
import FooterSection from '../components/FooterSection';
import Hero from '../components/Hero';
import Projects from '../components/Projects';

const fetchSkills = async () => {
  const response = await fetch('/.netlify/functions/getSkills');
  if (!response.ok) throw new Error('Failed to fetch skills');
  return response.json();
};

const fetchProjects = async () => {
  const response = await fetch('/.netlify/functions/getProjects');
  if (!response.ok) throw new Error('Failed to fetch projects');
  return response.json();
};

const fetchImages = async () => {
  const response = await fetch('/.netlify/functions/getImages');
  if (!response.ok) throw new Error('Failed to fetch images');
  return response.json();
};

export default function Home() {
  const { data: skills, isLoading: loadingSkills, error: errorSkills } = useQuery(['skills'], fetchSkills);
  const { data: projects, isLoading: loadingProjects, error: errorProjects } = useQuery(['projects'], fetchProjects);
  const { data: images, isLoading: loadingImages, error: errorImages } = useQuery(['images'], fetchImages);

  if (loadingSkills || loadingProjects || loadingImages) {
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

  if (errorSkills || errorProjects || errorImages) {
    return <div>Error: {errorSkills?.message || errorProjects?.message || errorImages?.message}</div>;
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