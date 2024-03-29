import  Container  from "react-bootstrap/Container"
import events from "../data/events.json"
import Event from "./Event"
import Row from "react-bootstrap/Row"
import Alert from "react-bootstrap/Alert"
import { useEffect, useState } from "react"
function Events() {


    const [isShowAlert , setIsShowAlert] = useState(false)
    const [isWelcome, setIsWelcome] = useState(true);

    useEffect(() => {
      const isWelcomeTimeout = setTimeout(() => {
        setIsWelcome(false);
      }, 3000);
  
      return () => {
        clearTimeout(isWelcomeTimeout);
      };
    }, []);
    const showAlert = ()=>{

        setIsShowAlert(true)

        setTimeout(()=>
        setIsShowAlert(false)
        , 2000 )
    }
  return (


    <>
 {isWelcome && (
        <Alert style={{ width: "70%", marginBottom: 40 }} variant="success">
          Hey welcome to Esprit Events
        </Alert>
      )}
<Container>

    <Row>
   {events.map((event,index)=>(

      <Event  key={index} event={event} showAlert={showAlert}  />
     
   ))}

</Row>




{isShowAlert &&(<Alert variant="success">
      <Alert.Heading>You are booked an event</Alert.Heading>
      
    </Alert>) }

</Container>
    
    </>
  )
}

export default Events