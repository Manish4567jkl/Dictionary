import React from 'react';

function Main({ data }) {
  if (!data || data.length === 0) {
    return <p className="text-center text-red-500">No data available</p>;
  }

  const { word, phonetics, meanings } = data[0];

  return (
    <section className='bg-black p-6'>
      <div className="bg-gray-100 rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-4xl font-bold font-mono text-blue-800 mb-4">{word}</h2>
        <div className="mb-4">
          {phonetics.map((phonetic, pIndex) => (
            <div key={phonetic.audio || pIndex}>
              <h2 className="text-lg font-mono text-gray-800">{phonetic.text}</h2>
              {phonetic.audio && (
                <audio key={phonetic.audio} controls>
                  <source src={phonetic.audio} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-6">
        {meanings.map((meaning, mIndex) => (
          <div key={mIndex} className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">{meaning.partOfSpeech}</h3>
            <h4 className="text-lg font-medium text-gray-600">Definitions:</h4>
            <ul className="list-disc list-inside mt-2">
              {meaning.definitions.map((definition, dIndex) => (
                <li key={dIndex} className="text-lg text-gray-600">{definition.definition}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Main;
