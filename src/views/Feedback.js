import NewForm from "../component/purchaseForm";


const Style =
{

    display: "flex",
    justifyContent: "center"


}



export default function Feedback() {

    return (
        <div style={Style}>
            <h1 >Feedback</h1>
            <NewForm />

        </div>

    );
}