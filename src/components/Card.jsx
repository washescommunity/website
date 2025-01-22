import PropTypes from 'prop-types';

const Card = ({ imgSrc, name, memberType, university, linkedinUrl, lattesUrl }) => {
  return (
    <div className="w-[300px] h-[320px] p-5 flex justify-center items-center bg-white rounded-xl shadow-md overflow-hidden border">
      <div className="flex flex-col items-center">
        <img
          src={imgSrc}
          alt={name}
          className="w-24 h-24 rounded-full"
        />
        <div className="text-center mt-4">
          <div>
            <h2 className="text-xl font-bold text-gray-800">{name}</h2>
            <p className="text-gray-600">{memberType}</p>
          </div>
          <p className="text-gray-500 mt-2 break-words w-full text-center max-w-full">
            {university}
          </p>
        </div>
        <div className="flex space-x-4 mt-4">
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-blue-500"
          >
            <img
              src="./assets/imgs/linkedin_icon.png"
              alt="LinkedIn"
              className="w-6 h-6"
            />
          </a>        
          <a
            href={lattesUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-blue-500"
          >
            <img
              src="./assets/imgs/lattes.svg"
              alt="Lattes"
              className="w-6 h-6"
          />
          </a>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  memberType: PropTypes.string.isRequired,
  university: PropTypes.string.isRequired,
  linkedinUrl: PropTypes.string.isRequired,
  lattesUrl: PropTypes.string.isRequired,
};

export default Card;
