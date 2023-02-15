
import React  from "react";
function Export() {
var json="";
    $(document).ready(function () {
        $("#export").on("click",function () {
        $("table tbody tr").each(function () {
        json ="";
        $(this).find("td").each(function () {
            $this=$(this);
            json+=',"'+$this.attr("class")+'":"'+$this.html()+'"'
        });
        obj=JSON.parse('{'+json.substr(1)+'}');
        console.log(obj);
        });
        });
    });
}
export default Export;