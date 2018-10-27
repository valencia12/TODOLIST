 window.onload = init;
   
 function init() {
     let todoList = {
         listHTML: document.getElementById("todoList"),
         listTask: [],
         add(task, priority = false) {
            
            let element = document.createElement("li");
             let element1 = document.createElement("button");
             let element2 = document.createElement("button");
             element.innerText = task;
             element1.style.background = "#008080";
             element1.style.border = "none";
             element1.style.display = "inline-block";
             element1.innerText = "Eliminar";   
             element2.style.background = "#008080";
             element2.style.border = "none";
             element2.style.display = "inline-block";
             element2.innerText = "Marcar";
             this.listHTML.appendChild(element1);
             this.listHTML.appendChild(element2);
             element2.addEventListener("click", () =>{
                 element.style.textDecoration = "line-through";
             })
             element1.addEventListener("click", () => {
                let parent = element1.parentNode;
                if(parent){
                    parent.removeChild(element);
                    parent.removeChild(element1);
                    parent.removeChild(element2);
                }
            })

             
            // Añadir un boton para marcar de finalizado
            // Elmine de la lista

             if (priority) {
                 this.listTask.unshift({
                     element,
                     task
                 });
                 this.listHTML.insertBefore(element, this.listHTML.childNodes[0]);
                 this.listHTML.insertBefore(element1, this.listHTML.childNodes[0]);
                 this.listHTML.insertBefore(element2, this.listHTML.childNodes[0]);
                 element1.style.background = "red";
                 
             } else {
                 this.listTask.push({
                     element,
                     task
                 });
                 this.listHTML.appendChild(element);
             }
         }
     }

     let form = document.managerTask;
     form.addEventListener("submit", (evt) => {
         evt.preventDefault();
         let task = form.task.value;

         let validTask = /.{2,}/;
         if (!validTask.test(task)) {
             console.log("Ingrese una descripcion clara");
             return false;
         }

         todoList.add(task, form.important.checked);

     });
 }