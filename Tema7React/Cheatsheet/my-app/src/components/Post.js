function Post(props) {

    const defaultTitle = "Sin título"
  return (
    <>{ props.title ? (<h1>{props.title}</h1>) : (<h1>{defaultTitle}</h1>)
    }      
      <p>{props.paragraph}</p>
      <button className="btn btn-success">{props.btntxt}</button>
      <a href={props.link}></a>
    </>    
  );
}

export default Post;