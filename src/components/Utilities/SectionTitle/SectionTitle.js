import titleBottomImg from '../../../assets/img/bg/circle_left.png'
const SectionTitle = ({ titlefirst, titleSec }) => {
  return (
    <div className='section-title-main'>
      <h2>{titlefirst} <span>{titleSec}</span></h2>
      <img src={titleBottomImg} alt="circle left" />
    </div>
  );
}

export default SectionTitle;