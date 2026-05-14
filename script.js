let arr=document.querySelectorAll("strong");
        let link=document.querySelector("a");
        link.addEventListener("mouseover",()=>{
            highlight();
        })
        link.addEventListener("mouseout",()=>{
            return_normal();
        })
        function highlight() {
            arr.forEach(ele => {
                ele.style.color="rgb(0, 128, 0)"
            });
        }

        function return_normal() {
            arr.forEach(ele => {
                ele.style.color="rgb(0, 0, 0)"
            });
        }
