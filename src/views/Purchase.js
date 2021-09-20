const Style =
{

  display: "flex",
  justifyContent: "center"


}



export default function Purchase() {

  return (
    <div style={Style}>
    
      <table  class="table table-bordered " style={{left : "20%",position: "absolute",width: "70%"}}>
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Address</th>
            <th>Pincode</th>
            <th>state</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr>
          <tr>
            <td>Mary</td>
            <td>Moe</td>
            <td>mary@example.com</td>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr>
          <tr>
            <td>July</td>
            <td>Dooley</td>
            <td>july@example.com</td>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr>
          <tr>
            <td>July</td>
            <td>Dooley</td>
            <td>july@example.com</td>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr>
          
        </tbody>
      </table>
    </div>

  );
}