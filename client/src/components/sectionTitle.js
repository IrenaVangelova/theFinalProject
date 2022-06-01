const SectionTitle = (props) => {
  return (
    <div style={{ display: 'flex', alignText: 'flex-end', marginTop: '6rem'}}>
      <div className='section-title unnamed-character-style-5'>{props.title}</div>
      <div
        style={{
          borderBottom: '1px solid #D8D8D8',
          flexGrow: '1',
          marginBottom: '0.7rem',
          marginLeft: '2rem',
        }}
      ></div>
    </div>
  );
};

export default SectionTitle;