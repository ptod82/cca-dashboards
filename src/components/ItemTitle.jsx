import imgSDG from '../assets/sdg-color.png';

export default function ItemTitle({ info, title }) { 
  return (
    <h2>
      {
        Number(info.flagSDG) === 1 ? (
        <>
            <img src={imgSDG} alt="SDG logo" className="sdg-logo"/>
          SDG&nbsp;
        </>
        ) : null 
      }          
      {title}
    </h2>
  )
}