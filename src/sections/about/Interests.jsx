const Interests = () => {
  const hobbiesInt = [
    'Music composition/production',
    'Music performance',
    'Woodworking',
    'Microcontrollers',
    '3D Printing',
    'Dogs',
    'Super Smash Brothers Ultimate',
  ];
  const filmTvInt = [
    'Severance',
    'Survivor',
    'Arrival',
    'Adaptation',
    'Being John Malkovich',
    'Coherence',
    'Kill Bill',
    'Fargo',
  ];
  const musicInt = [
    'Jungle',
    'Daniel Caesar',
    'Tame Impala',
    'Amy Winehouse',
    'Kendrick Lamar',
    'Hiatus Kaiyote',
    'Paul Simon',
    'Hozier',
  ];
  const artDesignInt = [
    'Minimalism',
    'Monochromatic design',
    'Cassette Futurism',
    'Abstract expressionism',
    'Pop art',
    'Wes Anderson',
    'Liminal space',
  ]
  return (
    <>
      <div className="interests-parent-container">
        <h2 className="interests-title">Interests</h2>
        <div className="interests-container" id="hobbies-container">
          <h3 className="interests-subtitle" id="hobbies-title">Hobbies</h3>
          <ul className="interests-list" id="hobbies-list">
            {hobbiesInt.map((item) => (
              <li className="interest-item">{item}</li>
            ))}
          </ul>
        </div>
        <div className="interests-container" id="film-container">
          <h3 className="interests-subtitle" id="film-title">Film/TV</h3>
          <ul className="interests-list" id="film-list">
            {filmTvInt.map((item) => (
              <li className="interest-item">{item}</li>
            ))}
          </ul>
        </div>
        <div className="interests-container" id="music-container">
          <h3 className="interests-subtitle" id="music-title">Music</h3>
          <ul className="interests-list" id="music-list">
            {musicInt.map((item) => (
              <li className="interest-item">{item}</li>
            ))}
          </ul>
        </div>
        <div className="interests-container" id="art-container">
          <h3 className="interests-subtitle" id="art-title">Art/Design</h3>
          <ul className="interests-list" id="art-list">
            {artDesignInt.map((item) => (
              <li className="interest-item">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Interests;