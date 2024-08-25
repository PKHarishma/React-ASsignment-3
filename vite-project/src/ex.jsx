import ReactDOM from "react-dom"
const para=<h1>hellooooooo</h1> //creating element
const Next=()=>  creating //functionslm component
{
    return(
        <div className="title">
            <h1>Heading1</h1>
            <h2>Hedaing2</h2>
            <h3>Heading3</h3>
        </div>
    );
}
const Para1=()=>
{
    return(
        <>{para}
        <Next /></>
    );
};
const Para2=(probs)=>{        //passed attributes
    return(
        
        <p>Hai {probs.att}</p>
        
    )
}


root.render(<Para2 att="Ram"/>);
const Content1=(props)=>
{
    return(
        <>
        <p>{props.att1}</p>
        <p>{props.att2}</p>
        </>
    );
};
const Content2=(props)=>
    {
        return(
            <>
            <p>{props.att1}</p>
            <p>{props.att2}</p>
            </>
        );
    };
const AppLayout=()=>
{
    return(
        <>
        <Content1 att1="Harishma" att2="Sankar"/>
        <Content2 att1="Reshma" att2="Kala"/>
        </>
    )
}

 root.render(<AppLayout/>);
const TitleComponent=()=> {
    return <h1>Title Here</h1>;
  }
  
  const App=()=> {  //title component
    return (
      <>
        {TitleComponent()} 
      </>
    );
  }
  const root=ReactDOM.createRoot(document.getElementById("root"));
 root.render(<App/>);