import React from 'react';

function Main({ data }) {
  if (!data || data.length === 0) {
    return 
  }

  return (
<section className='bg-black'>
<div className="p-6 bg-gray-100 rounded-lg shadow-md">
      {data.map((item, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-4xl font-bold font-mono text-blue-800 mb-4">{item.word}</h2>
          <div>
           {item.phonetics.map((phonetic , pIndex) => {
            <div key={pIndex}>
                <h2>{phonetic.text}</h2>
            </div>
           })}
          </div>
          {item.meanings.map((meaning, mIndex) => (
            <div key={mIndex} className="mb-4">
              <h3 className="text-2xl font-semibold text-gray-700"> {meaning.partOfSpeech}</h3>
              <h1>Definations - </h1>
              <ul className="list-disc list-inside mt-2">
                {meaning.definitions.map((definition, dIndex) => (
                  <li key={dIndex} className="text-lg text-gray-600">{definition.definition}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
</section>
    
  );
}

export default Main;