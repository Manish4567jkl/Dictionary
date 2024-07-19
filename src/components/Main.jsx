import React from 'react';

function Main({ data }) {
  if (!data || data.length === 0) {
    return <p className="text-center text-red-500">No data available</p>;
  }

  const { word, phonetics, meanings, origin } = data[0];

  const playAudio = (audioUrl) => {
    const audio = new Audio(audioUrl);
    audio.play();
  };

  return (
    <section className="bg-white dark:bg-gray-900 p-6 min-h-screen">
      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-4xl md:text-5xl font-bold font-mono text-blue-800 dark:text-blue-400 mb-4">{word}</h2>
        <div className="mb-4">
          {phonetics.map((phonetic, pIndex) => (
            <div key={phonetic.audio || pIndex} className="flex items-center space-x-3 md:space-x-4">
              <span className="text-lg md:text-xl font-mono text-gray-800 dark:text-gray-300">{phonetic.text}</span>
              {phonetic.audio && (
                <button
                  onClick={() => playAudio(phonetic.audio)}
                  className="w-10 h-10 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center transition dark:bg-blue-400 dark:hover:bg-blue-500"
                >
                  <i className="fa-solid fa-play text-lg md:text-xl"></i>
                </button>
              )}
            </div>
          ))}
        </div>
        {origin && (
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-400">Origin:</h3>
            <p className="text-lg text-gray-800 dark:text-gray-400">{origin}</p>
          </div>
        )}
      </div>
      <div className="space-y-6">
        {meanings.map((meaning, mIndex) => (
          <div key={mIndex} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-300 mb-2">{meaning.partOfSpeech}</h3>
            <h4 className="text-lg md:text-xl font-medium text-gray-800 dark:text-gray-400">Definitions:</h4>
            <ul className="list-disc list-inside mt-2 space-y-2">
              {meaning.definitions.map((definition, dIndex) => (
                <li key={dIndex} className="text-base md:text-lg text-gray-800 dark:text-gray-400">{definition.definition}</li>
              ))}
            </ul>
            {meaning.definitions.map((definition, dIndex) => (
              <div key={dIndex} className="mt-2">
                {definition.example && (
                  <p className="text-base md:text-lg text-gray-800 dark:text-gray-400"><strong>Example:</strong> {definition.example}</p>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Main;
