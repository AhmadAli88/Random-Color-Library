
import PropTypes from 'prop-types';
import randomColor from 'randomcolor';

const Tag = ({ label }) => {
  const color = randomColor({ luminosity: 'light', seed: label });

  return (
    <span
      style={{
        backgroundColor: color,
        color: '#333',
        padding: '5px 10px',
        borderRadius: '15px',
        margin: '5px',
        fontSize: '14px',
        display: 'inline-block',
      }}
    >
      {label}
    </span>
  );
};

Tag.propTypes = {
  label: PropTypes.string.isRequired,
};

const TagList = ({ tags }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {tags.map((tag, index) => (
        <Tag key={index} label={tag} />
      ))}
    </div>
  );
};

TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TagList;
