 
const arr = [
    {
        firstname :"manoj",
        lastname :"kumar",
        empid :"124",
    },
    {
        firstname :"prabath",
        lastname :"chandhan",
        empid :"119",
    },
    {
        firstname :"pooja",
        lastname :"sahu",
        empid :"128",
    },
    {
        firstname :"subbash",
        lastname :"kumar",
        empid :"114",
    },
]
const Example = () =>{
     return(
        <>
         <div>Table Of Employes</div>
         <table><thead><tr><th>S.no</th><th>First Name</th><th>Last Name</th><th>Emp.ID</th></tr></thead>
         <tbody>
            {arr.map((arrr)=>{
                return(
                    <tr className="tr-class">
                    <td>{arrr.empid}</td>
                    <td>{arrr.firstname}</td>
                    <td>{arrr.lastname}</td>
                    <td>{arrr.empid}</td>
                 </tr> 
                )
                         
                 })}
            </tbody>
         </table>
        </>
    )
}
export default Example;