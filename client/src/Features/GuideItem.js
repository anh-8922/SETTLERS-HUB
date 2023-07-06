import Linkify from 'react-linkify';
//import '../Styles/component.css';

// const LineBreak = () => <br />;

const CustomLinkify = ({ children }) => (
  <Linkify componentDecorator={(decoratedHref, decoratedText, key) => (
    <a href={decoratedHref} 
       key={key} 
       target="_blank" 
       rel="noopener noreferrer"
       style={{ textDecoration: 'none' }} >
      {decoratedText}
    </a>
  )}>
    {children}
  </Linkify>
);

export default function GuideItem(props) {
    const { _id, image, title, subtitle, subtitle1, subtitle2, abstract, paragraph, paragraph1, paragraph2} = props;
    const imagePath =`http://localhost:5000/uploads/${image}`;

    return (
      <div key={_id} className="item-card">
        <h1 style={{color: "#452F38", marginBottom: "1.5rem"}}>{title}</h1>
        <img src={imagePath} alt={title} style={{ width: '400px', height: '300px' }} />
        <p>{abstract}</p>
        <h5>{subtitle}</h5>
        <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'sans-serif', fontSize: '1rem', margin: "2rem 0"}}>
            <CustomLinkify >{paragraph}</CustomLinkify>
        </pre>
        <h5>{subtitle1}</h5>
        <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'sans-serif', fontSize: '1rem', margin: "2rem 0"}}>
            <CustomLinkify >{paragraph1}</CustomLinkify>
        </pre>
        <h5>{subtitle2}</h5>
        <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'sans-serif', fontSize: '1rem', margin: "2rem 0"}}>
            <CustomLinkify >{paragraph2}</CustomLinkify>
        </pre>
      </div>
    );
  }