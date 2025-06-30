import React from 'react';
import BackgroundImage from './_tools/_content/BackgroundImage';
import TextImage from './_tools/_content/TextImage';
import TextOverlayImage from './_tools/_content/TextOverlayImage';
import StandardButton from './_tools/_content/Button';

const Page: React.FC = () => {
  return (
    <div>
      <BackgroundImage
        imageUrl="/astrophotography/east-veil.jpg"
        overlay={true}
        heightClass="h-screen"
        >
        <TextImage
          imageUrl="/photo_jean.png"
          imageAlt="Me at Sequioa National Park ! Taken by my friend Matthieu Prigent."
          imagePosition="right"
          className="max-w-4xl mx-auto p-6" 
          imageWidth={35}
          mobileImageWidth={70}
          children={
            <div className="text-white text-center">
              <h1 className="text-6xl font-bold">Jean</h1>
              <h1 className="text-6xl font-bold mb-4">Choppin de Janvry</h1>
              <p className="text-3xl"><i>Cosmology data analyst apprentice at CEA Paris-Saclay</i></p>
            </div>
          }
        />
      </BackgroundImage>
      <BackgroundImage
        imageUrl="/astrophotography/lobster.JPEG"
        overlay={true}
        heightClass="h-screen"
        >
        <TextOverlayImage
          imageUrl="/astrophotography/lobster.JPEG"
          imageAlt="Description of your image"
          className="max-w-4xl mx-auto p-6" 
          imageWidth={60}
          mobileImageWidth={60}
          children={
            <div className="text-white text-center">
              <h1 className="text-5xl font-bold mb-4">PROJECTS</h1>
              <p className="text-2xl">Discover some of my projects ! </p>
            </div>
          }
        />
      </BackgroundImage>
      <BackgroundImage
        imageUrl="/astrophotography/pickering.JPEG"
        overlay={true}
        heightClass="h-screen"
        >
      </BackgroundImage>
        <div className="flex flex-col items-center justify-center h-full text-white">
          <h2 className="text-4xl font-bold mb-8">GitHub Activity</h2>

          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* GitHub Stats - Using public API for now */}
            <img 
              src="https://github-readme-stats.vercel.app/api?username=JeanCHDJdev&show_icons=true&theme=dark&bg_color=00000000&text_color=ffffff&icon_color=58a6ff&title_color=58a6ff&border_color=30363d&count_private=true&include_all_commits=true"
              alt="GitHub Stats"
              className="rounded-lg shadow-lg"
            />
            {/* Top Languages */}
            <img 
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=JeanCHDJdev&layout=compact&theme=dark&bg_color=00000000&text_color=ffffff&title_color=58a6ff&border_color=30363d&count_private=true&include_all_commits=true"
              alt="Top Languages"
              className="rounded-lg shadow-lg"
            />
          </div>
          {/* GitHub Contributions Graph */}
          <div className="mt-8">
            <img 
              src="https://github-readme-activity-graph.vercel.app/graph?username=JeanCHDJdev&theme=github-dark&bg_color=00000000&color=58a6ff&line=58a6ff&point=ffffff&area=true&hide_border=true"
              alt="GitHub Activity Graph"
              className="rounded-lg shadow-lg max-w-full"
            />
          </div>
          <StandardButton/>
        </div>
    </div>
  );
};

export default Page;