import Form from "../component/Form";
const Style = 
    {

        display: "flex",
  justifyContent: "center"
       
         
    }



export default function Events() 
{
    
    return(
        <div style={Style}>
              <h1 >Events</h1>

              <Form />
        </div>
     
    );
}