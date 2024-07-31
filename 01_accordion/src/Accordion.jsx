import PropTypes from 'prop-types';
import './Accordion.css';

const AccordionItem = () => {


  return (
    <div className='accordion-container'>
     hii
    </div>
  );
};

AccordionItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  toggleAccordion: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default AccordionItem;
