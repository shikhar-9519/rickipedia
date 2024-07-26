// CharacterDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/characterdetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVenusMars, faMapMarkerAlt, faGlobe, faCalendarAlt, faUser, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { BeatLoader } from "react-spinners";

export default function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        const data = await response.json();
        setCharacter(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching character details:', error);
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  if (loading) {
    return (
      <div className="loading-container">
      <BeatLoader
        color={"grey"}
        loading={loading}
        size={50}
        aria-label="Loading..."
        data-testid="loader"
      />
      </div>
    );
  }

  if (!character) {
    return (
      <div className="error-container">
        <p>Character not found.</p>
      </div>
    );
  }

  return (
    <div className="character-detail-container">
      <div className="character-header">
        <img
          src={character.image}
          alt={character.name}
          className="character-image"
        />
        <h1 className="character-name">{character.name}</h1>
      </div>
      <div className="character-details">
        <div className="character-status">
          <span className={`status-dot ${character.status.toLowerCase()}`}></span>
          <span className="character-status-text">{character.status}</span>
        </div>
        <ul className="character-info-list">
          <li>
            <FontAwesomeIcon icon={faInfoCircle} className="icon" />
            <strong>Species:</strong> {character.species}
          </li>
          {character.type && (
            <li>
              <FontAwesomeIcon icon={faUser} className="icon" />
              <strong>Type:</strong> {character.type}
            </li>
          )}
          <li>
            <FontAwesomeIcon icon={faVenusMars} className="icon" />
            <strong>Gender:</strong> {character.gender}
          </li>
          <li>
            <FontAwesomeIcon icon={faGlobe} className="icon" />
            <strong>Origin:</strong>{' '}
            <a
              href={character.origin.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {character.origin.name}
            </a>
          </li>
          <li>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
            <strong>Location:</strong>{' '}
            <a
              href={character.location.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {character.location.name}
            </a>
          </li>
          <li>
            <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
            <strong>Created On:</strong>{' '}
            {new Date(character.created).toLocaleDateString()}
          </li>
        </ul>
      </div>
    </div>
  );
}
