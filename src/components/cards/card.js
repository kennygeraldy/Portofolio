import React from 'react';

const Card = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg p-6 max-w-sm">
        <div className="h-40 bg-gray-300 rounded-md mb-4"></div>
        <h2 className="text-2xl font-bold text-white mb-4 text-center">Learning-In Apps</h2>
        <p className="text-white text-opacity-80 text-center">
          Learning App adalah aplikasi pembelajaran yang dirancang untuk membantu pengguna
          dalam proses belajar dengan cara yang interaktif dan menyenangkan. Dikembangkan
          menggunakan Android Studio dan Kotlin, aplikasi ini menyediakan berbagai fitur
          yang mendukung pengalaman belajar yang efektif.
        </p>
        <a href="#" className="inline-block mt-4 text-purple-400 hover:underline w-full text-center">
          Inspect &rarr;
        </a>
      </div>
    </div>
  );
};

export default Card;
