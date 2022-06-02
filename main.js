let form = document.getElementById("form")
let input = document.getElementById("input")
let msg = document.getElementById("msg")
let posts = document.getElementById("posts")

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    console.log("button clicked")
    formValidation()
});

{/*este metodo valida que haya texto en el formulario */}
let formValidation = () => {      
    if(input.value === ""){
        msg.innerHTML = "Post cannot be blank"
        console.log("failure")
    }else{
    console.log("success")
    msg.innerHTML = "";
    acceptData();  //mandamos a llamar el metodo en el success
    }
};

let data = {}

{/*funcion para colectar los datos en el arreglo data */}
let acceptData = () => {
    data["text"] = input.value
    console.log(data)
    createPost()
}

let createPost = () => {
   posts.innerHTML +=  //mandamos el data al html para que aparezca el post
                                // con el + los iconos permaneceran cuando el post aparezca
    `<div>                      
        <p>${data.text}</p>  
            <span class="options">
                <i onClick="editPost(this)" class="fas fa-edit"></i>
                <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
            </span>
    </div>`;
    input.value = "" //este input ayuda a limpiar el formulario cada de que el boton de post reacciona
data.text // la estructura html permitira enlistar los posts en vez de amontonarlos
} 

let deletePost = (e) => { //este metodo se manda a llamar en el icono trash
e.parentElement.parentElement.remove();//este metodo remueve el papa que contiene los iconos pero necesitamos que se remueva tambien el post entonces se tiene que ir un nivel mas arriba un papa por eso se pone 2 veces el parent element
}

let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;//permite regresar el texto al formulario para editarlo
  e.parentElement.parentElement.remove();

}