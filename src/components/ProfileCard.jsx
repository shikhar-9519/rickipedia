import React from "react";
import "../styles/profilecard.css";
import "../styles/common.css";
import { CHARACTERS_STATUS } from "../utils/constants";
import { Link } from "react-router-dom";
import EllipsisText from "react-ellipsis-text";

export default function ProfileCard(props) {
  const { data } = props;
  const { id, image, name, status, species, location, gender } = data ?? {};

  return (
    <Link to={`/character/${id}`} className="card-link">
      <div className="card-container">
        <img src={image} className="card-pic" alt="character-image" />
        <div className="card-content">
          <div className="align-items-start flex-column">
            <div className="card-heading">
            <EllipsisText text={name} length={17}/></div>
            <div className="align-items-center">
              <div
                className="status-icon"
                style={{
                  background:
                    status === CHARACTERS_STATUS.DEAD
                      ? "rgb(214, 61, 46)"
                      : status === CHARACTERS_STATUS.ALIVE
                      ? "rgb(85, 204, 68)"
                      : "rgb(226 175 37)",
                }}
              ></div>
              <div className="typography-3">
                {status} - {species}
              </div>
            </div>
          </div>
          <div className="card-location-content align-items-start">
            <div className="typography-3 text-grey ">Gender:</div>
            <div>{gender}</div>
          </div>
          <div className="card-location-content align-items-start">
            <div className="typography-3 text-grey ">Last known location:</div>
            <div><EllipsisText text={location.name} length={35}/>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
